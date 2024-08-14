# awscdk-construct-fetch-job
[![View on Construct Hub](https://constructs.dev/badge?awscdk-construct-fetch-job)](https://constructs.dev/packages/awscdk-construct-fetch-job)

CDK Construct for scheduling a cron job that periodically accesses a MediaTialor endpoint
* Input:
  * Email address for the notification
  * List of input attachements to be switched in a toggle manner
  * Switch interval (minutes)
* Output:
  * Lambda function for fetching MediaTailor HLS/DASH endpoint
  * StepFunctions state-machine for invoking the Lambda function with a specified interval/count
  * EventBridge rule for periodically running the state-machine
  * SNS Topic for notifiying any errors

  ![Architecture Diagram](./resources.png)

## Install
[![NPM](https://nodei.co/npm/awscdk-construct-fetch-job.png?mini=true)](https://nodei.co/npm/awscdk-construct-fetch-job/)

## Usage
```ts
import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { FetchJob } from 'awscdk-construct-fetch-job';

export class ExampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const job = new FetchJob(this, 'FetchSchedule', {
      emailAddr: 'Your email address',
      sessionInitializationUrl: 'MediaTailor session initialization URL',
      startTime: { hour: '11', minute: '59' }, // Cron pattern
      intervalInSeconds: 2, // Fetch interval
      fetchCount: 30, // Fetch count per cron job
    });

    // Print the ARN of the EventBridge rule
    new CfnOutput(this, "EventBridgeRuleARN", {
      value: job.rule.ruleArn,
      exportName: "EventBridgeRuleARN",
      description: "ARN of EventBridge Rule - fetch",
    });
  }
}
```
