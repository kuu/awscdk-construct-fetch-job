import { Duration } from 'aws-cdk-lib';
import { Rule } from 'aws-cdk-lib/aws-events';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { EmailSubscription } from 'aws-cdk-lib/aws-sns-subscriptions';
import { Pass, StateMachine, Wait, WaitTime, Chain, Choice, Condition, Succeed, DefinitionBody } from 'aws-cdk-lib/aws-stepfunctions';
import { LambdaInvoke } from 'aws-cdk-lib/aws-stepfunctions-tasks';
import { Schedule, CronOptions } from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';
import { FetchLambda } from './Lambda';
import { EventBridgeSchedule } from './EventBridgeSchedule';

export interface FetchJobProps {
    readonly emailAddr: string;
    readonly sessionInitializationUrl: string;
    readonly startTime: CronOptions;
    readonly intervalInSeconds: number;
    readonly fetchCount: number;
    readonly indexOfRenditions?: number;
}

export class FetchJob extends Construct {
    public rule: Rule;
  
    constructor(scope: Construct, id: string, {
        emailAddr,
        sessionInitializationUrl,
        startTime,
        intervalInSeconds,
        fetchCount,
        indexOfRenditions = 0,
    }: FetchJobProps) {
      super(scope, id);
  
      const notificationTopic = new Topic(this, 'notify-fetch-failure', {
        topicName: 'notify-fetch-failure',
      });
      notificationTopic.addSubscription(new EmailSubscription(emailAddr));
  
      // Create FetchLambda function to fetch the MediaPackage endpoint URL
      const fetchLambda = new FetchLambda(this, 'UrlFetchFetchLambdaFunction', {
        sessionInitializationUrl,
        topicArn: notificationTopic.topicArn,
        indexOfRenditions,
      });
  
      const invoke = new LambdaInvoke(this, 'Invoke with empty object as payload', {
        lambdaFunction: fetchLambda.func,
        inputPath: '$.Payload',
      });
  
      const prepare = new Wait(this, 'Prepare', {
        time: WaitTime.duration(Duration.seconds(30)),
      });
  
      const wait = new Wait(this, 'Wait', {
        time: WaitTime.duration(Duration.seconds(intervalInSeconds)),
      });
  
      // Create a StateMachine that fetches the HLS URL for 2 minutes
      const stateMachine = new StateMachine(this, 'StateMachine', {
        definitionBody: DefinitionBody.fromChainable(Chain.start(
          new Pass(this, 'Start', { parameters: {Payload: {i: 0}},})
        )
          .next(prepare)
          .next(wait)
          .next(invoke)
          .next(
            new Choice(this, "Choice")
            .when(
              Condition.numberLessThan("$.Payload.i", fetchCount),
              wait
            )
            .otherwise(new Succeed(this, "Done"))
          )),
      });
      // Create an EventBridge rule to invoke the lambda function every minute
      const fetchSchedule = new EventBridgeSchedule(this, 'EventBridgeSchedule', {
        target:  stateMachine,
        schedule: Schedule.cron(adjustStartTime(startTime)),
      });
      this.rule = fetchSchedule.rule;
    }
}

function adjustStartTime(startTime: CronOptions): CronOptions {
    let minute = Number.parseInt(startTime.minute ?? '');
    if (Number.isNaN(minute) || minute < 0 || minute > 59) {
        return startTime;
    }
    const curr = new Date();
    const override: {year?: '*', month?: '*', day?: '*', hour?: '*', minute?: '*'} = {};
    let year = Number.parseInt(startTime.year ?? '');
    if (Number.isNaN(year)) {
        year = curr.getUTCFullYear();
        override.year = '*';
    }
    let month = Number.parseInt(startTime.month ?? '');
    if (Number.isNaN(month) || month < 1 || month > 12) {
        const i = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'].indexOf(startTime.month ?? '');
        if (i === -1) {
            month = curr.getUTCMonth() + 1;
            override.month = '*';
        } else {
            month = i + 1;
        }
    }
    let day = Number.parseInt(startTime.day ?? '');
    if (Number.isNaN(day) || day < 1 || day > 31) {
        day = curr.getUTCDate();
        override.day = '*';
    }
    let hour = Number.parseInt(startTime.hour ?? '');
    if (Number.isNaN(hour) || hour < 0 || hour > 23) {
        hour = curr.getUTCHours();
        override.hour = '*';
    }
    let weekDay = Number.parseInt(startTime.weekDay ?? '');
    if (Number.isNaN(weekDay) || weekDay < 1 || weekDay > 7) {
        const i = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].indexOf(startTime.weekDay ?? '');
        if (i === -1) {
            weekDay = -1;
        } else {
            weekDay = i + 1;
        }
    }

    // Subtract 1 minute from the start time
    const originalDate = new Date(Date.UTC(year, month - 1, day, hour, minute));
    const adjustedDate = new Date(originalDate.getTime() - 60000);
    return Object.assign(startTime, {
        year: `${adjustedDate.getUTCFullYear()}`,
        month: weekDay === -1 ? `${adjustedDate.getUTCMonth() + 1}` : undefined,
        day: `${adjustedDate.getUTCDate()}`,
        hour: `${adjustedDate.getUTCHours()}`,
        minute: `${adjustedDate.getUTCMinutes()}`,
        weekDay: override.day === '*' && weekDay !== -1 ? `${adjustedDate.getUTCDate() - originalDate.getUTCDate() === 0 ? weekDay : (weekDay - 1 === 0 ? 7 : weekDay - 1)}` : undefined,
    }, override);
}
