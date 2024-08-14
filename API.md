# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventBridgeSchedule <a name="EventBridgeSchedule" id="awscdk-construct-fetch-job.EventBridgeSchedule"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-fetch-job.EventBridgeSchedule.Initializer"></a>

```typescript
import { EventBridgeSchedule } from 'awscdk-construct-fetch-job'

new EventBridgeSchedule(scope: Construct, id: string, props: EventBridgeScheduleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-fetch-job.EventBridgeSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-fetch-job.EventBridgeSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-fetch-job.EventBridgeSchedule.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-fetch-job.EventBridgeScheduleProps">EventBridgeScheduleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-fetch-job.EventBridgeSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-fetch-job.EventBridgeSchedule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-fetch-job.EventBridgeSchedule.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-fetch-job.EventBridgeScheduleProps">EventBridgeScheduleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-fetch-job.EventBridgeSchedule.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-fetch-job.EventBridgeSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-fetch-job.EventBridgeSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-fetch-job.EventBridgeSchedule.isConstruct"></a>

```typescript
import { EventBridgeSchedule } from 'awscdk-construct-fetch-job'

EventBridgeSchedule.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-fetch-job.EventBridgeSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-fetch-job.EventBridgeSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-fetch-job.EventBridgeSchedule.property.rule">rule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-fetch-job.EventBridgeSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `rule`<sup>Required</sup> <a name="rule" id="awscdk-construct-fetch-job.EventBridgeSchedule.property.rule"></a>

```typescript
public readonly rule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

---


### FetchJob <a name="FetchJob" id="awscdk-construct-fetch-job.FetchJob"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-fetch-job.FetchJob.Initializer"></a>

```typescript
import { FetchJob } from 'awscdk-construct-fetch-job'

