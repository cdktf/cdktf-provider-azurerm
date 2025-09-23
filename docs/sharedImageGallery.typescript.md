# `sharedImageGallery` Submodule <a name="`sharedImageGallery` Submodule" id="@cdktf/provider-azurerm.sharedImageGallery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedImageGallery <a name="SharedImageGallery" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery azurerm_shared_image_gallery}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer"></a>

```typescript
import { sharedImageGallery } from '@cdktf/provider-azurerm'

new sharedImageGallery.SharedImageGallery(scope: Construct, id: string, config: SharedImageGalleryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig">SharedImageGalleryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig">SharedImageGalleryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putSharing">putSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetSharing">resetSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSharing` <a name="putSharing" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putSharing"></a>

```typescript
public putSharing(value: SharedImageGallerySharing): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putSharing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing">SharedImageGallerySharing</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putTimeouts"></a>

```typescript
public putTimeouts(value: SharedImageGalleryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts">SharedImageGalleryTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSharing` <a name="resetSharing" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetSharing"></a>

```typescript
public resetSharing(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SharedImageGallery resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isConstruct"></a>

```typescript
import { sharedImageGallery } from '@cdktf/provider-azurerm'

sharedImageGallery.SharedImageGallery.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isTerraformElement"></a>

```typescript
import { sharedImageGallery } from '@cdktf/provider-azurerm'

sharedImageGallery.SharedImageGallery.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isTerraformResource"></a>

```typescript
import { sharedImageGallery } from '@cdktf/provider-azurerm'

sharedImageGallery.SharedImageGallery.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.generateConfigForImport"></a>

```typescript
import { sharedImageGallery } from '@cdktf/provider-azurerm'

sharedImageGallery.SharedImageGallery.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SharedImageGallery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SharedImageGallery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SharedImageGallery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SharedImageGallery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.sharing">sharing</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference">SharedImageGallerySharingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference">SharedImageGalleryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.uniqueName">uniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.sharingInput">sharingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing">SharedImageGallerySharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts">SharedImageGalleryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sharing`<sup>Required</sup> <a name="sharing" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.sharing"></a>

```typescript
public readonly sharing: SharedImageGallerySharingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference">SharedImageGallerySharingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.timeouts"></a>

```typescript
public readonly timeouts: SharedImageGalleryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference">SharedImageGalleryTimeoutsOutputReference</a>

---

##### `uniqueName`<sup>Required</sup> <a name="uniqueName" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.uniqueName"></a>

```typescript
public readonly uniqueName: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `sharingInput`<sup>Optional</sup> <a name="sharingInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.sharingInput"></a>

```typescript
public readonly sharingInput: SharedImageGallerySharing;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing">SharedImageGallerySharing</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SharedImageGalleryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts">SharedImageGalleryTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SharedImageGalleryConfig <a name="SharedImageGalleryConfig" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.Initializer"></a>

```typescript
import { sharedImageGallery } from '@cdktf/provider-azurerm'

const sharedImageGalleryConfig: sharedImageGallery.SharedImageGalleryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#location SharedImageGallery#location}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#name SharedImageGallery#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#resource_group_name SharedImageGallery#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#description SharedImageGallery#description}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#id SharedImageGallery#id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.sharing">sharing</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing">SharedImageGallerySharing</a></code> | sharing block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#tags SharedImageGallery#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts">SharedImageGalleryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#location SharedImageGallery#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#name SharedImageGallery#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#resource_group_name SharedImageGallery#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#description SharedImageGallery#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#id SharedImageGallery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sharing`<sup>Optional</sup> <a name="sharing" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.sharing"></a>

```typescript
public readonly sharing: SharedImageGallerySharing;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing">SharedImageGallerySharing</a>

sharing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#sharing SharedImageGallery#sharing}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#tags SharedImageGallery#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SharedImageGalleryTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts">SharedImageGalleryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#timeouts SharedImageGallery#timeouts}

---

### SharedImageGallerySharing <a name="SharedImageGallerySharing" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing.Initializer"></a>

```typescript
import { sharedImageGallery } from '@cdktf/provider-azurerm'

const sharedImageGallerySharing: sharedImageGallery.SharedImageGallerySharing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#permission SharedImageGallery#permission}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing.property.communityGallery">communityGallery</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery">SharedImageGallerySharingCommunityGallery</a></code> | community_gallery block. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#permission SharedImageGallery#permission}.

---

##### `communityGallery`<sup>Optional</sup> <a name="communityGallery" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing.property.communityGallery"></a>

```typescript
public readonly communityGallery: SharedImageGallerySharingCommunityGallery;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery">SharedImageGallerySharingCommunityGallery</a>

community_gallery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#community_gallery SharedImageGallery#community_gallery}

---

### SharedImageGallerySharingCommunityGallery <a name="SharedImageGallerySharingCommunityGallery" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.Initializer"></a>

```typescript
import { sharedImageGallery } from '@cdktf/provider-azurerm'

const sharedImageGallerySharingCommunityGallery: sharedImageGallery.SharedImageGallerySharingCommunityGallery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.eula">eula</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#eula SharedImageGallery#eula}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#prefix SharedImageGallery#prefix}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.publisherEmail">publisherEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#publisher_email SharedImageGallery#publisher_email}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.publisherUri">publisherUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#publisher_uri SharedImageGallery#publisher_uri}. |

---

##### `eula`<sup>Required</sup> <a name="eula" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.eula"></a>

```typescript
public readonly eula: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#eula SharedImageGallery#eula}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#prefix SharedImageGallery#prefix}.

---

##### `publisherEmail`<sup>Required</sup> <a name="publisherEmail" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.publisherEmail"></a>

```typescript
public readonly publisherEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#publisher_email SharedImageGallery#publisher_email}.

---

##### `publisherUri`<sup>Required</sup> <a name="publisherUri" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.publisherUri"></a>

```typescript
public readonly publisherUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#publisher_uri SharedImageGallery#publisher_uri}.

---

### SharedImageGalleryTimeouts <a name="SharedImageGalleryTimeouts" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.Initializer"></a>

```typescript
import { sharedImageGallery } from '@cdktf/provider-azurerm'

const sharedImageGalleryTimeouts: sharedImageGallery.SharedImageGalleryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#create SharedImageGallery#create}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#delete SharedImageGallery#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#read SharedImageGallery#read}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#update SharedImageGallery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#create SharedImageGallery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#delete SharedImageGallery#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#read SharedImageGallery#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/shared_image_gallery#update SharedImageGallery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharedImageGallerySharingCommunityGalleryOutputReference <a name="SharedImageGallerySharingCommunityGalleryOutputReference" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.Initializer"></a>

```typescript
import { sharedImageGallery } from '@cdktf/provider-azurerm'

new sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.eulaInput">eulaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherEmailInput">publisherEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherUriInput">publisherUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.eula">eula</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherEmail">publisherEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherUri">publisherUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery">SharedImageGallerySharingCommunityGallery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `eulaInput`<sup>Optional</sup> <a name="eulaInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.eulaInput"></a>

```typescript
public readonly eulaInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `publisherEmailInput`<sup>Optional</sup> <a name="publisherEmailInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherEmailInput"></a>

```typescript
public readonly publisherEmailInput: string;
```

- *Type:* string

---

##### `publisherUriInput`<sup>Optional</sup> <a name="publisherUriInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherUriInput"></a>

```typescript
public readonly publisherUriInput: string;
```

- *Type:* string

---

##### `eula`<sup>Required</sup> <a name="eula" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.eula"></a>

```typescript
public readonly eula: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `publisherEmail`<sup>Required</sup> <a name="publisherEmail" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherEmail"></a>

```typescript
public readonly publisherEmail: string;
```

- *Type:* string

---

##### `publisherUri`<sup>Required</sup> <a name="publisherUri" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherUri"></a>

```typescript
public readonly publisherUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SharedImageGallerySharingCommunityGallery;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery">SharedImageGallerySharingCommunityGallery</a>

---


### SharedImageGallerySharingOutputReference <a name="SharedImageGallerySharingOutputReference" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.Initializer"></a>

```typescript
import { sharedImageGallery } from '@cdktf/provider-azurerm'

new sharedImageGallery.SharedImageGallerySharingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.putCommunityGallery">putCommunityGallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.resetCommunityGallery">resetCommunityGallery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCommunityGallery` <a name="putCommunityGallery" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.putCommunityGallery"></a>

```typescript
public putCommunityGallery(value: SharedImageGallerySharingCommunityGallery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.putCommunityGallery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery">SharedImageGallerySharingCommunityGallery</a>

---

##### `resetCommunityGallery` <a name="resetCommunityGallery" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.resetCommunityGallery"></a>

```typescript
public resetCommunityGallery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.communityGallery">communityGallery</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference">SharedImageGallerySharingCommunityGalleryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.communityGalleryInput">communityGalleryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery">SharedImageGallerySharingCommunityGallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing">SharedImageGallerySharing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `communityGallery`<sup>Required</sup> <a name="communityGallery" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.communityGallery"></a>

```typescript
public readonly communityGallery: SharedImageGallerySharingCommunityGalleryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference">SharedImageGallerySharingCommunityGalleryOutputReference</a>

---

##### `communityGalleryInput`<sup>Optional</sup> <a name="communityGalleryInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.communityGalleryInput"></a>

```typescript
public readonly communityGalleryInput: SharedImageGallerySharingCommunityGallery;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery">SharedImageGallerySharingCommunityGallery</a>

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SharedImageGallerySharing;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing">SharedImageGallerySharing</a>

---


### SharedImageGalleryTimeoutsOutputReference <a name="SharedImageGalleryTimeoutsOutputReference" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.Initializer"></a>

```typescript
import { sharedImageGallery } from '@cdktf/provider-azurerm'

new sharedImageGallery.SharedImageGalleryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts">SharedImageGalleryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SharedImageGalleryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts">SharedImageGalleryTimeouts</a>

---



