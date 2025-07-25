# `aadb2CDirectory` Submodule <a name="`aadb2CDirectory` Submodule" id="@cdktf/provider-azurerm.aadb2CDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Aadb2CDirectory <a name="Aadb2CDirectory" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory azurerm_aadb2c_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.Initializer"></a>

```typescript
import { aadb2CDirectory } from '@cdktf/provider-azurerm'

new aadb2CDirectory.Aadb2CDirectory(scope: Construct, id: string, config: Aadb2CDirectoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig">Aadb2CDirectoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig">Aadb2CDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.putTimeouts"></a>

```typescript
public putTimeouts(value: Aadb2CDirectoryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts">Aadb2CDirectoryTimeouts</a>

---

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Aadb2CDirectory resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isConstruct"></a>

```typescript
import { aadb2CDirectory } from '@cdktf/provider-azurerm'

aadb2CDirectory.Aadb2CDirectory.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isTerraformElement"></a>

```typescript
import { aadb2CDirectory } from '@cdktf/provider-azurerm'

aadb2CDirectory.Aadb2CDirectory.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isTerraformResource"></a>

```typescript
import { aadb2CDirectory } from '@cdktf/provider-azurerm'

aadb2CDirectory.Aadb2CDirectory.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.generateConfigForImport"></a>

```typescript
import { aadb2CDirectory } from '@cdktf/provider-azurerm'

aadb2CDirectory.Aadb2CDirectory.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Aadb2CDirectory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Aadb2CDirectory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Aadb2CDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Aadb2CDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.billingType">billingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.effectiveStartDate">effectiveStartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference">Aadb2CDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.dataResidencyLocationInput">dataResidencyLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts">Aadb2CDirectoryTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.dataResidencyLocation">dataResidencyLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billingType`<sup>Required</sup> <a name="billingType" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.billingType"></a>

```typescript
public readonly billingType: string;
```

- *Type:* string

---

##### `effectiveStartDate`<sup>Required</sup> <a name="effectiveStartDate" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.effectiveStartDate"></a>

```typescript
public readonly effectiveStartDate: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.timeouts"></a>

```typescript
public readonly timeouts: Aadb2CDirectoryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference">Aadb2CDirectoryTimeoutsOutputReference</a>

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `dataResidencyLocationInput`<sup>Optional</sup> <a name="dataResidencyLocationInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.dataResidencyLocationInput"></a>

```typescript
public readonly dataResidencyLocationInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: Aadb2CDirectoryTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts">Aadb2CDirectoryTimeouts</a> | cdktf.IResolvable

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `dataResidencyLocation`<sup>Required</sup> <a name="dataResidencyLocation" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.dataResidencyLocation"></a>

```typescript
public readonly dataResidencyLocation: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectory.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Aadb2CDirectoryConfig <a name="Aadb2CDirectoryConfig" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.Initializer"></a>

```typescript
import { aadb2CDirectory } from '@cdktf/provider-azurerm'

const aadb2CDirectoryConfig: aadb2CDirectory.Aadb2CDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.dataResidencyLocation">dataResidencyLocation</a></code> | <code>string</code> | Location in which the B2C tenant is hosted and data resides. See https://aka.ms/B2CDataResidency for more information. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.domainName">domainName</a></code> | <code>string</code> | Domain name of the B2C tenant, including onmicrosoft.com suffix. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#resource_group_name Aadb2CDirectory#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.skuName">skuName</a></code> | <code>string</code> | Billing SKU for the B2C tenant. See https://aka.ms/b2cBilling for more information. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.countryCode">countryCode</a></code> | <code>string</code> | Country code of the B2C tenant. See https://aka.ms/B2CDataResidency for valid country codes. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.displayName">displayName</a></code> | <code>string</code> | The initial display name of the B2C tenant. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#id Aadb2CDirectory#id}. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#tags Aadb2CDirectory#tags}. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts">Aadb2CDirectoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataResidencyLocation`<sup>Required</sup> <a name="dataResidencyLocation" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.dataResidencyLocation"></a>

```typescript
public readonly dataResidencyLocation: string;
```

- *Type:* string

Location in which the B2C tenant is hosted and data resides. See https://aka.ms/B2CDataResidency for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#data_residency_location Aadb2CDirectory#data_residency_location}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Domain name of the B2C tenant, including onmicrosoft.com suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#domain_name Aadb2CDirectory#domain_name}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#resource_group_name Aadb2CDirectory#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Billing SKU for the B2C tenant. See https://aka.ms/b2cBilling for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#sku_name Aadb2CDirectory#sku_name}

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

Country code of the B2C tenant. See https://aka.ms/B2CDataResidency for valid country codes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#country_code Aadb2CDirectory#country_code}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The initial display name of the B2C tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#display_name Aadb2CDirectory#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#id Aadb2CDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#tags Aadb2CDirectory#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Aadb2CDirectoryTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts">Aadb2CDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#timeouts Aadb2CDirectory#timeouts}

---

### Aadb2CDirectoryTimeouts <a name="Aadb2CDirectoryTimeouts" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.Initializer"></a>

```typescript
import { aadb2CDirectory } from '@cdktf/provider-azurerm'

const aadb2CDirectoryTimeouts: aadb2CDirectory.Aadb2CDirectoryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#create Aadb2CDirectory#create}. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#delete Aadb2CDirectory#delete}. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#read Aadb2CDirectory#read}. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#update Aadb2CDirectory#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#create Aadb2CDirectory#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#delete Aadb2CDirectory#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#read Aadb2CDirectory#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/aadb2c_directory#update Aadb2CDirectory#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Aadb2CDirectoryTimeoutsOutputReference <a name="Aadb2CDirectoryTimeoutsOutputReference" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.Initializer"></a>

```typescript
import { aadb2CDirectory } from '@cdktf/provider-azurerm'

new aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts">Aadb2CDirectoryTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Aadb2CDirectoryTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aadb2CDirectory.Aadb2CDirectoryTimeouts">Aadb2CDirectoryTimeouts</a> | cdktf.IResolvable

---



