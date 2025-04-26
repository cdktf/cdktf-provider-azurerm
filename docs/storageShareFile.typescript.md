# `storageShareFile` Submodule <a name="`storageShareFile` Submodule" id="@cdktf/provider-azurerm.storageShareFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageShareFile <a name="StorageShareFile" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file azurerm_storage_share_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.Initializer"></a>

```typescript
import { storageShareFile } from '@cdktf/provider-azurerm'

new storageShareFile.StorageShareFile(scope: Construct, id: string, config: StorageShareFileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig">StorageShareFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig">StorageShareFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetContentMd5">resetContentMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageShareFileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts">StorageShareFileTimeouts</a>

---

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetContentDisposition"></a>

```typescript
public resetContentDisposition(): void
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetContentEncoding"></a>

```typescript
public resetContentEncoding(): void
```

##### `resetContentMd5` <a name="resetContentMd5" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetContentMd5"></a>

```typescript
public resetContentMd5(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageShareFile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.isConstruct"></a>

```typescript
import { storageShareFile } from '@cdktf/provider-azurerm'

storageShareFile.StorageShareFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.isTerraformElement"></a>

```typescript
import { storageShareFile } from '@cdktf/provider-azurerm'

storageShareFile.StorageShareFile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.isTerraformResource"></a>

```typescript
import { storageShareFile } from '@cdktf/provider-azurerm'

storageShareFile.StorageShareFile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.generateConfigForImport"></a>

```typescript
import { storageShareFile } from '@cdktf/provider-azurerm'

storageShareFile.StorageShareFile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StorageShareFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageShareFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageShareFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageShareFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentLength">contentLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference">StorageShareFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentDispositionInput">contentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentEncodingInput">contentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentMd5Input">contentMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.storageShareIdInput">storageShareIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts">StorageShareFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentMd5">contentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.storageShareId">storageShareId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentLength`<sup>Required</sup> <a name="contentLength" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentLength"></a>

```typescript
public readonly contentLength: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.timeouts"></a>

```typescript
public readonly timeouts: StorageShareFileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference">StorageShareFileTimeoutsOutputReference</a>

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentDispositionInput"></a>

```typescript
public readonly contentDispositionInput: string;
```

- *Type:* string

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentEncodingInput"></a>

```typescript
public readonly contentEncodingInput: string;
```

- *Type:* string

---

##### `contentMd5Input`<sup>Optional</sup> <a name="contentMd5Input" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentMd5Input"></a>

```typescript
public readonly contentMd5Input: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `storageShareIdInput`<sup>Optional</sup> <a name="storageShareIdInput" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.storageShareIdInput"></a>

```typescript
public readonly storageShareIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageShareFileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts">StorageShareFileTimeouts</a>

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentMd5`<sup>Required</sup> <a name="contentMd5" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentMd5"></a>

```typescript
public readonly contentMd5: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `storageShareId`<sup>Required</sup> <a name="storageShareId" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.storageShareId"></a>

```typescript
public readonly storageShareId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageShareFileConfig <a name="StorageShareFileConfig" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.Initializer"></a>

```typescript
import { storageShareFile } from '@cdktf/provider-azurerm'

const storageShareFileConfig: storageShareFile.StorageShareFileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#name StorageShareFile#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.storageShareId">storageShareId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#storage_share_id StorageShareFile#storage_share_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#content_disposition StorageShareFile#content_disposition}. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#content_encoding StorageShareFile#content_encoding}. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.contentMd5">contentMd5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#content_md5 StorageShareFile#content_md5}. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#content_type StorageShareFile#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#id StorageShareFile#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#metadata StorageShareFile#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#path StorageShareFile#path}. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#source StorageShareFile#source}. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts">StorageShareFileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#name StorageShareFile#name}.

---

##### `storageShareId`<sup>Required</sup> <a name="storageShareId" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.storageShareId"></a>

```typescript
public readonly storageShareId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#storage_share_id StorageShareFile#storage_share_id}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#content_disposition StorageShareFile#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#content_encoding StorageShareFile#content_encoding}.

---

##### `contentMd5`<sup>Optional</sup> <a name="contentMd5" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.contentMd5"></a>

```typescript
public readonly contentMd5: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#content_md5 StorageShareFile#content_md5}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#content_type StorageShareFile#content_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#id StorageShareFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#metadata StorageShareFile#metadata}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#path StorageShareFile#path}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#source StorageShareFile#source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageShareFileTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts">StorageShareFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#timeouts StorageShareFile#timeouts}

---

### StorageShareFileTimeouts <a name="StorageShareFileTimeouts" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts.Initializer"></a>

```typescript
import { storageShareFile } from '@cdktf/provider-azurerm'

const storageShareFileTimeouts: storageShareFile.StorageShareFileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#create StorageShareFile#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#delete StorageShareFile#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#read StorageShareFile#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#update StorageShareFile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#create StorageShareFile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#delete StorageShareFile#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#read StorageShareFile#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_share_file#update StorageShareFile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageShareFileTimeoutsOutputReference <a name="StorageShareFileTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageShareFile } from '@cdktf/provider-azurerm'

new storageShareFile.StorageShareFileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts">StorageShareFileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageShareFileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageShareFile.StorageShareFileTimeouts">StorageShareFileTimeouts</a>

---



