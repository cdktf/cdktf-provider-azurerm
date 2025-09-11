# `streamAnalyticsOutputBlob` Submodule <a name="`streamAnalyticsOutputBlob` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputBlob <a name="StreamAnalyticsOutputBlob" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob azurerm_stream_analytics_output_blob}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer"></a>

```typescript
import { streamAnalyticsOutputBlob } from '@cdktf/provider-azurerm'

new streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob(scope: Construct, id: string, config: StreamAnalyticsOutputBlobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig">StreamAnalyticsOutputBlobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig">StreamAnalyticsOutputBlobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putSerialization">putSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBatchMaxWaitTime">resetBatchMaxWaitTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBatchMinRows">resetBatchMinRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBlobWriteMode">resetBlobWriteMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetStorageAccountKey">resetStorageAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSerialization` <a name="putSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putSerialization"></a>

```typescript
public putSerialization(value: StreamAnalyticsOutputBlobSerialization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putTimeouts"></a>

```typescript
public putTimeouts(value: StreamAnalyticsOutputBlobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a>

---

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetAuthenticationMode"></a>

```typescript
public resetAuthenticationMode(): void
```

##### `resetBatchMaxWaitTime` <a name="resetBatchMaxWaitTime" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBatchMaxWaitTime"></a>

```typescript
public resetBatchMaxWaitTime(): void
```

##### `resetBatchMinRows` <a name="resetBatchMinRows" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBatchMinRows"></a>

```typescript
public resetBatchMinRows(): void
```

##### `resetBlobWriteMode` <a name="resetBlobWriteMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBlobWriteMode"></a>

```typescript
public resetBlobWriteMode(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStorageAccountKey` <a name="resetStorageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetStorageAccountKey"></a>

```typescript
public resetStorageAccountKey(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsOutputBlob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isConstruct"></a>

```typescript
import { streamAnalyticsOutputBlob } from '@cdktf/provider-azurerm'

streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformElement"></a>

```typescript
import { streamAnalyticsOutputBlob } from '@cdktf/provider-azurerm'

streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformResource"></a>

```typescript
import { streamAnalyticsOutputBlob } from '@cdktf/provider-azurerm'

streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport"></a>

```typescript
import { streamAnalyticsOutputBlob } from '@cdktf/provider-azurerm'

streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StreamAnalyticsOutputBlob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamAnalyticsOutputBlob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamAnalyticsOutputBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsOutputBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference">StreamAnalyticsOutputBlobSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference">StreamAnalyticsOutputBlobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.authenticationModeInput">authenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMaxWaitTimeInput">batchMaxWaitTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMinRowsInput">batchMinRowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.blobWriteModeInput">blobWriteModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dateFormatInput">dateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.pathPatternInput">pathPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.serializationInput">serializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageContainerNameInput">storageContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.streamAnalyticsJobNameInput">streamAnalyticsJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeFormatInput">timeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMaxWaitTime">batchMaxWaitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMinRows">batchMinRows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.blobWriteMode">blobWriteMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.pathPattern">pathPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageContainerName">storageContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.serialization"></a>

```typescript
public readonly serialization: StreamAnalyticsOutputBlobSerializationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference">StreamAnalyticsOutputBlobSerializationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsOutputBlobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference">StreamAnalyticsOutputBlobTimeoutsOutputReference</a>

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.authenticationModeInput"></a>

```typescript
public readonly authenticationModeInput: string;
```

- *Type:* string

---

##### `batchMaxWaitTimeInput`<sup>Optional</sup> <a name="batchMaxWaitTimeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMaxWaitTimeInput"></a>

```typescript
public readonly batchMaxWaitTimeInput: string;
```

- *Type:* string

---

##### `batchMinRowsInput`<sup>Optional</sup> <a name="batchMinRowsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMinRowsInput"></a>

```typescript
public readonly batchMinRowsInput: number;
```

- *Type:* number

---

##### `blobWriteModeInput`<sup>Optional</sup> <a name="blobWriteModeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.blobWriteModeInput"></a>

```typescript
public readonly blobWriteModeInput: string;
```

- *Type:* string

---

##### `dateFormatInput`<sup>Optional</sup> <a name="dateFormatInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dateFormatInput"></a>

```typescript
public readonly dateFormatInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathPatternInput`<sup>Optional</sup> <a name="pathPatternInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.pathPatternInput"></a>

```typescript
public readonly pathPatternInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serializationInput`<sup>Optional</sup> <a name="serializationInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.serializationInput"></a>

```typescript
public readonly serializationInput: StreamAnalyticsOutputBlobSerialization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a>

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountKeyInput"></a>

```typescript
public readonly storageAccountKeyInput: string;
```

- *Type:* string

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountNameInput"></a>

```typescript
public readonly storageAccountNameInput: string;
```

- *Type:* string

---

##### `storageContainerNameInput`<sup>Optional</sup> <a name="storageContainerNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageContainerNameInput"></a>

```typescript
public readonly storageContainerNameInput: string;
```

- *Type:* string

---

##### `streamAnalyticsJobNameInput`<sup>Optional</sup> <a name="streamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.streamAnalyticsJobNameInput"></a>

```typescript
public readonly streamAnalyticsJobNameInput: string;
```

- *Type:* string

---

##### `timeFormatInput`<sup>Optional</sup> <a name="timeFormatInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeFormatInput"></a>

```typescript
public readonly timeFormatInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StreamAnalyticsOutputBlobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a>

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

---

##### `batchMaxWaitTime`<sup>Required</sup> <a name="batchMaxWaitTime" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMaxWaitTime"></a>

```typescript
public readonly batchMaxWaitTime: string;
```

- *Type:* string

---

##### `batchMinRows`<sup>Required</sup> <a name="batchMinRows" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMinRows"></a>

```typescript
public readonly batchMinRows: number;
```

- *Type:* number

---

##### `blobWriteMode`<sup>Required</sup> <a name="blobWriteMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.blobWriteMode"></a>

```typescript
public readonly blobWriteMode: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.pathPattern"></a>

```typescript
public readonly pathPattern: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `storageContainerName`<sup>Required</sup> <a name="storageContainerName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageContainerName"></a>

```typescript
public readonly storageContainerName: string;
```

- *Type:* string

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.streamAnalyticsJobName"></a>

```typescript
public readonly streamAnalyticsJobName: string;
```

- *Type:* string

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputBlobConfig <a name="StreamAnalyticsOutputBlobConfig" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.Initializer"></a>

```typescript
import { streamAnalyticsOutputBlob } from '@cdktf/provider-azurerm'

const streamAnalyticsOutputBlobConfig: streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.dateFormat">dateFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#date_format StreamAnalyticsOutputBlob#date_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#name StreamAnalyticsOutputBlob#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.pathPattern">pathPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#path_pattern StreamAnalyticsOutputBlob#path_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#resource_group_name StreamAnalyticsOutputBlob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#storage_account_name StreamAnalyticsOutputBlob#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageContainerName">storageContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#storage_container_name StreamAnalyticsOutputBlob#storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#stream_analytics_job_name StreamAnalyticsOutputBlob#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.timeFormat">timeFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#time_format StreamAnalyticsOutputBlob#time_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#authentication_mode StreamAnalyticsOutputBlob#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.batchMaxWaitTime">batchMaxWaitTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#batch_max_wait_time StreamAnalyticsOutputBlob#batch_max_wait_time}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.batchMinRows">batchMinRows</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#batch_min_rows StreamAnalyticsOutputBlob#batch_min_rows}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.blobWriteMode">blobWriteMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#blob_write_mode StreamAnalyticsOutputBlob#blob_write_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#id StreamAnalyticsOutputBlob#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#storage_account_key StreamAnalyticsOutputBlob#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#date_format StreamAnalyticsOutputBlob#date_format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#name StreamAnalyticsOutputBlob#name}.

---

##### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.pathPattern"></a>

```typescript
public readonly pathPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#path_pattern StreamAnalyticsOutputBlob#path_pattern}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#resource_group_name StreamAnalyticsOutputBlob#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.serialization"></a>

```typescript
public readonly serialization: StreamAnalyticsOutputBlobSerialization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#serialization StreamAnalyticsOutputBlob#serialization}

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#storage_account_name StreamAnalyticsOutputBlob#storage_account_name}.

---

##### `storageContainerName`<sup>Required</sup> <a name="storageContainerName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageContainerName"></a>

```typescript
public readonly storageContainerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#storage_container_name StreamAnalyticsOutputBlob#storage_container_name}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.streamAnalyticsJobName"></a>

```typescript
public readonly streamAnalyticsJobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#stream_analytics_job_name StreamAnalyticsOutputBlob#stream_analytics_job_name}.

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#time_format StreamAnalyticsOutputBlob#time_format}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#authentication_mode StreamAnalyticsOutputBlob#authentication_mode}.

---

##### `batchMaxWaitTime`<sup>Optional</sup> <a name="batchMaxWaitTime" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.batchMaxWaitTime"></a>

```typescript
public readonly batchMaxWaitTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#batch_max_wait_time StreamAnalyticsOutputBlob#batch_max_wait_time}.

---

##### `batchMinRows`<sup>Optional</sup> <a name="batchMinRows" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.batchMinRows"></a>

```typescript
public readonly batchMinRows: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#batch_min_rows StreamAnalyticsOutputBlob#batch_min_rows}.

---

##### `blobWriteMode`<sup>Optional</sup> <a name="blobWriteMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.blobWriteMode"></a>

```typescript
public readonly blobWriteMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#blob_write_mode StreamAnalyticsOutputBlob#blob_write_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#id StreamAnalyticsOutputBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storageAccountKey`<sup>Optional</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#storage_account_key StreamAnalyticsOutputBlob#storage_account_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsOutputBlobTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#timeouts StreamAnalyticsOutputBlob#timeouts}

---

### StreamAnalyticsOutputBlobSerialization <a name="StreamAnalyticsOutputBlobSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.Initializer"></a>

```typescript
import { streamAnalyticsOutputBlob } from '@cdktf/provider-azurerm'

const streamAnalyticsOutputBlobSerialization: streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#type StreamAnalyticsOutputBlob#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.encoding">encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#encoding StreamAnalyticsOutputBlob#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#field_delimiter StreamAnalyticsOutputBlob#field_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#format StreamAnalyticsOutputBlob#format}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#type StreamAnalyticsOutputBlob#type}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#encoding StreamAnalyticsOutputBlob#encoding}.

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#field_delimiter StreamAnalyticsOutputBlob#field_delimiter}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#format StreamAnalyticsOutputBlob#format}.

---

### StreamAnalyticsOutputBlobTimeouts <a name="StreamAnalyticsOutputBlobTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.Initializer"></a>

```typescript
import { streamAnalyticsOutputBlob } from '@cdktf/provider-azurerm'

const streamAnalyticsOutputBlobTimeouts: streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#create StreamAnalyticsOutputBlob#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#delete StreamAnalyticsOutputBlob#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#read StreamAnalyticsOutputBlob#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#update StreamAnalyticsOutputBlob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#create StreamAnalyticsOutputBlob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#delete StreamAnalyticsOutputBlob#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#read StreamAnalyticsOutputBlob#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_blob#update StreamAnalyticsOutputBlob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputBlobSerializationOutputReference <a name="StreamAnalyticsOutputBlobSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.Initializer"></a>

```typescript
import { streamAnalyticsOutputBlob } from '@cdktf/provider-azurerm'

new streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetFormat">resetFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetFieldDelimiter"></a>

```typescript
public resetFieldDelimiter(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fieldDelimiterInput"></a>

```typescript
public readonly fieldDelimiterInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamAnalyticsOutputBlobSerialization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a>

---


### StreamAnalyticsOutputBlobTimeoutsOutputReference <a name="StreamAnalyticsOutputBlobTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.Initializer"></a>

```typescript
import { streamAnalyticsOutputBlob } from '@cdktf/provider-azurerm'

new streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StreamAnalyticsOutputBlobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a>

---



