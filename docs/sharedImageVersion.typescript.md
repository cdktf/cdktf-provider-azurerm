# `sharedImageVersion` Submodule <a name="`sharedImageVersion` Submodule" id="@cdktf/provider-azurerm.sharedImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedImageVersion <a name="SharedImageVersion" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version azurerm_shared_image_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer"></a>

```typescript
import { sharedImageVersion } from '@cdktf/provider-azurerm'

new sharedImageVersion.SharedImageVersion(scope: Construct, id: string, config: SharedImageVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig">SharedImageVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig">SharedImageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion">putTargetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetBlobUri">resetBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetDeletionOfReplicatedLocationsEnabled">resetDeletionOfReplicatedLocationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetEndOfLifeDate">resetEndOfLifeDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetExcludeFromLatest">resetExcludeFromLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetManagedImageId">resetManagedImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOsDiskSnapshotId">resetOsDiskSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetReplicationMode">resetReplicationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetStorageAccountId">resetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTargetRegion` <a name="putTargetRegion" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion"></a>

```typescript
public putTargetRegion(value: IResolvable | SharedImageVersionTargetRegion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: SharedImageVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

---

##### `resetBlobUri` <a name="resetBlobUri" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetBlobUri"></a>

```typescript
public resetBlobUri(): void
```

##### `resetDeletionOfReplicatedLocationsEnabled` <a name="resetDeletionOfReplicatedLocationsEnabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetDeletionOfReplicatedLocationsEnabled"></a>

```typescript
public resetDeletionOfReplicatedLocationsEnabled(): void
```

##### `resetEndOfLifeDate` <a name="resetEndOfLifeDate" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetEndOfLifeDate"></a>

```typescript
public resetEndOfLifeDate(): void
```

##### `resetExcludeFromLatest` <a name="resetExcludeFromLatest" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetExcludeFromLatest"></a>

```typescript
public resetExcludeFromLatest(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagedImageId` <a name="resetManagedImageId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetManagedImageId"></a>

```typescript
public resetManagedImageId(): void
```

##### `resetOsDiskSnapshotId` <a name="resetOsDiskSnapshotId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOsDiskSnapshotId"></a>

```typescript
public resetOsDiskSnapshotId(): void
```

##### `resetReplicationMode` <a name="resetReplicationMode" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetReplicationMode"></a>

```typescript
public resetReplicationMode(): void
```

##### `resetStorageAccountId` <a name="resetStorageAccountId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetStorageAccountId"></a>

```typescript
public resetStorageAccountId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SharedImageVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct"></a>

```typescript
import { sharedImageVersion } from '@cdktf/provider-azurerm'

sharedImageVersion.SharedImageVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement"></a>

```typescript
import { sharedImageVersion } from '@cdktf/provider-azurerm'

sharedImageVersion.SharedImageVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource"></a>

```typescript
import { sharedImageVersion } from '@cdktf/provider-azurerm'

sharedImageVersion.SharedImageVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport"></a>

```typescript
import { sharedImageVersion } from '@cdktf/provider-azurerm'

sharedImageVersion.SharedImageVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SharedImageVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SharedImageVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SharedImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SharedImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegion">targetRegion</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList">SharedImageVersionTargetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference">SharedImageVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUriInput">blobUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabledInput">deletionOfReplicatedLocationsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDateInput">endOfLifeDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatestInput">excludeFromLatestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryNameInput">galleryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageIdInput">managedImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotIdInput">osDiskSnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationModeInput">replicationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegionInput">targetRegionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUri">blobUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabled">deletionOfReplicatedLocationsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDate">endOfLifeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatest">excludeFromLatest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryName">galleryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageId">managedImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotId">osDiskSnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationMode">replicationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `targetRegion`<sup>Required</sup> <a name="targetRegion" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegion"></a>

```typescript
public readonly targetRegion: SharedImageVersionTargetRegionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList">SharedImageVersionTargetRegionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeouts"></a>

```typescript
public readonly timeouts: SharedImageVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference">SharedImageVersionTimeoutsOutputReference</a>

---

##### `blobUriInput`<sup>Optional</sup> <a name="blobUriInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUriInput"></a>

```typescript
public readonly blobUriInput: string;
```

- *Type:* string

---

##### `deletionOfReplicatedLocationsEnabledInput`<sup>Optional</sup> <a name="deletionOfReplicatedLocationsEnabledInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabledInput"></a>

```typescript
public readonly deletionOfReplicatedLocationsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endOfLifeDateInput`<sup>Optional</sup> <a name="endOfLifeDateInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDateInput"></a>

```typescript
public readonly endOfLifeDateInput: string;
```

- *Type:* string

---

##### `excludeFromLatestInput`<sup>Optional</sup> <a name="excludeFromLatestInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatestInput"></a>

```typescript
public readonly excludeFromLatestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `galleryNameInput`<sup>Optional</sup> <a name="galleryNameInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryNameInput"></a>

```typescript
public readonly galleryNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managedImageIdInput`<sup>Optional</sup> <a name="managedImageIdInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageIdInput"></a>

```typescript
public readonly managedImageIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `osDiskSnapshotIdInput`<sup>Optional</sup> <a name="osDiskSnapshotIdInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotIdInput"></a>

```typescript
public readonly osDiskSnapshotIdInput: string;
```

- *Type:* string

---

##### `replicationModeInput`<sup>Optional</sup> <a name="replicationModeInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationModeInput"></a>

```typescript
public readonly replicationModeInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetRegionInput`<sup>Optional</sup> <a name="targetRegionInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegionInput"></a>

```typescript
public readonly targetRegionInput: IResolvable | SharedImageVersionTargetRegion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SharedImageVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

---

##### `blobUri`<sup>Required</sup> <a name="blobUri" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUri"></a>

```typescript
public readonly blobUri: string;
```

- *Type:* string

---

##### `deletionOfReplicatedLocationsEnabled`<sup>Required</sup> <a name="deletionOfReplicatedLocationsEnabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabled"></a>

```typescript
public readonly deletionOfReplicatedLocationsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endOfLifeDate`<sup>Required</sup> <a name="endOfLifeDate" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDate"></a>

```typescript
public readonly endOfLifeDate: string;
```

- *Type:* string

---

##### `excludeFromLatest`<sup>Required</sup> <a name="excludeFromLatest" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatest"></a>

```typescript
public readonly excludeFromLatest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `galleryName`<sup>Required</sup> <a name="galleryName" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryName"></a>

```typescript
public readonly galleryName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managedImageId`<sup>Required</sup> <a name="managedImageId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageId"></a>

```typescript
public readonly managedImageId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osDiskSnapshotId`<sup>Required</sup> <a name="osDiskSnapshotId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotId"></a>

```typescript
public readonly osDiskSnapshotId: string;
```

- *Type:* string

---

##### `replicationMode`<sup>Required</sup> <a name="replicationMode" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationMode"></a>

```typescript
public readonly replicationMode: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SharedImageVersionConfig <a name="SharedImageVersionConfig" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.Initializer"></a>

```typescript
import { sharedImageVersion } from '@cdktf/provider-azurerm'

const sharedImageVersionConfig: sharedImageVersion.SharedImageVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.galleryName">galleryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.imageName">imageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#location SharedImageVersion#location}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#name SharedImageVersion#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.targetRegion">targetRegion</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>[]</code> | target_region block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.blobUri">blobUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.deletionOfReplicatedLocationsEnabled">deletionOfReplicatedLocationsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.endOfLifeDate">endOfLifeDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.excludeFromLatest">excludeFromLatest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#id SharedImageVersion#id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.managedImageId">managedImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.osDiskSnapshotId">osDiskSnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.replicationMode">replicationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#tags SharedImageVersion#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `galleryName`<sup>Required</sup> <a name="galleryName" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.galleryName"></a>

```typescript
public readonly galleryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#location SharedImageVersion#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#name SharedImageVersion#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}.

---

##### `targetRegion`<sup>Required</sup> <a name="targetRegion" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.targetRegion"></a>

```typescript
public readonly targetRegion: IResolvable | SharedImageVersionTargetRegion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>[]

target_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#target_region SharedImageVersion#target_region}

---

##### `blobUri`<sup>Optional</sup> <a name="blobUri" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.blobUri"></a>

```typescript
public readonly blobUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}.

---

##### `deletionOfReplicatedLocationsEnabled`<sup>Optional</sup> <a name="deletionOfReplicatedLocationsEnabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.deletionOfReplicatedLocationsEnabled"></a>

```typescript
public readonly deletionOfReplicatedLocationsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}.

