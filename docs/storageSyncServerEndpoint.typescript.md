# `storageSyncServerEndpoint` Submodule <a name="`storageSyncServerEndpoint` Submodule" id="@cdktf/provider-azurerm.storageSyncServerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageSyncServerEndpoint <a name="StorageSyncServerEndpoint" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint azurerm_storage_sync_server_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer"></a>

```typescript
import { storageSyncServerEndpoint } from '@cdktf/provider-azurerm'

new storageSyncServerEndpoint.StorageSyncServerEndpoint(scope: Construct, id: string, config: StorageSyncServerEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig">StorageSyncServerEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig">StorageSyncServerEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetCloudTieringEnabled">resetCloudTieringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetInitialDownloadPolicy">resetInitialDownloadPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetLocalCacheMode">resetLocalCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTierFilesOlderThanDays">resetTierFilesOlderThanDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetVolumeFreeSpacePercent">resetVolumeFreeSpacePercent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageSyncServerEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>

---

##### `resetCloudTieringEnabled` <a name="resetCloudTieringEnabled" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetCloudTieringEnabled"></a>

```typescript
public resetCloudTieringEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialDownloadPolicy` <a name="resetInitialDownloadPolicy" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetInitialDownloadPolicy"></a>

```typescript
public resetInitialDownloadPolicy(): void
```

##### `resetLocalCacheMode` <a name="resetLocalCacheMode" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetLocalCacheMode"></a>

```typescript
public resetLocalCacheMode(): void
```

##### `resetTierFilesOlderThanDays` <a name="resetTierFilesOlderThanDays" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTierFilesOlderThanDays"></a>

```typescript
public resetTierFilesOlderThanDays(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVolumeFreeSpacePercent` <a name="resetVolumeFreeSpacePercent" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.resetVolumeFreeSpacePercent"></a>

```typescript
public resetVolumeFreeSpacePercent(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageSyncServerEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isConstruct"></a>

```typescript
import { storageSyncServerEndpoint } from '@cdktf/provider-azurerm'

storageSyncServerEndpoint.StorageSyncServerEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformElement"></a>

```typescript
import { storageSyncServerEndpoint } from '@cdktf/provider-azurerm'

storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformResource"></a>

```typescript
import { storageSyncServerEndpoint } from '@cdktf/provider-azurerm'

storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport"></a>

```typescript
import { storageSyncServerEndpoint } from '@cdktf/provider-azurerm'

storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StorageSyncServerEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageSyncServerEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageSyncServerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageSyncServerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference">StorageSyncServerEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabledInput">cloudTieringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicyInput">initialDownloadPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheModeInput">localCacheModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerIdInput">registeredServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPathInput">serverLocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupIdInput">storageSyncGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDaysInput">tierFilesOlderThanDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercentInput">volumeFreeSpacePercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabled">cloudTieringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicy">initialDownloadPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheMode">localCacheMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerId">registeredServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPath">serverLocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupId">storageSyncGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDays">tierFilesOlderThanDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercent">volumeFreeSpacePercent</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: StorageSyncServerEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference">StorageSyncServerEndpointTimeoutsOutputReference</a>

---

##### `cloudTieringEnabledInput`<sup>Optional</sup> <a name="cloudTieringEnabledInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabledInput"></a>

```typescript
public readonly cloudTieringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialDownloadPolicyInput`<sup>Optional</sup> <a name="initialDownloadPolicyInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicyInput"></a>

```typescript
public readonly initialDownloadPolicyInput: string;
```

- *Type:* string

---

##### `localCacheModeInput`<sup>Optional</sup> <a name="localCacheModeInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheModeInput"></a>

```typescript
public readonly localCacheModeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `registeredServerIdInput`<sup>Optional</sup> <a name="registeredServerIdInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerIdInput"></a>

```typescript
public readonly registeredServerIdInput: string;
```

- *Type:* string

---

##### `serverLocalPathInput`<sup>Optional</sup> <a name="serverLocalPathInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPathInput"></a>

```typescript
public readonly serverLocalPathInput: string;
```

- *Type:* string

---

##### `storageSyncGroupIdInput`<sup>Optional</sup> <a name="storageSyncGroupIdInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupIdInput"></a>

```typescript
public readonly storageSyncGroupIdInput: string;
```

- *Type:* string

---

##### `tierFilesOlderThanDaysInput`<sup>Optional</sup> <a name="tierFilesOlderThanDaysInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDaysInput"></a>

```typescript
public readonly tierFilesOlderThanDaysInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageSyncServerEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>

---

##### `volumeFreeSpacePercentInput`<sup>Optional</sup> <a name="volumeFreeSpacePercentInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercentInput"></a>

```typescript
public readonly volumeFreeSpacePercentInput: number;
```

- *Type:* number

---

##### `cloudTieringEnabled`<sup>Required</sup> <a name="cloudTieringEnabled" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.cloudTieringEnabled"></a>

```typescript
public readonly cloudTieringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialDownloadPolicy`<sup>Required</sup> <a name="initialDownloadPolicy" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.initialDownloadPolicy"></a>

```typescript
public readonly initialDownloadPolicy: string;
```

- *Type:* string

---

##### `localCacheMode`<sup>Required</sup> <a name="localCacheMode" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.localCacheMode"></a>

```typescript
public readonly localCacheMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `registeredServerId`<sup>Required</sup> <a name="registeredServerId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.registeredServerId"></a>

```typescript
public readonly registeredServerId: string;
```

- *Type:* string

---

##### `serverLocalPath`<sup>Required</sup> <a name="serverLocalPath" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.serverLocalPath"></a>

```typescript
public readonly serverLocalPath: string;
```

- *Type:* string

---

##### `storageSyncGroupId`<sup>Required</sup> <a name="storageSyncGroupId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.storageSyncGroupId"></a>

```typescript
public readonly storageSyncGroupId: string;
```

- *Type:* string

---

##### `tierFilesOlderThanDays`<sup>Required</sup> <a name="tierFilesOlderThanDays" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tierFilesOlderThanDays"></a>

```typescript
public readonly tierFilesOlderThanDays: number;
```

- *Type:* number

---

##### `volumeFreeSpacePercent`<sup>Required</sup> <a name="volumeFreeSpacePercent" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.volumeFreeSpacePercent"></a>

```typescript
public readonly volumeFreeSpacePercent: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageSyncServerEndpointConfig <a name="StorageSyncServerEndpointConfig" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.Initializer"></a>

```typescript
import { storageSyncServerEndpoint } from '@cdktf/provider-azurerm'

const storageSyncServerEndpointConfig: storageSyncServerEndpoint.StorageSyncServerEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#name StorageSyncServerEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.registeredServerId">registeredServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#registered_server_id StorageSyncServerEndpoint#registered_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.serverLocalPath">serverLocalPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#server_local_path StorageSyncServerEndpoint#server_local_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.storageSyncGroupId">storageSyncGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#storage_sync_group_id StorageSyncServerEndpoint#storage_sync_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.cloudTieringEnabled">cloudTieringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#cloud_tiering_enabled StorageSyncServerEndpoint#cloud_tiering_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#id StorageSyncServerEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.initialDownloadPolicy">initialDownloadPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#initial_download_policy StorageSyncServerEndpoint#initial_download_policy}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.localCacheMode">localCacheMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#local_cache_mode StorageSyncServerEndpoint#local_cache_mode}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.tierFilesOlderThanDays">tierFilesOlderThanDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#tier_files_older_than_days StorageSyncServerEndpoint#tier_files_older_than_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.volumeFreeSpacePercent">volumeFreeSpacePercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#volume_free_space_percent StorageSyncServerEndpoint#volume_free_space_percent}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#name StorageSyncServerEndpoint#name}.

---

##### `registeredServerId`<sup>Required</sup> <a name="registeredServerId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.registeredServerId"></a>

```typescript
public readonly registeredServerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#registered_server_id StorageSyncServerEndpoint#registered_server_id}.

---

##### `serverLocalPath`<sup>Required</sup> <a name="serverLocalPath" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.serverLocalPath"></a>

```typescript
public readonly serverLocalPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#server_local_path StorageSyncServerEndpoint#server_local_path}.

---

##### `storageSyncGroupId`<sup>Required</sup> <a name="storageSyncGroupId" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.storageSyncGroupId"></a>

```typescript
public readonly storageSyncGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#storage_sync_group_id StorageSyncServerEndpoint#storage_sync_group_id}.

---

##### `cloudTieringEnabled`<sup>Optional</sup> <a name="cloudTieringEnabled" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.cloudTieringEnabled"></a>

```typescript
public readonly cloudTieringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#cloud_tiering_enabled StorageSyncServerEndpoint#cloud_tiering_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#id StorageSyncServerEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialDownloadPolicy`<sup>Optional</sup> <a name="initialDownloadPolicy" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.initialDownloadPolicy"></a>

```typescript
public readonly initialDownloadPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#initial_download_policy StorageSyncServerEndpoint#initial_download_policy}.

---

##### `localCacheMode`<sup>Optional</sup> <a name="localCacheMode" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.localCacheMode"></a>

```typescript
public readonly localCacheMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#local_cache_mode StorageSyncServerEndpoint#local_cache_mode}.

---

##### `tierFilesOlderThanDays`<sup>Optional</sup> <a name="tierFilesOlderThanDays" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.tierFilesOlderThanDays"></a>

```typescript
public readonly tierFilesOlderThanDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#tier_files_older_than_days StorageSyncServerEndpoint#tier_files_older_than_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageSyncServerEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#timeouts StorageSyncServerEndpoint#timeouts}

---

##### `volumeFreeSpacePercent`<sup>Optional</sup> <a name="volumeFreeSpacePercent" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointConfig.property.volumeFreeSpacePercent"></a>

```typescript
public readonly volumeFreeSpacePercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#volume_free_space_percent StorageSyncServerEndpoint#volume_free_space_percent}.

---

### StorageSyncServerEndpointTimeouts <a name="StorageSyncServerEndpointTimeouts" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.Initializer"></a>

```typescript
import { storageSyncServerEndpoint } from '@cdktf/provider-azurerm'

const storageSyncServerEndpointTimeouts: storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#create StorageSyncServerEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#delete StorageSyncServerEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#read StorageSyncServerEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#update StorageSyncServerEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#create StorageSyncServerEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#delete StorageSyncServerEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#read StorageSyncServerEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/storage_sync_server_endpoint#update StorageSyncServerEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageSyncServerEndpointTimeoutsOutputReference <a name="StorageSyncServerEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageSyncServerEndpoint } from '@cdktf/provider-azurerm'

new storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageSyncServerEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageSyncServerEndpoint.StorageSyncServerEndpointTimeouts">StorageSyncServerEndpointTimeouts</a>

---



