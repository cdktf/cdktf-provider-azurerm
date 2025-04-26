# `storageAccountStaticWebsite` Submodule <a name="`storageAccountStaticWebsite` Submodule" id="@cdktf/provider-azurerm.storageAccountStaticWebsite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountStaticWebsiteA <a name="StorageAccountStaticWebsiteA" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website azurerm_storage_account_static_website}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer"></a>

```typescript
import { storageAccountStaticWebsite } from '@cdktf/provider-azurerm'

new storageAccountStaticWebsite.StorageAccountStaticWebsiteA(scope: Construct, id: string, config: StorageAccountStaticWebsiteAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig">StorageAccountStaticWebsiteAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig">StorageAccountStaticWebsiteAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetError404Document">resetError404Document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetIndexDocument">resetIndexDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageAccountStaticWebsiteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a>

---

##### `resetError404Document` <a name="resetError404Document" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetError404Document"></a>

```typescript
public resetError404Document(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndexDocument` <a name="resetIndexDocument" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetIndexDocument"></a>

```typescript
public resetIndexDocument(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageAccountStaticWebsiteA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isConstruct"></a>

```typescript
import { storageAccountStaticWebsite } from '@cdktf/provider-azurerm'

storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isTerraformElement"></a>

```typescript
import { storageAccountStaticWebsite } from '@cdktf/provider-azurerm'

storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isTerraformResource"></a>

```typescript
import { storageAccountStaticWebsite } from '@cdktf/provider-azurerm'

storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.generateConfigForImport"></a>

```typescript
import { storageAccountStaticWebsite } from '@cdktf/provider-azurerm'

storageAccountStaticWebsite.StorageAccountStaticWebsiteA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StorageAccountStaticWebsiteA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageAccountStaticWebsiteA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageAccountStaticWebsiteA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageAccountStaticWebsiteA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference">StorageAccountStaticWebsiteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.error404DocumentInput">error404DocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.indexDocumentInput">indexDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.error404Document">error404Document</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.indexDocument">indexDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.timeouts"></a>

```typescript
public readonly timeouts: StorageAccountStaticWebsiteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference">StorageAccountStaticWebsiteTimeoutsOutputReference</a>

---

##### `error404DocumentInput`<sup>Optional</sup> <a name="error404DocumentInput" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.error404DocumentInput"></a>

```typescript
public readonly error404DocumentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexDocumentInput`<sup>Optional</sup> <a name="indexDocumentInput" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.indexDocumentInput"></a>

```typescript
public readonly indexDocumentInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageAccountStaticWebsiteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a>

---

##### `error404Document`<sup>Required</sup> <a name="error404Document" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.error404Document"></a>

```typescript
public readonly error404Document: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexDocument`<sup>Required</sup> <a name="indexDocument" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.indexDocument"></a>

```typescript
public readonly indexDocument: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountStaticWebsiteAConfig <a name="StorageAccountStaticWebsiteAConfig" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.Initializer"></a>

```typescript
import { storageAccountStaticWebsite } from '@cdktf/provider-azurerm'

const storageAccountStaticWebsiteAConfig: storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#storage_account_id StorageAccountStaticWebsiteA#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.error404Document">error404Document</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#error_404_document StorageAccountStaticWebsiteA#error_404_document}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#id StorageAccountStaticWebsiteA#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.indexDocument">indexDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#index_document StorageAccountStaticWebsiteA#index_document}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#storage_account_id StorageAccountStaticWebsiteA#storage_account_id}.

---

##### `error404Document`<sup>Optional</sup> <a name="error404Document" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.error404Document"></a>

```typescript
public readonly error404Document: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#error_404_document StorageAccountStaticWebsiteA#error_404_document}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#id StorageAccountStaticWebsiteA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexDocument`<sup>Optional</sup> <a name="indexDocument" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.indexDocument"></a>

```typescript
public readonly indexDocument: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#index_document StorageAccountStaticWebsiteA#index_document}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageAccountStaticWebsiteTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#timeouts StorageAccountStaticWebsiteA#timeouts}

---

### StorageAccountStaticWebsiteTimeouts <a name="StorageAccountStaticWebsiteTimeouts" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.Initializer"></a>

```typescript
import { storageAccountStaticWebsite } from '@cdktf/provider-azurerm'

const storageAccountStaticWebsiteTimeouts: storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#create StorageAccountStaticWebsiteA#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#delete StorageAccountStaticWebsiteA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#read StorageAccountStaticWebsiteA#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#update StorageAccountStaticWebsiteA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#create StorageAccountStaticWebsiteA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#delete StorageAccountStaticWebsiteA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#read StorageAccountStaticWebsiteA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/storage_account_static_website#update StorageAccountStaticWebsiteA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountStaticWebsiteTimeoutsOutputReference <a name="StorageAccountStaticWebsiteTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageAccountStaticWebsite } from '@cdktf/provider-azurerm'

new storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountStaticWebsiteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a>

---



