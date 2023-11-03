# `azurerm_stream_analytics_stream_input_eventhub`

Refer to the Terraform Registory for docs: [`azurerm_stream_analytics_stream_input_eventhub`](https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub).

# `streamAnalyticsStreamInputEventhub` Submodule <a name="`streamAnalyticsStreamInputEventhub` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsStreamInputEventhub <a name="StreamAnalyticsStreamInputEventhub" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub azurerm_stream_analytics_stream_input_eventhub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.Initializer"></a>

```typescript
import { streamAnalyticsStreamInputEventhub } from '@cdktf/provider-azurerm'

new streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub(scope: Construct, id: string, config: StreamAnalyticsStreamInputEventhubConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig">StreamAnalyticsStreamInputEventhubConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig">StreamAnalyticsStreamInputEventhubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.putSerialization">putSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetEventhubConsumerGroupName">resetEventhubConsumerGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetPartitionKey">resetPartitionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetSharedAccessPolicyKey">resetSharedAccessPolicyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetSharedAccessPolicyName">resetSharedAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putSerialization` <a name="putSerialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.putSerialization"></a>

```typescript
public putSerialization(value: StreamAnalyticsStreamInputEventhubSerialization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization">StreamAnalyticsStreamInputEventhubSerialization</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.putTimeouts"></a>

```typescript
public putTimeouts(value: StreamAnalyticsStreamInputEventhubTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts">StreamAnalyticsStreamInputEventhubTimeouts</a>

---

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetAuthenticationMode"></a>

```typescript
public resetAuthenticationMode(): void
```

##### `resetEventhubConsumerGroupName` <a name="resetEventhubConsumerGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetEventhubConsumerGroupName"></a>

```typescript
public resetEventhubConsumerGroupName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPartitionKey` <a name="resetPartitionKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetPartitionKey"></a>

```typescript
public resetPartitionKey(): void
```

##### `resetSharedAccessPolicyKey` <a name="resetSharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetSharedAccessPolicyKey"></a>

```typescript
public resetSharedAccessPolicyKey(): void
```

##### `resetSharedAccessPolicyName` <a name="resetSharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetSharedAccessPolicyName"></a>

```typescript
public resetSharedAccessPolicyName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsStreamInputEventhub resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isConstruct"></a>

```typescript
import { streamAnalyticsStreamInputEventhub } from '@cdktf/provider-azurerm'

streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isTerraformElement"></a>

```typescript
import { streamAnalyticsStreamInputEventhub } from '@cdktf/provider-azurerm'

streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isTerraformResource"></a>

```typescript
import { streamAnalyticsStreamInputEventhub } from '@cdktf/provider-azurerm'

streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.generateConfigForImport"></a>

```typescript
import { streamAnalyticsStreamInputEventhub } from '@cdktf/provider-azurerm'

streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StreamAnalyticsStreamInputEventhub resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamAnalyticsStreamInputEventhub to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamAnalyticsStreamInputEventhub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsStreamInputEventhub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference">StreamAnalyticsStreamInputEventhubSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference">StreamAnalyticsStreamInputEventhubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.authenticationModeInput">authenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubConsumerGroupNameInput">eventhubConsumerGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubNameInput">eventhubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.partitionKeyInput">partitionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.serializationInput">serializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization">StreamAnalyticsStreamInputEventhubSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.servicebusNamespaceInput">servicebusNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyKeyInput">sharedAccessPolicyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyNameInput">sharedAccessPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.streamAnalyticsJobNameInput">streamAnalyticsJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts">StreamAnalyticsStreamInputEventhubTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubConsumerGroupName">eventhubConsumerGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubName">eventhubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.partitionKey">partitionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.servicebusNamespace">servicebusNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyKey">sharedAccessPolicyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.serialization"></a>

```typescript
public readonly serialization: StreamAnalyticsStreamInputEventhubSerializationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference">StreamAnalyticsStreamInputEventhubSerializationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsStreamInputEventhubTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference">StreamAnalyticsStreamInputEventhubTimeoutsOutputReference</a>

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.authenticationModeInput"></a>

```typescript
public readonly authenticationModeInput: string;
```

- *Type:* string

---

##### `eventhubConsumerGroupNameInput`<sup>Optional</sup> <a name="eventhubConsumerGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubConsumerGroupNameInput"></a>

```typescript
public readonly eventhubConsumerGroupNameInput: string;
```

- *Type:* string

---

##### `eventhubNameInput`<sup>Optional</sup> <a name="eventhubNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubNameInput"></a>

```typescript
public readonly eventhubNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partitionKeyInput`<sup>Optional</sup> <a name="partitionKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.partitionKeyInput"></a>

```typescript
public readonly partitionKeyInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serializationInput`<sup>Optional</sup> <a name="serializationInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.serializationInput"></a>

```typescript
public readonly serializationInput: StreamAnalyticsStreamInputEventhubSerialization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization">StreamAnalyticsStreamInputEventhubSerialization</a>

---

##### `servicebusNamespaceInput`<sup>Optional</sup> <a name="servicebusNamespaceInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.servicebusNamespaceInput"></a>

```typescript
public readonly servicebusNamespaceInput: string;
```

- *Type:* string

---

##### `sharedAccessPolicyKeyInput`<sup>Optional</sup> <a name="sharedAccessPolicyKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyKeyInput"></a>

```typescript
public readonly sharedAccessPolicyKeyInput: string;
```

- *Type:* string

---

##### `sharedAccessPolicyNameInput`<sup>Optional</sup> <a name="sharedAccessPolicyNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyNameInput"></a>

```typescript
public readonly sharedAccessPolicyNameInput: string;
```

- *Type:* string

---

##### `streamAnalyticsJobNameInput`<sup>Optional</sup> <a name="streamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.streamAnalyticsJobNameInput"></a>

```typescript
public readonly streamAnalyticsJobNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StreamAnalyticsStreamInputEventhubTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts">StreamAnalyticsStreamInputEventhubTimeouts</a>

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

---

##### `eventhubConsumerGroupName`<sup>Required</sup> <a name="eventhubConsumerGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubConsumerGroupName"></a>

```typescript
public readonly eventhubConsumerGroupName: string;
```

- *Type:* string

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubName"></a>

```typescript
public readonly eventhubName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.partitionKey"></a>

```typescript
public readonly partitionKey: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `servicebusNamespace`<sup>Required</sup> <a name="servicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.servicebusNamespace"></a>

```typescript
public readonly servicebusNamespace: string;
```

- *Type:* string

---

##### `sharedAccessPolicyKey`<sup>Required</sup> <a name="sharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyKey"></a>

```typescript
public readonly sharedAccessPolicyKey: string;
```

- *Type:* string

---

##### `sharedAccessPolicyName`<sup>Required</sup> <a name="sharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyName"></a>

```typescript
public readonly sharedAccessPolicyName: string;
```

- *Type:* string

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.streamAnalyticsJobName"></a>

```typescript
public readonly streamAnalyticsJobName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsStreamInputEventhubConfig <a name="StreamAnalyticsStreamInputEventhubConfig" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.Initializer"></a>

```typescript
import { streamAnalyticsStreamInputEventhub } from '@cdktf/provider-azurerm'

const streamAnalyticsStreamInputEventhubConfig: streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.eventhubName">eventhubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#eventhub_name StreamAnalyticsStreamInputEventhub#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#name StreamAnalyticsStreamInputEventhub#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#resource_group_name StreamAnalyticsStreamInputEventhub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization">StreamAnalyticsStreamInputEventhubSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.servicebusNamespace">servicebusNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#servicebus_namespace StreamAnalyticsStreamInputEventhub#servicebus_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#stream_analytics_job_name StreamAnalyticsStreamInputEventhub#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#authentication_mode StreamAnalyticsStreamInputEventhub#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.eventhubConsumerGroupName">eventhubConsumerGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#eventhub_consumer_group_name StreamAnalyticsStreamInputEventhub#eventhub_consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#id StreamAnalyticsStreamInputEventhub#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.partitionKey">partitionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#partition_key StreamAnalyticsStreamInputEventhub#partition_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.sharedAccessPolicyKey">sharedAccessPolicyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#shared_access_policy_key StreamAnalyticsStreamInputEventhub#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#shared_access_policy_name StreamAnalyticsStreamInputEventhub#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts">StreamAnalyticsStreamInputEventhubTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.eventhubName"></a>

```typescript
public readonly eventhubName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#eventhub_name StreamAnalyticsStreamInputEventhub#eventhub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#name StreamAnalyticsStreamInputEventhub#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#resource_group_name StreamAnalyticsStreamInputEventhub#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.serialization"></a>

```typescript
public readonly serialization: StreamAnalyticsStreamInputEventhubSerialization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization">StreamAnalyticsStreamInputEventhubSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#serialization StreamAnalyticsStreamInputEventhub#serialization}

---

##### `servicebusNamespace`<sup>Required</sup> <a name="servicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.servicebusNamespace"></a>

```typescript
public readonly servicebusNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#servicebus_namespace StreamAnalyticsStreamInputEventhub#servicebus_namespace}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.streamAnalyticsJobName"></a>

```typescript
public readonly streamAnalyticsJobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#stream_analytics_job_name StreamAnalyticsStreamInputEventhub#stream_analytics_job_name}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#authentication_mode StreamAnalyticsStreamInputEventhub#authentication_mode}.

---

##### `eventhubConsumerGroupName`<sup>Optional</sup> <a name="eventhubConsumerGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.eventhubConsumerGroupName"></a>

```typescript
public readonly eventhubConsumerGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#eventhub_consumer_group_name StreamAnalyticsStreamInputEventhub#eventhub_consumer_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#id StreamAnalyticsStreamInputEventhub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionKey`<sup>Optional</sup> <a name="partitionKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.partitionKey"></a>

```typescript
public readonly partitionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#partition_key StreamAnalyticsStreamInputEventhub#partition_key}.

---

##### `sharedAccessPolicyKey`<sup>Optional</sup> <a name="sharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.sharedAccessPolicyKey"></a>

```typescript
public readonly sharedAccessPolicyKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#shared_access_policy_key StreamAnalyticsStreamInputEventhub#shared_access_policy_key}.

---

##### `sharedAccessPolicyName`<sup>Optional</sup> <a name="sharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.sharedAccessPolicyName"></a>

```typescript
public readonly sharedAccessPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#shared_access_policy_name StreamAnalyticsStreamInputEventhub#shared_access_policy_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsStreamInputEventhubTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts">StreamAnalyticsStreamInputEventhubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#timeouts StreamAnalyticsStreamInputEventhub#timeouts}

---

### StreamAnalyticsStreamInputEventhubSerialization <a name="StreamAnalyticsStreamInputEventhubSerialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization.Initializer"></a>

```typescript
import { streamAnalyticsStreamInputEventhub } from '@cdktf/provider-azurerm'

const streamAnalyticsStreamInputEventhubSerialization: streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#type StreamAnalyticsStreamInputEventhub#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization.property.encoding">encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#encoding StreamAnalyticsStreamInputEventhub#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#field_delimiter StreamAnalyticsStreamInputEventhub#field_delimiter}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#type StreamAnalyticsStreamInputEventhub#type}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#encoding StreamAnalyticsStreamInputEventhub#encoding}.

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#field_delimiter StreamAnalyticsStreamInputEventhub#field_delimiter}.

---

### StreamAnalyticsStreamInputEventhubTimeouts <a name="StreamAnalyticsStreamInputEventhubTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.Initializer"></a>

```typescript
import { streamAnalyticsStreamInputEventhub } from '@cdktf/provider-azurerm'

const streamAnalyticsStreamInputEventhubTimeouts: streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#create StreamAnalyticsStreamInputEventhub#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#delete StreamAnalyticsStreamInputEventhub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#read StreamAnalyticsStreamInputEventhub#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#update StreamAnalyticsStreamInputEventhub#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#create StreamAnalyticsStreamInputEventhub#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#delete StreamAnalyticsStreamInputEventhub#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#read StreamAnalyticsStreamInputEventhub#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/stream_analytics_stream_input_eventhub#update StreamAnalyticsStreamInputEventhub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsStreamInputEventhubSerializationOutputReference <a name="StreamAnalyticsStreamInputEventhubSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.Initializer"></a>

```typescript
import { streamAnalyticsStreamInputEventhub } from '@cdktf/provider-azurerm'

new streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.resetFieldDelimiter"></a>

```typescript
public resetFieldDelimiter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization">StreamAnalyticsStreamInputEventhubSerialization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.fieldDelimiterInput"></a>

```typescript
public readonly fieldDelimiterInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamAnalyticsStreamInputEventhubSerialization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization">StreamAnalyticsStreamInputEventhubSerialization</a>

---


### StreamAnalyticsStreamInputEventhubTimeoutsOutputReference <a name="StreamAnalyticsStreamInputEventhubTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.Initializer"></a>

```typescript
import { streamAnalyticsStreamInputEventhub } from '@cdktf/provider-azurerm'

new streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts">StreamAnalyticsStreamInputEventhubTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StreamAnalyticsStreamInputEventhubTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts">StreamAnalyticsStreamInputEventhubTimeouts</a>

---



