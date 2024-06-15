# `sqlManagedInstanceActiveDirectoryAdministrator` Submodule <a name="`sqlManagedInstanceActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlManagedInstanceActiveDirectoryAdministrator <a name="SqlManagedInstanceActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator azurerm_sql_managed_instance_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer"></a>

```typescript
import { sqlManagedInstanceActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

new sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator(scope: Construct, id: string, config: SqlManagedInstanceActiveDirectoryAdministratorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig">SqlManagedInstanceActiveDirectoryAdministratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig">SqlManagedInstanceActiveDirectoryAdministratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetAzureadAuthenticationOnly">resetAzureadAuthenticationOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.putTimeouts"></a>

```typescript
public putTimeouts(value: SqlManagedInstanceActiveDirectoryAdministratorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a>

---

##### `resetAzureadAuthenticationOnly` <a name="resetAzureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetAzureadAuthenticationOnly"></a>

```typescript
public resetAzureadAuthenticationOnly(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlManagedInstanceActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isConstruct"></a>

```typescript
import { sqlManagedInstanceActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformElement"></a>

```typescript
import { sqlManagedInstanceActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformResource"></a>

```typescript
import { sqlManagedInstanceActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.generateConfigForImport"></a>

```typescript
import { sqlManagedInstanceActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SqlManagedInstanceActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlManagedInstanceActiveDirectoryAdministrator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlManagedInstanceActiveDirectoryAdministrator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqlManagedInstanceActiveDirectoryAdministrator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference">SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput">azureadAuthenticationOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.loginInput">loginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceNameInput">managedInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnly">azureadAuthenticationOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.login">login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceName">managedInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.timeouts"></a>

```typescript
public readonly timeouts: SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference">SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `azureadAuthenticationOnlyInput`<sup>Optional</sup> <a name="azureadAuthenticationOnlyInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput"></a>

```typescript
public readonly azureadAuthenticationOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.loginInput"></a>

```typescript
public readonly loginInput: string;
```

- *Type:* string

---

##### `managedInstanceNameInput`<sup>Optional</sup> <a name="managedInstanceNameInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceNameInput"></a>

```typescript
public readonly managedInstanceNameInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SqlManagedInstanceActiveDirectoryAdministratorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a>

---

##### `azureadAuthenticationOnly`<sup>Required</sup> <a name="azureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnly"></a>

```typescript
public readonly azureadAuthenticationOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

---

##### `managedInstanceName`<sup>Required</sup> <a name="managedInstanceName" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceName"></a>

```typescript
public readonly managedInstanceName: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlManagedInstanceActiveDirectoryAdministratorConfig <a name="SqlManagedInstanceActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.Initializer"></a>

```typescript
import { sqlManagedInstanceActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

const sqlManagedInstanceActiveDirectoryAdministratorConfig: sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.login">login</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#login SqlManagedInstanceActiveDirectoryAdministrator#login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.managedInstanceName">managedInstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#managed_instance_name SqlManagedInstanceActiveDirectoryAdministrator#managed_instance_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#object_id SqlManagedInstanceActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#resource_group_name SqlManagedInstanceActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#tenant_id SqlManagedInstanceActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly">azureadAuthenticationOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#azuread_authentication_only SqlManagedInstanceActiveDirectoryAdministrator#azuread_authentication_only}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#id SqlManagedInstanceActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#login SqlManagedInstanceActiveDirectoryAdministrator#login}.

---

##### `managedInstanceName`<sup>Required</sup> <a name="managedInstanceName" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.managedInstanceName"></a>

```typescript
public readonly managedInstanceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#managed_instance_name SqlManagedInstanceActiveDirectoryAdministrator#managed_instance_name}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#object_id SqlManagedInstanceActiveDirectoryAdministrator#object_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#resource_group_name SqlManagedInstanceActiveDirectoryAdministrator#resource_group_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#tenant_id SqlManagedInstanceActiveDirectoryAdministrator#tenant_id}.

---

##### `azureadAuthenticationOnly`<sup>Optional</sup> <a name="azureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly"></a>

```typescript
public readonly azureadAuthenticationOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#azuread_authentication_only SqlManagedInstanceActiveDirectoryAdministrator#azuread_authentication_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#id SqlManagedInstanceActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SqlManagedInstanceActiveDirectoryAdministratorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#timeouts SqlManagedInstanceActiveDirectoryAdministrator#timeouts}

---

### SqlManagedInstanceActiveDirectoryAdministratorTimeouts <a name="SqlManagedInstanceActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.Initializer"></a>

```typescript
import { sqlManagedInstanceActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

const sqlManagedInstanceActiveDirectoryAdministratorTimeouts: sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#create SqlManagedInstanceActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#delete SqlManagedInstanceActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#read SqlManagedInstanceActiveDirectoryAdministrator#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#update SqlManagedInstanceActiveDirectoryAdministrator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#create SqlManagedInstanceActiveDirectoryAdministrator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#delete SqlManagedInstanceActiveDirectoryAdministrator#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#read SqlManagedInstanceActiveDirectoryAdministrator#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sql_managed_instance_active_directory_administrator#update SqlManagedInstanceActiveDirectoryAdministrator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference <a name="SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```typescript
import { sqlManagedInstanceActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

new sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlManagedInstanceActiveDirectoryAdministratorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a>

---



