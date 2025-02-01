# `iothubEndpointStorageContainer` Submodule <a name="`iothubEndpointStorageContainer` Submodule" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubEndpointStorageContainer <a name="IothubEndpointStorageContainer" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container azurerm_iothub_endpoint_storage_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer"></a>

```typescript
import { iothubEndpointStorageContainer } from '@cdktf/provider-azurerm'

new iothubEndpointStorageContainer.IothubEndpointStorageContainer(scope: Construct, id: string, config: IothubEndpointStorageContainerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig">IothubEndpointStorageContainerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig">IothubEndpointStorageContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetBatchFrequencyInSeconds">resetBatchFrequencyInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEndpointUri">resetEndpointUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetFileNameFormat">resetFileNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetIdentityId">resetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetMaxChunkSizeInBytes">resetMaxChunkSizeInBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.putTimeouts"></a>

```typescript
public putTimeouts(value: IothubEndpointStorageContainerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>

---

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetAuthenticationType"></a>

```typescript
public resetAuthenticationType(): void
```

##### `resetBatchFrequencyInSeconds` <a name="resetBatchFrequencyInSeconds" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetBatchFrequencyInSeconds"></a>

```typescript
public resetBatchFrequencyInSeconds(): void
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetEndpointUri` <a name="resetEndpointUri" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEndpointUri"></a>

```typescript
public resetEndpointUri(): void
```

##### `resetFileNameFormat` <a name="resetFileNameFormat" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetFileNameFormat"></a>

```typescript
public resetFileNameFormat(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityId` <a name="resetIdentityId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetIdentityId"></a>

```typescript
public resetIdentityId(): void
```

##### `resetMaxChunkSizeInBytes` <a name="resetMaxChunkSizeInBytes" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetMaxChunkSizeInBytes"></a>

```typescript
public resetMaxChunkSizeInBytes(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IothubEndpointStorageContainer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isConstruct"></a>

```typescript
import { iothubEndpointStorageContainer } from '@cdktf/provider-azurerm'

iothubEndpointStorageContainer.IothubEndpointStorageContainer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformElement"></a>

```typescript
import { iothubEndpointStorageContainer } from '@cdktf/provider-azurerm'

iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformResource"></a>

```typescript
import { iothubEndpointStorageContainer } from '@cdktf/provider-azurerm'

iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport"></a>

```typescript
import { iothubEndpointStorageContainer } from '@cdktf/provider-azurerm'

iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IothubEndpointStorageContainer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IothubEndpointStorageContainer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IothubEndpointStorageContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IothubEndpointStorageContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference">IothubEndpointStorageContainerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSecondsInput">batchFrequencyInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionStringInput">connectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUriInput">endpointUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormatInput">fileNameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityIdInput">identityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubIdInput">iothubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytesInput">maxChunkSizeInBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSeconds">batchFrequencyInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUri">endpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormat">fileNameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityId">identityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubId">iothubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytes">maxChunkSizeInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeouts"></a>

```typescript
public readonly timeouts: IothubEndpointStorageContainerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference">IothubEndpointStorageContainerTimeoutsOutputReference</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `batchFrequencyInSecondsInput`<sup>Optional</sup> <a name="batchFrequencyInSecondsInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSecondsInput"></a>

```typescript
public readonly batchFrequencyInSecondsInput: number;
```

- *Type:* number

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `endpointUriInput`<sup>Optional</sup> <a name="endpointUriInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUriInput"></a>

```typescript
public readonly endpointUriInput: string;
```

- *Type:* string

---

##### `fileNameFormatInput`<sup>Optional</sup> <a name="fileNameFormatInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormatInput"></a>

```typescript
public readonly fileNameFormatInput: string;
```

- *Type:* string

---

##### `identityIdInput`<sup>Optional</sup> <a name="identityIdInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityIdInput"></a>

```typescript
public readonly identityIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iothubIdInput`<sup>Optional</sup> <a name="iothubIdInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubIdInput"></a>

```typescript
public readonly iothubIdInput: string;
```

- *Type:* string

---

##### `maxChunkSizeInBytesInput`<sup>Optional</sup> <a name="maxChunkSizeInBytesInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytesInput"></a>

```typescript
public readonly maxChunkSizeInBytesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IothubEndpointStorageContainerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `batchFrequencyInSeconds`<sup>Required</sup> <a name="batchFrequencyInSeconds" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSeconds"></a>

```typescript
public readonly batchFrequencyInSeconds: number;
```

- *Type:* number

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

---

##### `fileNameFormat`<sup>Required</sup> <a name="fileNameFormat" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormat"></a>

```typescript
public readonly fileNameFormat: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubId"></a>

```typescript
public readonly iothubId: string;
```

- *Type:* string

---

##### `maxChunkSizeInBytes`<sup>Required</sup> <a name="maxChunkSizeInBytes" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytes"></a>

```typescript
public readonly maxChunkSizeInBytes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IothubEndpointStorageContainerConfig <a name="IothubEndpointStorageContainerConfig" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.Initializer"></a>

```typescript
import { iothubEndpointStorageContainer } from '@cdktf/provider-azurerm'

const iothubEndpointStorageContainerConfig: iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#container_name IothubEndpointStorageContainer#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.iothubId">iothubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#iothub_id IothubEndpointStorageContainer#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#name IothubEndpointStorageContainer#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#resource_group_name IothubEndpointStorageContainer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#authentication_type IothubEndpointStorageContainer#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.batchFrequencyInSeconds">batchFrequencyInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#batch_frequency_in_seconds IothubEndpointStorageContainer#batch_frequency_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connectionString">connectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#connection_string IothubEndpointStorageContainer#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.encoding">encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#encoding IothubEndpointStorageContainer#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.endpointUri">endpointUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#endpoint_uri IothubEndpointStorageContainer#endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.fileNameFormat">fileNameFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#file_name_format IothubEndpointStorageContainer#file_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#id IothubEndpointStorageContainer#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.identityId">identityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#identity_id IothubEndpointStorageContainer#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.maxChunkSizeInBytes">maxChunkSizeInBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#max_chunk_size_in_bytes IothubEndpointStorageContainer#max_chunk_size_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#container_name IothubEndpointStorageContainer#container_name}.

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.iothubId"></a>

```typescript
public readonly iothubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#iothub_id IothubEndpointStorageContainer#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#name IothubEndpointStorageContainer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#resource_group_name IothubEndpointStorageContainer#resource_group_name}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#authentication_type IothubEndpointStorageContainer#authentication_type}.

---

##### `batchFrequencyInSeconds`<sup>Optional</sup> <a name="batchFrequencyInSeconds" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.batchFrequencyInSeconds"></a>

```typescript
public readonly batchFrequencyInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#batch_frequency_in_seconds IothubEndpointStorageContainer#batch_frequency_in_seconds}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#connection_string IothubEndpointStorageContainer#connection_string}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#encoding IothubEndpointStorageContainer#encoding}.

---

##### `endpointUri`<sup>Optional</sup> <a name="endpointUri" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#endpoint_uri IothubEndpointStorageContainer#endpoint_uri}.

---

##### `fileNameFormat`<sup>Optional</sup> <a name="fileNameFormat" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.fileNameFormat"></a>

```typescript
public readonly fileNameFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#file_name_format IothubEndpointStorageContainer#file_name_format}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#id IothubEndpointStorageContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityId`<sup>Optional</sup> <a name="identityId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#identity_id IothubEndpointStorageContainer#identity_id}.

---

##### `maxChunkSizeInBytes`<sup>Optional</sup> <a name="maxChunkSizeInBytes" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.maxChunkSizeInBytes"></a>

```typescript
public readonly maxChunkSizeInBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#max_chunk_size_in_bytes IothubEndpointStorageContainer#max_chunk_size_in_bytes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IothubEndpointStorageContainerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#timeouts IothubEndpointStorageContainer#timeouts}

---

### IothubEndpointStorageContainerTimeouts <a name="IothubEndpointStorageContainerTimeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.Initializer"></a>

```typescript
import { iothubEndpointStorageContainer } from '@cdktf/provider-azurerm'

const iothubEndpointStorageContainerTimeouts: iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#create IothubEndpointStorageContainer#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#delete IothubEndpointStorageContainer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#read IothubEndpointStorageContainer#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#update IothubEndpointStorageContainer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#create IothubEndpointStorageContainer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#delete IothubEndpointStorageContainer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#read IothubEndpointStorageContainer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/iothub_endpoint_storage_container#update IothubEndpointStorageContainer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubEndpointStorageContainerTimeoutsOutputReference <a name="IothubEndpointStorageContainerTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer"></a>

```typescript
import { iothubEndpointStorageContainer } from '@cdktf/provider-azurerm'

new iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IothubEndpointStorageContainerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>

---



