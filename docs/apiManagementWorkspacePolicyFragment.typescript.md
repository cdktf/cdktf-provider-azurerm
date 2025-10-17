# `apiManagementWorkspacePolicyFragment` Submodule <a name="`apiManagementWorkspacePolicyFragment` Submodule" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementWorkspacePolicyFragment <a name="ApiManagementWorkspacePolicyFragment" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment azurerm_api_management_workspace_policy_fragment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer"></a>

```typescript
import { apiManagementWorkspacePolicyFragment } from '@cdktf/provider-azurerm'

new apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment(scope: Construct, id: string, config: ApiManagementWorkspacePolicyFragmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig">ApiManagementWorkspacePolicyFragmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig">ApiManagementWorkspacePolicyFragmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetXmlFormat">resetXmlFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementWorkspacePolicyFragmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetXmlFormat` <a name="resetXmlFormat" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetXmlFormat"></a>

```typescript
public resetXmlFormat(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementWorkspacePolicyFragment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isConstruct"></a>

```typescript
import { apiManagementWorkspacePolicyFragment } from '@cdktf/provider-azurerm'

apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformElement"></a>

```typescript
import { apiManagementWorkspacePolicyFragment } from '@cdktf/provider-azurerm'

apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformResource"></a>

```typescript
import { apiManagementWorkspacePolicyFragment } from '@cdktf/provider-azurerm'

apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport"></a>

```typescript
import { apiManagementWorkspacePolicyFragment } from '@cdktf/provider-azurerm'

apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiManagementWorkspacePolicyFragment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementWorkspacePolicyFragment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementWorkspacePolicyFragment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementWorkspacePolicyFragment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference">ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.apiManagementWorkspaceIdInput">apiManagementWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlContentInput">xmlContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlFormatInput">xmlFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.apiManagementWorkspaceId">apiManagementWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlContent">xmlContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlFormat">xmlFormat</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference">ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference</a>

---

##### `apiManagementWorkspaceIdInput`<sup>Optional</sup> <a name="apiManagementWorkspaceIdInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.apiManagementWorkspaceIdInput"></a>

```typescript
public readonly apiManagementWorkspaceIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiManagementWorkspacePolicyFragmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a>

---

##### `xmlContentInput`<sup>Optional</sup> <a name="xmlContentInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlContentInput"></a>

```typescript
public readonly xmlContentInput: string;
```

- *Type:* string

---

##### `xmlFormatInput`<sup>Optional</sup> <a name="xmlFormatInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlFormatInput"></a>

```typescript
public readonly xmlFormatInput: string;
```

- *Type:* string

---

##### `apiManagementWorkspaceId`<sup>Required</sup> <a name="apiManagementWorkspaceId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.apiManagementWorkspaceId"></a>

```typescript
public readonly apiManagementWorkspaceId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `xmlContent`<sup>Required</sup> <a name="xmlContent" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlContent"></a>

```typescript
public readonly xmlContent: string;
```

- *Type:* string

---

##### `xmlFormat`<sup>Required</sup> <a name="xmlFormat" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlFormat"></a>

```typescript
public readonly xmlFormat: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementWorkspacePolicyFragmentConfig <a name="ApiManagementWorkspacePolicyFragmentConfig" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.Initializer"></a>

```typescript
import { apiManagementWorkspacePolicyFragment } from '@cdktf/provider-azurerm'

const apiManagementWorkspacePolicyFragmentConfig: apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.apiManagementWorkspaceId">apiManagementWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#api_management_workspace_id ApiManagementWorkspacePolicyFragment#api_management_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#name ApiManagementWorkspacePolicyFragment#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.xmlContent">xmlContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_content ApiManagementWorkspacePolicyFragment#xml_content}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#description ApiManagementWorkspacePolicyFragment#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#id ApiManagementWorkspacePolicyFragment#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.xmlFormat">xmlFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_format ApiManagementWorkspacePolicyFragment#xml_format}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiManagementWorkspaceId`<sup>Required</sup> <a name="apiManagementWorkspaceId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.apiManagementWorkspaceId"></a>

```typescript
public readonly apiManagementWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#api_management_workspace_id ApiManagementWorkspacePolicyFragment#api_management_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#name ApiManagementWorkspacePolicyFragment#name}.

---

##### `xmlContent`<sup>Required</sup> <a name="xmlContent" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.xmlContent"></a>

```typescript
public readonly xmlContent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_content ApiManagementWorkspacePolicyFragment#xml_content}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#description ApiManagementWorkspacePolicyFragment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#id ApiManagementWorkspacePolicyFragment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementWorkspacePolicyFragmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#timeouts ApiManagementWorkspacePolicyFragment#timeouts}

---

##### `xmlFormat`<sup>Optional</sup> <a name="xmlFormat" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.xmlFormat"></a>

```typescript
public readonly xmlFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_format ApiManagementWorkspacePolicyFragment#xml_format}.

---

### ApiManagementWorkspacePolicyFragmentTimeouts <a name="ApiManagementWorkspacePolicyFragmentTimeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.Initializer"></a>

```typescript
import { apiManagementWorkspacePolicyFragment } from '@cdktf/provider-azurerm'

const apiManagementWorkspacePolicyFragmentTimeouts: apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#create ApiManagementWorkspacePolicyFragment#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#delete ApiManagementWorkspacePolicyFragment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#read ApiManagementWorkspacePolicyFragment#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#update ApiManagementWorkspacePolicyFragment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#create ApiManagementWorkspacePolicyFragment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#delete ApiManagementWorkspacePolicyFragment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#read ApiManagementWorkspacePolicyFragment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#update ApiManagementWorkspacePolicyFragment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference <a name="ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagementWorkspacePolicyFragment } from '@cdktf/provider-azurerm'

new apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementWorkspacePolicyFragmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a>

---



