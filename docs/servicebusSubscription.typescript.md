# `servicebusSubscription` Submodule <a name="`servicebusSubscription` Submodule" id="@cdktf/provider-azurerm.servicebusSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusSubscription <a name="ServicebusSubscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription azurerm_servicebus_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer"></a>

```typescript
import { servicebusSubscription } from '@cdktf/provider-azurerm'

new servicebusSubscription.ServicebusSubscription(scope: Construct, id: string, config: ServicebusSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig">ServicebusSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig">ServicebusSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putClientScopedSubscription">putClientScopedSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetAutoDeleteOnIdle">resetAutoDeleteOnIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetClientScopedSubscription">resetClientScopedSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetClientScopedSubscriptionEnabled">resetClientScopedSubscriptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDeadLetteringOnFilterEvaluationError">resetDeadLetteringOnFilterEvaluationError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDeadLetteringOnMessageExpiration">resetDeadLetteringOnMessageExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDefaultMessageTtl">resetDefaultMessageTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetEnableBatchedOperations">resetEnableBatchedOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetForwardDeadLetteredMessagesTo">resetForwardDeadLetteredMessagesTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetForwardTo">resetForwardTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetLockDuration">resetLockDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetRequiresSession">resetRequiresSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClientScopedSubscription` <a name="putClientScopedSubscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putClientScopedSubscription"></a>

