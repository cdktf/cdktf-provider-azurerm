# `streamAnalyticsOutputServicebusQueue` Submodule <a name="`streamAnalyticsOutputServicebusQueue` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputServicebusQueue <a name="StreamAnalyticsOutputServicebusQueue" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue azurerm_stream_analytics_output_servicebus_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer"></a>

```typescript
import { streamAnalyticsOutputServicebusQueue } from '@cdktf/provider-azurerm'

new streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue(scope: Construct, id: string, config: StreamAnalyticsOutputServicebusQueueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig">StreamAnalyticsOutputServicebusQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig">StreamAnalyticsOutputServicebusQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putSerialization">putSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetPropertyColumns">resetPropertyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSharedAccessPolicyKey">resetSharedAccessPolicyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSharedAccessPolicyName">resetSharedAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSystemPropertyColumns">resetSystemPropertyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSerialization` <a name="putSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putSerialization"></a>

```typescript
public putSerialization(value: StreamAnalyticsOutputServicebusQueueSerialization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putTimeouts"></a>

```typescript
public putTimeouts(value: StreamAnalyticsOutputServicebusQueueTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a>

---

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetAuthenticationMode"></a>

```typescript
public resetAuthenticationMode(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPropertyColumns` <a name="resetPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetPropertyColumns"></a>

```typescript
public resetPropertyColumns(): void
```

##### `resetSharedAccessPolicyKey` <a name="resetSharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSharedAccessPolicyKey"></a>

```typescript
public resetSharedAccessPolicyKey(): void
```

##### `resetSharedAccessPolicyName` <a name="resetSharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSharedAccessPolicyName"></a>

```typescript
public resetSharedAccessPolicyName(): void
```

##### `resetSystemPropertyColumns` <a name="resetSystemPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSystemPropertyColumns"></a>

```typescript
public resetSystemPropertyColumns(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsOutputServicebusQueue resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isConstruct"></a>

```typescript
import { streamAnalyticsOutputServicebusQueue } from '@cdktf/provider-azurerm'

streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformElement"></a>

```typescript
import { streamAnalyticsOutputServicebusQueue } from '@cdktf/provider-azurerm'

streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformResource"></a>

```typescript
import { streamAnalyticsOutputServicebusQueue } from '@cdktf/provider-azurerm'

streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.generateConfigForImport"></a>

```typescript
import { streamAnalyticsOutputServicebusQueue } from '@cdktf/provider-azurerm'

streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StreamAnalyticsOutputServicebusQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamAnalyticsOutputServicebusQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamAnalyticsOutputServicebusQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsOutputServicebusQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference">StreamAnalyticsOutputServicebusQueueSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference">StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.authenticationModeInput">authenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.propertyColumnsInput">propertyColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.queueNameInput">queueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.serializationInput">serializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.servicebusNamespaceInput">servicebusNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyKeyInput">sharedAccessPolicyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyNameInput">sharedAccessPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.streamAnalyticsJobNameInput">streamAnalyticsJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.systemPropertyColumnsInput">systemPropertyColumnsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.propertyColumns">propertyColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.queueName">queueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.servicebusNamespace">servicebusNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyKey">sharedAccessPolicyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.systemPropertyColumns">systemPropertyColumns</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.serialization"></a>

```typescript
public readonly serialization: StreamAnalyticsOutputServicebusQueueSerializationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference">StreamAnalyticsOutputServicebusQueueSerializationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference">StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference</a>

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.authenticationModeInput"></a>

```typescript
public readonly authenticationModeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertyColumnsInput`<sup>Optional</sup> <a name="propertyColumnsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.propertyColumnsInput"></a>

```typescript
public readonly propertyColumnsInput: string[];
```

- *Type:* string[]

---

##### `queueNameInput`<sup>Optional</sup> <a name="queueNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.queueNameInput"></a>

```typescript
public readonly queueNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serializationInput`<sup>Optional</sup> <a name="serializationInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.serializationInput"></a>

```typescript
public readonly serializationInput: StreamAnalyticsOutputServicebusQueueSerialization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a>

---

##### `servicebusNamespaceInput`<sup>Optional</sup> <a name="servicebusNamespaceInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.servicebusNamespaceInput"></a>

```typescript
public readonly servicebusNamespaceInput: string;
```

- *Type:* string

---

##### `sharedAccessPolicyKeyInput`<sup>Optional</sup> <a name="sharedAccessPolicyKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyKeyInput"></a>

```typescript
public readonly sharedAccessPolicyKeyInput: string;
```

- *Type:* string

---

##### `sharedAccessPolicyNameInput`<sup>Optional</sup> <a name="sharedAccessPolicyNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyNameInput"></a>

```typescript
public readonly sharedAccessPolicyNameInput: string;
```

- *Type:* string

---

##### `streamAnalyticsJobNameInput`<sup>Optional</sup> <a name="streamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.streamAnalyticsJobNameInput"></a>

```typescript
public readonly streamAnalyticsJobNameInput: string;
```

- *Type:* string

---

##### `systemPropertyColumnsInput`<sup>Optional</sup> <a name="systemPropertyColumnsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.systemPropertyColumnsInput"></a>

```typescript
public readonly systemPropertyColumnsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StreamAnalyticsOutputServicebusQueueTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a>

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `propertyColumns`<sup>Required</sup> <a name="propertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.propertyColumns"></a>

```typescript
public readonly propertyColumns: string[];
```

- *Type:* string[]

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `servicebusNamespace`<sup>Required</sup> <a name="servicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.servicebusNamespace"></a>

```typescript
public readonly servicebusNamespace: string;
```

- *Type:* string

---

##### `sharedAccessPolicyKey`<sup>Required</sup> <a name="sharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyKey"></a>

```typescript
public readonly sharedAccessPolicyKey: string;
```

- *Type:* string

---

##### `sharedAccessPolicyName`<sup>Required</sup> <a name="sharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyName"></a>

```typescript
public readonly sharedAccessPolicyName: string;
```

- *Type:* string

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.streamAnalyticsJobName"></a>

```typescript
public readonly streamAnalyticsJobName: string;
```

- *Type:* string

---

##### `systemPropertyColumns`<sup>Required</sup> <a name="systemPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.systemPropertyColumns"></a>

```typescript
public readonly systemPropertyColumns: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputServicebusQueueConfig <a name="StreamAnalyticsOutputServicebusQueueConfig" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.Initializer"></a>

```typescript
import { streamAnalyticsOutputServicebusQueue } from '@cdktf/provider-azurerm'

const streamAnalyticsOutputServicebusQueueConfig: streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#name StreamAnalyticsOutputServicebusQueue#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.queueName">queueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#queue_name StreamAnalyticsOutputServicebusQueue#queue_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#resource_group_name StreamAnalyticsOutputServicebusQueue#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.servicebusNamespace">servicebusNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#servicebus_namespace StreamAnalyticsOutputServicebusQueue#servicebus_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#stream_analytics_job_name StreamAnalyticsOutputServicebusQueue#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#authentication_mode StreamAnalyticsOutputServicebusQueue#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#id StreamAnalyticsOutputServicebusQueue#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.propertyColumns">propertyColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#property_columns StreamAnalyticsOutputServicebusQueue#property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.sharedAccessPolicyKey">sharedAccessPolicyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_key StreamAnalyticsOutputServicebusQueue#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_name StreamAnalyticsOutputServicebusQueue#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.systemPropertyColumns">systemPropertyColumns</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#system_property_columns StreamAnalyticsOutputServicebusQueue#system_property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#name StreamAnalyticsOutputServicebusQueue#name}.

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#queue_name StreamAnalyticsOutputServicebusQueue#queue_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#resource_group_name StreamAnalyticsOutputServicebusQueue#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.serialization"></a>

```typescript
public readonly serialization: StreamAnalyticsOutputServicebusQueueSerialization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#serialization StreamAnalyticsOutputServicebusQueue#serialization}

---

##### `servicebusNamespace`<sup>Required</sup> <a name="servicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.servicebusNamespace"></a>

```typescript
public readonly servicebusNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#servicebus_namespace StreamAnalyticsOutputServicebusQueue#servicebus_namespace}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.streamAnalyticsJobName"></a>

```typescript
public readonly streamAnalyticsJobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#stream_analytics_job_name StreamAnalyticsOutputServicebusQueue#stream_analytics_job_name}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#authentication_mode StreamAnalyticsOutputServicebusQueue#authentication_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#id StreamAnalyticsOutputServicebusQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `propertyColumns`<sup>Optional</sup> <a name="propertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.propertyColumns"></a>

```typescript
public readonly propertyColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#property_columns StreamAnalyticsOutputServicebusQueue#property_columns}.

---

##### `sharedAccessPolicyKey`<sup>Optional</sup> <a name="sharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.sharedAccessPolicyKey"></a>

```typescript
public readonly sharedAccessPolicyKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_key StreamAnalyticsOutputServicebusQueue#shared_access_policy_key}.

---

##### `sharedAccessPolicyName`<sup>Optional</sup> <a name="sharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.sharedAccessPolicyName"></a>

```typescript
public readonly sharedAccessPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_name StreamAnalyticsOutputServicebusQueue#shared_access_policy_name}.

---

##### `systemPropertyColumns`<sup>Optional</sup> <a name="systemPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.systemPropertyColumns"></a>

```typescript
public readonly systemPropertyColumns: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#system_property_columns StreamAnalyticsOutputServicebusQueue#system_property_columns}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsOutputServicebusQueueTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#timeouts StreamAnalyticsOutputServicebusQueue#timeouts}

---

### StreamAnalyticsOutputServicebusQueueSerialization <a name="StreamAnalyticsOutputServicebusQueueSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.Initializer"></a>

```typescript
import { streamAnalyticsOutputServicebusQueue } from '@cdktf/provider-azurerm'

const streamAnalyticsOutputServicebusQueueSerialization: streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#type StreamAnalyticsOutputServicebusQueue#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.encoding">encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#encoding StreamAnalyticsOutputServicebusQueue#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#field_delimiter StreamAnalyticsOutputServicebusQueue#field_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#format StreamAnalyticsOutputServicebusQueue#format}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#type StreamAnalyticsOutputServicebusQueue#type}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#encoding StreamAnalyticsOutputServicebusQueue#encoding}.

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#field_delimiter StreamAnalyticsOutputServicebusQueue#field_delimiter}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#format StreamAnalyticsOutputServicebusQueue#format}.

---

### StreamAnalyticsOutputServicebusQueueTimeouts <a name="StreamAnalyticsOutputServicebusQueueTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.Initializer"></a>

```typescript
import { streamAnalyticsOutputServicebusQueue } from '@cdktf/provider-azurerm'

const streamAnalyticsOutputServicebusQueueTimeouts: streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#create StreamAnalyticsOutputServicebusQueue#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#delete StreamAnalyticsOutputServicebusQueue#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#read StreamAnalyticsOutputServicebusQueue#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#update StreamAnalyticsOutputServicebusQueue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#create StreamAnalyticsOutputServicebusQueue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#delete StreamAnalyticsOutputServicebusQueue#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#read StreamAnalyticsOutputServicebusQueue#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/stream_analytics_output_servicebus_queue#update StreamAnalyticsOutputServicebusQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputServicebusQueueSerializationOutputReference <a name="StreamAnalyticsOutputServicebusQueueSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.Initializer"></a>

```typescript
import { streamAnalyticsOutputServicebusQueue } from '@cdktf/provider-azurerm'

new streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetFormat">resetFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetFieldDelimiter"></a>

```typescript
public resetFieldDelimiter(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fieldDelimiterInput"></a>

```typescript
public readonly fieldDelimiterInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamAnalyticsOutputServicebusQueueSerialization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a>

---


### StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference <a name="StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.Initializer"></a>

```typescript
import { streamAnalyticsOutputServicebusQueue } from '@cdktf/provider-azurerm'

new streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StreamAnalyticsOutputServicebusQueueTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a>

---