---

##### `endOfLifeDate`<sup>Optional</sup> <a name="endOfLifeDate" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.endOfLifeDate"></a>

```typescript
public readonly endOfLifeDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}.

---

##### `excludeFromLatest`<sup>Optional</sup> <a name="excludeFromLatest" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.excludeFromLatest"></a>

```typescript
public readonly excludeFromLatest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#id SharedImageVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedImageId`<sup>Optional</sup> <a name="managedImageId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.managedImageId"></a>

```typescript
public readonly managedImageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}.

---

##### `osDiskSnapshotId`<sup>Optional</sup> <a name="osDiskSnapshotId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.osDiskSnapshotId"></a>

```typescript
public readonly osDiskSnapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}.

---

##### `replicationMode`<sup>Optional</sup> <a name="replicationMode" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.replicationMode"></a>

```typescript
public readonly replicationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#tags SharedImageVersion#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SharedImageVersionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#timeouts SharedImageVersion#timeouts}

---

### SharedImageVersionTargetRegion <a name="SharedImageVersionTargetRegion" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.Initializer"></a>

```typescript
import { sharedImageVersion } from '@cdktf/provider-azurerm'

const sharedImageVersionTargetRegion: sharedImageVersion.SharedImageVersionTargetRegion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#name SharedImageVersion#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.regionalReplicaCount">regionalReplicaCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#regional_replica_count SharedImageVersion#regional_replica_count}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#disk_encryption_set_id SharedImageVersion#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.excludeFromLatestEnabled">excludeFromLatestEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#exclude_from_latest_enabled SharedImageVersion#exclude_from_latest_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#storage_account_type SharedImageVersion#storage_account_type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#name SharedImageVersion#name}.