```typescript
public putClientScopedSubscription(value: ServicebusSubscriptionClientScopedSubscription): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putClientScopedSubscription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicebusSubscriptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a>

---

##### `resetAutoDeleteOnIdle` <a name="resetAutoDeleteOnIdle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetAutoDeleteOnIdle"></a>

```typescript
public resetAutoDeleteOnIdle(): void
```

##### `resetClientScopedSubscription` <a name="resetClientScopedSubscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetClientScopedSubscription"></a>

```typescript
public resetClientScopedSubscription(): void
```

##### `resetClientScopedSubscriptionEnabled` <a name="resetClientScopedSubscriptionEnabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetClientScopedSubscriptionEnabled"></a>

```typescript
public resetClientScopedSubscriptionEnabled(): void
```

##### `resetDeadLetteringOnFilterEvaluationError` <a name="resetDeadLetteringOnFilterEvaluationError" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDeadLetteringOnFilterEvaluationError"></a>

```typescript
public resetDeadLetteringOnFilterEvaluationError(): void
```

##### `resetDeadLetteringOnMessageExpiration` <a name="resetDeadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDeadLetteringOnMessageExpiration"></a>

```typescript
public resetDeadLetteringOnMessageExpiration(): void
```

##### `resetDefaultMessageTtl` <a name="resetDefaultMessageTtl" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDefaultMessageTtl"></a>

```typescript
public resetDefaultMessageTtl(): void
```

##### `resetEnableBatchedOperations` <a name="resetEnableBatchedOperations" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetEnableBatchedOperations"></a>

```typescript
public resetEnableBatchedOperations(): void
```

##### `resetForwardDeadLetteredMessagesTo` <a name="resetForwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetForwardDeadLetteredMessagesTo"></a>

```typescript
public resetForwardDeadLetteredMessagesTo(): void
```

##### `resetForwardTo` <a name="resetForwardTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetForwardTo"></a>

```typescript
public resetForwardTo(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLockDuration` <a name="resetLockDuration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetLockDuration"></a>

```typescript
public resetLockDuration(): void
```

##### `resetRequiresSession` <a name="resetRequiresSession" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetRequiresSession"></a>

```typescript
public resetRequiresSession(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicebusSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isConstruct"></a>

```typescript
import { servicebusSubscription } from '@cdktf/provider-azurerm'

servicebusSubscription.ServicebusSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformElement"></a>

```typescript
import { servicebusSubscription } from '@cdktf/provider-azurerm'

servicebusSubscription.ServicebusSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformResource"></a>

```typescript
import { servicebusSubscription } from '@cdktf/provider-azurerm'

servicebusSubscription.ServicebusSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport"></a>

```typescript
import { servicebusSubscription } from '@cdktf/provider-azurerm'

servicebusSubscription.ServicebusSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServicebusSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicebusSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicebusSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscription">clientScopedSubscription</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference">ServicebusSubscriptionClientScopedSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference">ServicebusSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.autoDeleteOnIdleInput">autoDeleteOnIdleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionEnabledInput">clientScopedSubscriptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionInput">clientScopedSubscriptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnFilterEvaluationErrorInput">deadLetteringOnFilterEvaluationErrorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnMessageExpirationInput">deadLetteringOnMessageExpirationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.defaultMessageTtlInput">defaultMessageTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.enableBatchedOperationsInput">enableBatchedOperationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardDeadLetteredMessagesToInput">forwardDeadLetteredMessagesToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardToInput">forwardToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lockDurationInput">lockDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.maxDeliveryCountInput">maxDeliveryCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.requiresSessionInput">requiresSessionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.topicIdInput">topicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.autoDeleteOnIdle">autoDeleteOnIdle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionEnabled">clientScopedSubscriptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnFilterEvaluationError">deadLetteringOnFilterEvaluationError</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnMessageExpiration">deadLetteringOnMessageExpiration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.defaultMessageTtl">defaultMessageTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.enableBatchedOperations">enableBatchedOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardDeadLetteredMessagesTo">forwardDeadLetteredMessagesTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardTo">forwardTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lockDuration">lockDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.maxDeliveryCount">maxDeliveryCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.requiresSession">requiresSession</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.topicId">topicId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientScopedSubscription`<sup>Required</sup> <a name="clientScopedSubscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscription"></a>

```typescript
public readonly clientScopedSubscription: ServicebusSubscriptionClientScopedSubscriptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference">ServicebusSubscriptionClientScopedSubscriptionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.timeouts"></a>

```typescript
public readonly timeouts: ServicebusSubscriptionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference">ServicebusSubscriptionTimeoutsOutputReference</a>

---

##### `autoDeleteOnIdleInput`<sup>Optional</sup> <a name="autoDeleteOnIdleInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.autoDeleteOnIdleInput"></a>

```typescript
public readonly autoDeleteOnIdleInput: string;
```

- *Type:* string

---

##### `clientScopedSubscriptionEnabledInput`<sup>Optional</sup> <a name="clientScopedSubscriptionEnabledInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionEnabledInput"></a>

```typescript
public readonly clientScopedSubscriptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientScopedSubscriptionInput`<sup>Optional</sup> <a name="clientScopedSubscriptionInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionInput"></a>

```typescript
public readonly clientScopedSubscriptionInput: ServicebusSubscriptionClientScopedSubscription;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a>

---

##### `deadLetteringOnFilterEvaluationErrorInput`<sup>Optional</sup> <a name="deadLetteringOnFilterEvaluationErrorInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnFilterEvaluationErrorInput"></a>

```typescript
public readonly deadLetteringOnFilterEvaluationErrorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deadLetteringOnMessageExpirationInput`<sup>Optional</sup> <a name="deadLetteringOnMessageExpirationInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnMessageExpirationInput"></a>

```typescript
public readonly deadLetteringOnMessageExpirationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultMessageTtlInput`<sup>Optional</sup> <a name="defaultMessageTtlInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.defaultMessageTtlInput"></a>

```typescript
public readonly defaultMessageTtlInput: string;
```

- *Type:* string

---

##### `enableBatchedOperationsInput`<sup>Optional</sup> <a name="enableBatchedOperationsInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.enableBatchedOperationsInput"></a>

```typescript
public readonly enableBatchedOperationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardDeadLetteredMessagesToInput`<sup>Optional</sup> <a name="forwardDeadLetteredMessagesToInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardDeadLetteredMessagesToInput"></a>

```typescript
public readonly forwardDeadLetteredMessagesToInput: string;
```

- *Type:* string

---

##### `forwardToInput`<sup>Optional</sup> <a name="forwardToInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardToInput"></a>

```typescript
public readonly forwardToInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lockDurationInput`<sup>Optional</sup> <a name="lockDurationInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lockDurationInput"></a>

```typescript
public readonly lockDurationInput: string;
```

- *Type:* string

---

##### `maxDeliveryCountInput`<sup>Optional</sup> <a name="maxDeliveryCountInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.maxDeliveryCountInput"></a>

```typescript
public readonly maxDeliveryCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiresSessionInput`<sup>Optional</sup> <a name="requiresSessionInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.requiresSessionInput"></a>

```typescript
public readonly requiresSessionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServicebusSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a>

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.topicIdInput"></a>

```typescript
public readonly topicIdInput: string;
```

- *Type:* string

---

##### `autoDeleteOnIdle`<sup>Required</sup> <a name="autoDeleteOnIdle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.autoDeleteOnIdle"></a>

```typescript
public readonly autoDeleteOnIdle: string;
```

- *Type:* string

---

##### `clientScopedSubscriptionEnabled`<sup>Required</sup> <a name="clientScopedSubscriptionEnabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionEnabled"></a>

```typescript
public readonly clientScopedSubscriptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deadLetteringOnFilterEvaluationError`<sup>Required</sup> <a name="deadLetteringOnFilterEvaluationError" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnFilterEvaluationError"></a>

```typescript
public readonly deadLetteringOnFilterEvaluationError: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deadLetteringOnMessageExpiration`<sup>Required</sup> <a name="deadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnMessageExpiration"></a>

```typescript
public readonly deadLetteringOnMessageExpiration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultMessageTtl`<sup>Required</sup> <a name="defaultMessageTtl" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.defaultMessageTtl"></a>

```typescript
public readonly defaultMessageTtl: string;
```

- *Type:* string

---

##### `enableBatchedOperations`<sup>Required</sup> <a name="enableBatchedOperations" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.enableBatchedOperations"></a>

```typescript
public readonly enableBatchedOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardDeadLetteredMessagesTo`<sup>Required</sup> <a name="forwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardDeadLetteredMessagesTo"></a>

```typescript
public readonly forwardDeadLetteredMessagesTo: string;
```

- *Type:* string

---

##### `forwardTo`<sup>Required</sup> <a name="forwardTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardTo"></a>

```typescript
public readonly forwardTo: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lockDuration`<sup>Required</sup> <a name="lockDuration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lockDuration"></a>

```typescript
public readonly lockDuration: string;
```

- *Type:* string

---

##### `maxDeliveryCount`<sup>Required</sup> <a name="maxDeliveryCount" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.maxDeliveryCount"></a>

```typescript
public readonly maxDeliveryCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requiresSession`<sup>Required</sup> <a name="requiresSession" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.requiresSession"></a>

```typescript
public readonly requiresSession: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusSubscriptionClientScopedSubscription <a name="ServicebusSubscriptionClientScopedSubscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription.Initializer"></a>

```typescript
import { servicebusSubscription } from '@cdktf/provider-azurerm'

const servicebusSubscriptionClientScopedSubscription: servicebusSubscription.ServicebusSubscriptionClientScopedSubscription = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#client_id ServicebusSubscription#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription.property.isClientScopedSubscriptionShareable">isClientScopedSubscriptionShareable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#is_client_scoped_subscription_shareable ServicebusSubscription#is_client_scoped_subscription_shareable}. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#client_id ServicebusSubscription#client_id}.

---

##### `isClientScopedSubscriptionShareable`<sup>Optional</sup> <a name="isClientScopedSubscriptionShareable" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription.property.isClientScopedSubscriptionShareable"></a>

```typescript
public readonly isClientScopedSubscriptionShareable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#is_client_scoped_subscription_shareable ServicebusSubscription#is_client_scoped_subscription_shareable}.

---

### ServicebusSubscriptionConfig <a name="ServicebusSubscriptionConfig" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.Initializer"></a>

```typescript
import { servicebusSubscription } from '@cdktf/provider-azurerm'

const servicebusSubscriptionConfig: servicebusSubscription.ServicebusSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.maxDeliveryCount">maxDeliveryCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#max_delivery_count ServicebusSubscription#max_delivery_count}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#name ServicebusSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.topicId">topicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#topic_id ServicebusSubscription#topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.autoDeleteOnIdle">autoDeleteOnIdle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#auto_delete_on_idle ServicebusSubscription#auto_delete_on_idle}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.clientScopedSubscription">clientScopedSubscription</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a></code> | client_scoped_subscription block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.clientScopedSubscriptionEnabled">clientScopedSubscriptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#client_scoped_subscription_enabled ServicebusSubscription#client_scoped_subscription_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.deadLetteringOnFilterEvaluationError">deadLetteringOnFilterEvaluationError</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#dead_lettering_on_filter_evaluation_error ServicebusSubscription#dead_lettering_on_filter_evaluation_error}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.deadLetteringOnMessageExpiration">deadLetteringOnMessageExpiration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#dead_lettering_on_message_expiration ServicebusSubscription#dead_lettering_on_message_expiration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.defaultMessageTtl">defaultMessageTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#default_message_ttl ServicebusSubscription#default_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.enableBatchedOperations">enableBatchedOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#enable_batched_operations ServicebusSubscription#enable_batched_operations}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forwardDeadLetteredMessagesTo">forwardDeadLetteredMessagesTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#forward_dead_lettered_messages_to ServicebusSubscription#forward_dead_lettered_messages_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forwardTo">forwardTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#forward_to ServicebusSubscription#forward_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#id ServicebusSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.lockDuration">lockDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#lock_duration ServicebusSubscription#lock_duration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.requiresSession">requiresSession</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#requires_session ServicebusSubscription#requires_session}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#status ServicebusSubscription#status}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `maxDeliveryCount`<sup>Required</sup> <a name="maxDeliveryCount" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.maxDeliveryCount"></a>

```typescript
public readonly maxDeliveryCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#max_delivery_count ServicebusSubscription#max_delivery_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#name ServicebusSubscription#name}.

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#topic_id ServicebusSubscription#topic_id}.

---

##### `autoDeleteOnIdle`<sup>Optional</sup> <a name="autoDeleteOnIdle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.autoDeleteOnIdle"></a>

```typescript
public readonly autoDeleteOnIdle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#auto_delete_on_idle ServicebusSubscription#auto_delete_on_idle}.

---

##### `clientScopedSubscription`<sup>Optional</sup> <a name="clientScopedSubscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.clientScopedSubscription"></a>

```typescript
public readonly clientScopedSubscription: ServicebusSubscriptionClientScopedSubscription;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a>

client_scoped_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#client_scoped_subscription ServicebusSubscription#client_scoped_subscription}

---

##### `clientScopedSubscriptionEnabled`<sup>Optional</sup> <a name="clientScopedSubscriptionEnabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.clientScopedSubscriptionEnabled"></a>

```typescript
public readonly clientScopedSubscriptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#client_scoped_subscription_enabled ServicebusSubscription#client_scoped_subscription_enabled}.

---

##### `deadLetteringOnFilterEvaluationError`<sup>Optional</sup> <a name="deadLetteringOnFilterEvaluationError" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.deadLetteringOnFilterEvaluationError"></a>

```typescript
public readonly deadLetteringOnFilterEvaluationError: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#dead_lettering_on_filter_evaluation_error ServicebusSubscription#dead_lettering_on_filter_evaluation_error}.

---

##### `deadLetteringOnMessageExpiration`<sup>Optional</sup> <a name="deadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.deadLetteringOnMessageExpiration"></a>

```typescript
public readonly deadLetteringOnMessageExpiration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#dead_lettering_on_message_expiration ServicebusSubscription#dead_lettering_on_message_expiration}.

---

##### `defaultMessageTtl`<sup>Optional</sup> <a name="defaultMessageTtl" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.defaultMessageTtl"></a>

```typescript
public readonly defaultMessageTtl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#default_message_ttl ServicebusSubscription#default_message_ttl}.

---

##### `enableBatchedOperations`<sup>Optional</sup> <a name="enableBatchedOperations" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.enableBatchedOperations"></a>

```typescript
public readonly enableBatchedOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#enable_batched_operations ServicebusSubscription#enable_batched_operations}.

---

##### `forwardDeadLetteredMessagesTo`<sup>Optional</sup> <a name="forwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forwardDeadLetteredMessagesTo"></a>

```typescript
public readonly forwardDeadLetteredMessagesTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#forward_dead_lettered_messages_to ServicebusSubscription#forward_dead_lettered_messages_to}.

---

##### `forwardTo`<sup>Optional</sup> <a name="forwardTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forwardTo"></a>

```typescript
public readonly forwardTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#forward_to ServicebusSubscription#forward_to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#id ServicebusSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lockDuration`<sup>Optional</sup> <a name="lockDuration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.lockDuration"></a>

```typescript
public readonly lockDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#lock_duration ServicebusSubscription#lock_duration}.

---

##### `requiresSession`<sup>Optional</sup> <a name="requiresSession" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.requiresSession"></a>

```typescript
public readonly requiresSession: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#requires_session ServicebusSubscription#requires_session}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#status ServicebusSubscription#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicebusSubscriptionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#timeouts ServicebusSubscription#timeouts}

---

### ServicebusSubscriptionTimeouts <a name="ServicebusSubscriptionTimeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.Initializer"></a>

```typescript
import { servicebusSubscription } from '@cdktf/provider-azurerm'

const servicebusSubscriptionTimeouts: servicebusSubscription.ServicebusSubscriptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#create ServicebusSubscription#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#delete ServicebusSubscription#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#read ServicebusSubscription#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#update ServicebusSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#create ServicebusSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#delete ServicebusSubscription#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#read ServicebusSubscription#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/servicebus_subscription#update ServicebusSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusSubscriptionClientScopedSubscriptionOutputReference <a name="ServicebusSubscriptionClientScopedSubscriptionOutputReference" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.Initializer"></a>

```typescript
import { servicebusSubscription } from '@cdktf/provider-azurerm'

new servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resetIsClientScopedSubscriptionShareable">resetIsClientScopedSubscriptionShareable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetIsClientScopedSubscriptionShareable` <a name="resetIsClientScopedSubscriptionShareable" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resetIsClientScopedSubscriptionShareable"></a>

```typescript
public resetIsClientScopedSubscriptionShareable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionDurable">isClientScopedSubscriptionDurable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionShareableInput">isClientScopedSubscriptionShareableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionShareable">isClientScopedSubscriptionShareable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isClientScopedSubscriptionDurable`<sup>Required</sup> <a name="isClientScopedSubscriptionDurable" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionDurable"></a>

```typescript
public readonly isClientScopedSubscriptionDurable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `isClientScopedSubscriptionShareableInput`<sup>Optional</sup> <a name="isClientScopedSubscriptionShareableInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionShareableInput"></a>

```typescript
public readonly isClientScopedSubscriptionShareableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `isClientScopedSubscriptionShareable`<sup>Required</sup> <a name="isClientScopedSubscriptionShareable" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionShareable"></a>

```typescript
public readonly isClientScopedSubscriptionShareable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicebusSubscriptionClientScopedSubscription;
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a>

---


### ServicebusSubscriptionTimeoutsOutputReference <a name="ServicebusSubscriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicebusSubscription } from '@cdktf/provider-azurerm'

new servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicebusSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a>

---



