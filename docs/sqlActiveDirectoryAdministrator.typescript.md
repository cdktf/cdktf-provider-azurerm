# `sqlActiveDirectoryAdministrator` Submodule <a name="`sqlActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlActiveDirectoryAdministrator <a name="SqlActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator azurerm_sql_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer"></a>

```typescript
import { sqlActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

new sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator(scope: Construct, id: string, config: SqlActiveDirectoryAdministratorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig">SqlActiveDirectoryAdministratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig">SqlActiveDirectoryAdministratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetAzureadAuthenticationOnly">resetAzureadAuthenticationOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.putTimeouts"></a>

```typescript
public putTimeouts(value: SqlActiveDirectoryAdministratorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a>

---

##### `resetAzureadAuthenticationOnly` <a name="resetAzureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetAzureadAuthenticationOnly"></a>

```typescript
public resetAzureadAuthenticationOnly(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isConstruct"></a>

```typescript
import { sqlActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformElement"></a>

```typescript
import { sqlActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformResource"></a>

```typescript
import { sqlActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport"></a>

```typescript
import { sqlActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SqlActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlActiveDirectoryAdministrator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlActiveDirectoryAdministrator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqlActiveDirectoryAdministrator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference">SqlActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput">azureadAuthenticationOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.loginInput">loginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnly">azureadAuthenticationOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.login">login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeouts"></a>

```typescript
public readonly timeouts: SqlActiveDirectoryAdministratorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference">SqlActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `azureadAuthenticationOnlyInput`<sup>Optional</sup> <a name="azureadAuthenticationOnlyInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput"></a>

```typescript
public readonly azureadAuthenticationOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.loginInput"></a>

```typescript
public readonly loginInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SqlActiveDirectoryAdministratorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a>

---

##### `azureadAuthenticationOnly`<sup>Required</sup> <a name="azureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnly"></a>

```typescript
public readonly azureadAuthenticationOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlActiveDirectoryAdministratorConfig <a name="SqlActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.Initializer"></a>

```typescript
import { sqlActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

const sqlActiveDirectoryAdministratorConfig: sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.login">login</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#login SqlActiveDirectoryAdministrator#login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#object_id SqlActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#resource_group_name SqlActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#server_name SqlActiveDirectoryAdministrator#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#tenant_id SqlActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly">azureadAuthenticationOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#azuread_authentication_only SqlActiveDirectoryAdministrator#azuread_authentication_only}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#id SqlActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#login SqlActiveDirectoryAdministrator#login}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#object_id SqlActiveDirectoryAdministrator#object_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#resource_group_name SqlActiveDirectoryAdministrator#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#server_name SqlActiveDirectoryAdministrator#server_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#tenant_id SqlActiveDirectoryAdministrator#tenant_id}.

---

##### `azureadAuthenticationOnly`<sup>Optional</sup> <a name="azureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly"></a>

```typescript
public readonly azureadAuthenticationOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#azuread_authentication_only SqlActiveDirectoryAdministrator#azuread_authentication_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#id SqlActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SqlActiveDirectoryAdministratorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#timeouts SqlActiveDirectoryAdministrator#timeouts}

---

### SqlActiveDirectoryAdministratorTimeouts <a name="SqlActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.Initializer"></a>

```typescript
import { sqlActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

const sqlActiveDirectoryAdministratorTimeouts: sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#create SqlActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#delete SqlActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#read SqlActiveDirectoryAdministrator#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#update SqlActiveDirectoryAdministrator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#create SqlActiveDirectoryAdministrator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#delete SqlActiveDirectoryAdministrator#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#read SqlActiveDirectoryAdministrator#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sql_active_directory_administrator#update SqlActiveDirectoryAdministrator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlActiveDirectoryAdministratorTimeoutsOutputReference <a name="SqlActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```typescript
import { sqlActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

new sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlActiveDirectoryAdministratorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a>

---