---

##### `regionalReplicaCount`<sup>Required</sup> <a name="regionalReplicaCount" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.regionalReplicaCount"></a>

```typescript
public readonly regionalReplicaCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#regional_replica_count SharedImageVersion#regional_replica_count}.

---

##### `diskEncryptionSetId`<sup>Optional</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.diskEncryptionSetId"></a>

```typescript
public readonly diskEncryptionSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#disk_encryption_set_id SharedImageVersion#disk_encryption_set_id}.

---

##### `excludeFromLatestEnabled`<sup>Optional</sup> <a name="excludeFromLatestEnabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.excludeFromLatestEnabled"></a>

```typescript
public readonly excludeFromLatestEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#exclude_from_latest_enabled SharedImageVersion#exclude_from_latest_enabled}.

---

##### `storageAccountType`<sup>Optional</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#storage_account_type SharedImageVersion#storage_account_type}.

---

### SharedImageVersionTimeouts <a name="SharedImageVersionTimeouts" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.Initializer"></a>

```typescript
import { sharedImageVersion } from '@cdktf/provider-azurerm'

const sharedImageVersionTimeouts: sharedImageVersion.SharedImageVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#create SharedImageVersion#create}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#delete SharedImageVersion#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#read SharedImageVersion#read}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#update SharedImageVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#create SharedImageVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#delete SharedImageVersion#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#read SharedImageVersion#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/shared_image_version#update SharedImageVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharedImageVersionTargetRegionList <a name="SharedImageVersionTargetRegionList" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer"></a>

```typescript
import { sharedImageVersion } from '@cdktf/provider-azurerm'

new sharedImageVersion.SharedImageVersionTargetRegionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get"></a>

```typescript
public get(index: number): SharedImageVersionTargetRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SharedImageVersionTargetRegion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>[]

---


### SharedImageVersionTargetRegionOutputReference <a name="SharedImageVersionTargetRegionOutputReference" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer"></a>

```typescript
import { sharedImageVersion } from '@cdktf/provider-azurerm'

new sharedImageVersion.SharedImageVersionTargetRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetDiskEncryptionSetId">resetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetExcludeFromLatestEnabled">resetExcludeFromLatestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetStorageAccountType">resetStorageAccountType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskEncryptionSetId` <a name="resetDiskEncryptionSetId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetDiskEncryptionSetId"></a>

```typescript
public resetDiskEncryptionSetId(): void
```

##### `resetExcludeFromLatestEnabled` <a name="resetExcludeFromLatestEnabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetExcludeFromLatestEnabled"></a>

```typescript
public resetExcludeFromLatestEnabled(): void
```

##### `resetStorageAccountType` <a name="resetStorageAccountType" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetStorageAccountType"></a>

```typescript
public resetStorageAccountType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetIdInput">diskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabledInput">excludeFromLatestEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCountInput">regionalReplicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabled">excludeFromLatestEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCount">regionalReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskEncryptionSetIdInput`<sup>Optional</sup> <a name="diskEncryptionSetIdInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetIdInput"></a>

```typescript
public readonly diskEncryptionSetIdInput: string;
```

- *Type:* string

---

##### `excludeFromLatestEnabledInput`<sup>Optional</sup> <a name="excludeFromLatestEnabledInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabledInput"></a>

```typescript
public readonly excludeFromLatestEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionalReplicaCountInput`<sup>Optional</sup> <a name="regionalReplicaCountInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCountInput"></a>

```typescript
public readonly regionalReplicaCountInput: number;
```

- *Type:* number

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountTypeInput"></a>

```typescript
public readonly storageAccountTypeInput: string;
```

- *Type:* string

---

##### `diskEncryptionSetId`<sup>Required</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetId"></a>

```typescript
public readonly diskEncryptionSetId: string;
```

- *Type:* string

---

##### `excludeFromLatestEnabled`<sup>Required</sup> <a name="excludeFromLatestEnabled" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabled"></a>

```typescript
public readonly excludeFromLatestEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regionalReplicaCount`<sup>Required</sup> <a name="regionalReplicaCount" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCount"></a>

```typescript
public readonly regionalReplicaCount: number;
```

- *Type:* number

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SharedImageVersionTargetRegion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>

---


### SharedImageVersionTimeoutsOutputReference <a name="SharedImageVersionTimeoutsOutputReference" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { sharedImageVersion } from '@cdktf/provider-azurerm'

new sharedImageVersion.SharedImageVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SharedImageVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

---



