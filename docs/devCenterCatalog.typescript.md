# `devCenterCatalog` Submodule <a name="`devCenterCatalog` Submodule" id="@cdktf/provider-azurerm.devCenterCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevCenterCatalog <a name="DevCenterCatalog" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog azurerm_dev_center_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer"></a>

```typescript
import { devCenterCatalog } from '@cdktf/provider-azurerm'

new devCenterCatalog.DevCenterCatalog(scope: Construct, id: string, config: DevCenterCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig">DevCenterCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig">DevCenterCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogAdogit">putCatalogAdogit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogGithub">putCatalogGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetCatalogAdogit">resetCatalogAdogit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetCatalogGithub">resetCatalogGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCatalogAdogit` <a name="putCatalogAdogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogAdogit"></a>

```typescript
public putCatalogAdogit(value: DevCenterCatalogCatalogAdogit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogAdogit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a>

---

##### `putCatalogGithub` <a name="putCatalogGithub" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogGithub"></a>

```typescript
public putCatalogGithub(value: DevCenterCatalogCatalogGithub): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogGithub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putTimeouts"></a>

```typescript
public putTimeouts(value: DevCenterCatalogTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a>

---

##### `resetCatalogAdogit` <a name="resetCatalogAdogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetCatalogAdogit"></a>

```typescript
public resetCatalogAdogit(): void
```

##### `resetCatalogGithub` <a name="resetCatalogGithub" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetCatalogGithub"></a>

```typescript
public resetCatalogGithub(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevCenterCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isConstruct"></a>

```typescript
import { devCenterCatalog } from '@cdktf/provider-azurerm'

devCenterCatalog.DevCenterCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformElement"></a>

```typescript
import { devCenterCatalog } from '@cdktf/provider-azurerm'

devCenterCatalog.DevCenterCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformResource"></a>

```typescript
import { devCenterCatalog } from '@cdktf/provider-azurerm'

devCenterCatalog.DevCenterCatalog.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport"></a>

```typescript
import { devCenterCatalog } from '@cdktf/provider-azurerm'

devCenterCatalog.DevCenterCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DevCenterCatalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevCenterCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevCenterCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevCenterCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogAdogit">catalogAdogit</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference">DevCenterCatalogCatalogAdogitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogGithub">catalogGithub</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference">DevCenterCatalogCatalogGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference">DevCenterCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogAdogitInput">catalogAdogitInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogGithubInput">catalogGithubInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.devCenterIdInput">devCenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.devCenterId">devCenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `catalogAdogit`<sup>Required</sup> <a name="catalogAdogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogAdogit"></a>

```typescript
public readonly catalogAdogit: DevCenterCatalogCatalogAdogitOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference">DevCenterCatalogCatalogAdogitOutputReference</a>

---

##### `catalogGithub`<sup>Required</sup> <a name="catalogGithub" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogGithub"></a>

```typescript
public readonly catalogGithub: DevCenterCatalogCatalogGithubOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference">DevCenterCatalogCatalogGithubOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.timeouts"></a>

```typescript
public readonly timeouts: DevCenterCatalogTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference">DevCenterCatalogTimeoutsOutputReference</a>

---

##### `catalogAdogitInput`<sup>Optional</sup> <a name="catalogAdogitInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogAdogitInput"></a>

```typescript
public readonly catalogAdogitInput: DevCenterCatalogCatalogAdogit;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a>

---

##### `catalogGithubInput`<sup>Optional</sup> <a name="catalogGithubInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogGithubInput"></a>

```typescript
public readonly catalogGithubInput: DevCenterCatalogCatalogGithub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a>

---

##### `devCenterIdInput`<sup>Optional</sup> <a name="devCenterIdInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.devCenterIdInput"></a>

```typescript
public readonly devCenterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DevCenterCatalogTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a>

---

##### `devCenterId`<sup>Required</sup> <a name="devCenterId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.devCenterId"></a>

```typescript
public readonly devCenterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevCenterCatalogCatalogAdogit <a name="DevCenterCatalogCatalogAdogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.Initializer"></a>

```typescript
import { devCenterCatalog } from '@cdktf/provider-azurerm'

const devCenterCatalogCatalogAdogit: devCenterCatalog.DevCenterCatalogCatalogAdogit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#branch DevCenterCatalog#branch}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.keyVaultKeyUrl">keyVaultKeyUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#key_vault_key_url DevCenterCatalog#key_vault_key_url}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#path DevCenterCatalog#path}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#uri DevCenterCatalog#uri}. |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#branch DevCenterCatalog#branch}.

---

##### `keyVaultKeyUrl`<sup>Required</sup> <a name="keyVaultKeyUrl" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.keyVaultKeyUrl"></a>

```typescript
public readonly keyVaultKeyUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#key_vault_key_url DevCenterCatalog#key_vault_key_url}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#path DevCenterCatalog#path}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#uri DevCenterCatalog#uri}.

---

### DevCenterCatalogCatalogGithub <a name="DevCenterCatalogCatalogGithub" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.Initializer"></a>

```typescript
import { devCenterCatalog } from '@cdktf/provider-azurerm'

const devCenterCatalogCatalogGithub: devCenterCatalog.DevCenterCatalogCatalogGithub = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#branch DevCenterCatalog#branch}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.keyVaultKeyUrl">keyVaultKeyUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#key_vault_key_url DevCenterCatalog#key_vault_key_url}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#path DevCenterCatalog#path}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#uri DevCenterCatalog#uri}. |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#branch DevCenterCatalog#branch}.

---

##### `keyVaultKeyUrl`<sup>Required</sup> <a name="keyVaultKeyUrl" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.keyVaultKeyUrl"></a>

```typescript
public readonly keyVaultKeyUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#key_vault_key_url DevCenterCatalog#key_vault_key_url}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#path DevCenterCatalog#path}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#uri DevCenterCatalog#uri}.

---

### DevCenterCatalogConfig <a name="DevCenterCatalogConfig" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.Initializer"></a>

```typescript
import { devCenterCatalog } from '@cdktf/provider-azurerm'

const devCenterCatalogConfig: devCenterCatalog.DevCenterCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.devCenterId">devCenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#dev_center_id DevCenterCatalog#dev_center_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#name DevCenterCatalog#name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#resource_group_name DevCenterCatalog#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.catalogAdogit">catalogAdogit</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a></code> | catalog_adogit block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.catalogGithub">catalogGithub</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a></code> | catalog_github block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#id DevCenterCatalog#id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `devCenterId`<sup>Required</sup> <a name="devCenterId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.devCenterId"></a>

```typescript
public readonly devCenterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#dev_center_id DevCenterCatalog#dev_center_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#name DevCenterCatalog#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#resource_group_name DevCenterCatalog#resource_group_name}.

---

##### `catalogAdogit`<sup>Optional</sup> <a name="catalogAdogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.catalogAdogit"></a>

```typescript
public readonly catalogAdogit: DevCenterCatalogCatalogAdogit;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a>

catalog_adogit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#catalog_adogit DevCenterCatalog#catalog_adogit}

---

##### `catalogGithub`<sup>Optional</sup> <a name="catalogGithub" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.catalogGithub"></a>

```typescript
public readonly catalogGithub: DevCenterCatalogCatalogGithub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a>

catalog_github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#catalog_github DevCenterCatalog#catalog_github}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#id DevCenterCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DevCenterCatalogTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#timeouts DevCenterCatalog#timeouts}

---

### DevCenterCatalogTimeouts <a name="DevCenterCatalogTimeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.Initializer"></a>

```typescript
import { devCenterCatalog } from '@cdktf/provider-azurerm'

const devCenterCatalogTimeouts: devCenterCatalog.DevCenterCatalogTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#create DevCenterCatalog#create}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#delete DevCenterCatalog#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#read DevCenterCatalog#read}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#update DevCenterCatalog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#create DevCenterCatalog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#delete DevCenterCatalog#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#read DevCenterCatalog#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_catalog#update DevCenterCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevCenterCatalogCatalogAdogitOutputReference <a name="DevCenterCatalogCatalogAdogitOutputReference" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.Initializer"></a>

```typescript
import { devCenterCatalog } from '@cdktf/provider-azurerm'

new devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.keyVaultKeyUrlInput">keyVaultKeyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.keyVaultKeyUrl">keyVaultKeyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `keyVaultKeyUrlInput`<sup>Optional</sup> <a name="keyVaultKeyUrlInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.keyVaultKeyUrlInput"></a>

```typescript
public readonly keyVaultKeyUrlInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `keyVaultKeyUrl`<sup>Required</sup> <a name="keyVaultKeyUrl" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.keyVaultKeyUrl"></a>

```typescript
public readonly keyVaultKeyUrl: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevCenterCatalogCatalogAdogit;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a>

---


### DevCenterCatalogCatalogGithubOutputReference <a name="DevCenterCatalogCatalogGithubOutputReference" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.Initializer"></a>

```typescript
import { devCenterCatalog } from '@cdktf/provider-azurerm'

new devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.keyVaultKeyUrlInput">keyVaultKeyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.keyVaultKeyUrl">keyVaultKeyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `keyVaultKeyUrlInput`<sup>Optional</sup> <a name="keyVaultKeyUrlInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.keyVaultKeyUrlInput"></a>

```typescript
public readonly keyVaultKeyUrlInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `keyVaultKeyUrl`<sup>Required</sup> <a name="keyVaultKeyUrl" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.keyVaultKeyUrl"></a>

```typescript
public readonly keyVaultKeyUrl: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevCenterCatalogCatalogGithub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a>

---


### DevCenterCatalogTimeoutsOutputReference <a name="DevCenterCatalogTimeoutsOutputReference" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.Initializer"></a>

```typescript
import { devCenterCatalog } from '@cdktf/provider-azurerm'

new devCenterCatalog.DevCenterCatalogTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevCenterCatalogTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a>

---