new FetchJob(scope: Construct, id: string, __2: FetchJobProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-fetch-job.FetchJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-fetch-job.FetchJob.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-fetch-job.FetchJob.Initializer.parameter.__2">__2</a></code> | <code><a href="#awscdk-construct-fetch-job.FetchJobProps">FetchJobProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-fetch-job.FetchJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-fetch-job.FetchJob.Initializer.parameter.id"></a>

- *Type:* string

---

##### `__2`<sup>Required</sup> <a name="__2" id="awscdk-construct-fetch-job.FetchJob.Initializer.parameter.__2"></a>

- *Type:* <a href="#awscdk-construct-fetch-job.FetchJobProps">FetchJobProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-fetch-job.FetchJob.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-fetch-job.FetchJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-fetch-job.FetchJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-fetch-job.FetchJob.isConstruct"></a>

```typescript
import { FetchJob } from 'awscdk-construct-fetch-job'

FetchJob.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-fetch-job.FetchJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-fetch-job.FetchJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-fetch-job.FetchJob.property.rule">rule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-fetch-job.FetchJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `rule`<sup>Required</sup> <a name="rule" id="awscdk-construct-fetch-job.FetchJob.property.rule"></a>

```typescript
public readonly rule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

---


### FetchLambda <a name="FetchLambda" id="awscdk-construct-fetch-job.FetchLambda"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-fetch-job.FetchLambda.Initializer"></a>

```typescript
import { FetchLambda } from 'awscdk-construct-fetch-job'

new FetchLambda(scope: Construct, id: string, props: FetchLambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-fetch-job.FetchLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-fetch-job.FetchLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-fetch-job.FetchLambda.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-fetch-job.FetchLambdaProps">FetchLambdaProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-fetch-job.FetchLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-fetch-job.FetchLambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-fetch-job.FetchLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-fetch-job.FetchLambdaProps">FetchLambdaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-fetch-job.FetchLambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-fetch-job.FetchLambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-fetch-job.FetchLambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-fetch-job.FetchLambda.isConstruct"></a>

```typescript
import { FetchLambda } from 'awscdk-construct-fetch-job'

FetchLambda.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-fetch-job.FetchLambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-fetch-job.FetchLambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-fetch-job.FetchLambda.property.func">func</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-fetch-job.FetchLambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `func`<sup>Required</sup> <a name="func" id="awscdk-construct-fetch-job.FetchLambda.property.func"></a>

```typescript
public readonly func: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

---


## Structs <a name="Structs" id="Structs"></a>

### EventBridgeScheduleProps <a name="EventBridgeScheduleProps" id="awscdk-construct-fetch-job.EventBridgeScheduleProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-fetch-job.EventBridgeScheduleProps.Initializer"></a>

```typescript
import { EventBridgeScheduleProps } from 'awscdk-construct-fetch-job'

const eventBridgeScheduleProps: EventBridgeScheduleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-fetch-job.EventBridgeScheduleProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | *No description.* |
| <code><a href="#awscdk-construct-fetch-job.EventBridgeScheduleProps.property.target">target</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction \| aws-cdk-lib.aws_stepfunctions.StateMachine</code> | *No description.* |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="awscdk-construct-fetch-job.EventBridgeScheduleProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

---

##### `target`<sup>Required</sup> <a name="target" id="awscdk-construct-fetch-job.EventBridgeScheduleProps.property.target"></a>

```typescript
public readonly target: NodejsFunction | StateMachine;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction | aws-cdk-lib.aws_stepfunctions.StateMachine

---

### FetchJobProps <a name="FetchJobProps" id="awscdk-construct-fetch-job.FetchJobProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-fetch-job.FetchJobProps.Initializer"></a>

```typescript
import { FetchJobProps } from 'awscdk-construct-fetch-job'

const fetchJobProps: FetchJobProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-fetch-job.FetchJobProps.property.emailAddr">emailAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-fetch-job.FetchJobProps.property.fetchCount">fetchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-fetch-job.FetchJobProps.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-fetch-job.FetchJobProps.property.sessionInitializationUrl">sessionInitializationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-fetch-job.FetchJobProps.property.startTime">startTime</a></code> | <code>aws-cdk-lib.aws_events.CronOptions</code> | *No description.* |
| <code><a href="#awscdk-construct-fetch-job.FetchJobProps.property.indexOfRenditions">indexOfRenditions</a></code> | <code>number</code> | *No description.* |

---

##### `emailAddr`<sup>Required</sup> <a name="emailAddr" id="awscdk-construct-fetch-job.FetchJobProps.property.emailAddr"></a>

```typescript
public readonly emailAddr: string;
```

- *Type:* string

---

##### `fetchCount`<sup>Required</sup> <a name="fetchCount" id="awscdk-construct-fetch-job.FetchJobProps.property.fetchCount"></a>

```typescript
public readonly fetchCount: number;
```

- *Type:* number

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="awscdk-construct-fetch-job.FetchJobProps.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

---

##### `sessionInitializationUrl`<sup>Required</sup> <a name="sessionInitializationUrl" id="awscdk-construct-fetch-job.FetchJobProps.property.sessionInitializationUrl"></a>

```typescript
public readonly sessionInitializationUrl: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="awscdk-construct-fetch-job.FetchJobProps.property.startTime"></a>

```typescript
public readonly startTime: CronOptions;
```

- *Type:* aws-cdk-lib.aws_events.CronOptions

---

##### `indexOfRenditions`<sup>Optional</sup> <a name="indexOfRenditions" id="awscdk-construct-fetch-job.FetchJobProps.property.indexOfRenditions"></a>

```typescript
public readonly indexOfRenditions: number;
```

- *Type:* number

---

### FetchLambdaProps <a name="FetchLambdaProps" id="awscdk-construct-fetch-job.FetchLambdaProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-fetch-job.FetchLambdaProps.Initializer"></a>

```typescript
import { FetchLambdaProps } from 'awscdk-construct-fetch-job'

const fetchLambdaProps: FetchLambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-fetch-job.FetchLambdaProps.property.indexOfRenditions">indexOfRenditions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-fetch-job.FetchLambdaProps.property.sessionInitializationUrl">sessionInitializationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-fetch-job.FetchLambdaProps.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |

---

##### `indexOfRenditions`<sup>Required</sup> <a name="indexOfRenditions" id="awscdk-construct-fetch-job.FetchLambdaProps.property.indexOfRenditions"></a>

```typescript
public readonly indexOfRenditions: number;
```

- *Type:* number

---

##### `sessionInitializationUrl`<sup>Required</sup> <a name="sessionInitializationUrl" id="awscdk-construct-fetch-job.FetchLambdaProps.property.sessionInitializationUrl"></a>

```typescript
public readonly sessionInitializationUrl: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="awscdk-construct-fetch-job.FetchLambdaProps.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---



