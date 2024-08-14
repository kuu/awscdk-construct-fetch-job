import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kuu Miyazaki',
  authorAddress: 'miyazaqui@gmail.com',
  cdkVersion: '2.151.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'awscdk-construct-fetch-job',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/kuu/awscdk-construct-fetch-job.git',
  keywords: [
    'cdk',
    'cdk-construct',
    'MediaTailor',
    'Lambda',
    'EventBridge',
    'StepFunctions',
  ],
  license: 'MIT',
  licensed: true,

  deps: ['aws-cdk-lib', 'constructs'],
  bundledDeps: [
    '@aws-sdk/client-sns',
    'hls-parser',
    'node-fetch',
  ],
  description: 'AWS CDK Construct for scheduling a cron job that periodically accesses a MediaTailor endpoint',
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();