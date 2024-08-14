import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { FetchJob } from '../src';

test('Create MediaLive', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new FetchJob(stack, 'FetchJob', {
    emailAddr: 'you@example.com',
    sessionInitializationUrl: 'https://example.com/session/index.m3u8',
    startTime: { hour: '23', minute: '0' },
    intervalInSeconds: 2,
    fetchCount: 30,
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::Lambda::Function', 1);
  template.hasResource('AWS::Events::Rule', 1);
  template.hasResource('AWS::StepFunctions::StateMachine', 1);
});
