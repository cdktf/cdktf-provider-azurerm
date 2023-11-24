# `azurerm_postgresql_flexible_server_active_directory_administrator`

Refer to the Terraform Registory for docs: [`azurerm_postgresql_flexible_server_active_directory_administrator`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator).

# `postgresqlFlexibleServerActiveDirectoryAdministrator` Submodule <a name="`postgresqlFlexibleServerActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlFlexibleServerActiveDirectoryAdministrator <a name="PostgresqlFlexibleServerActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator azurerm_postgresql_flexible_server_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer"></a>

```typescript
import { postgresqlFlexibleServerActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

new postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator(scope: Construct, id: string, config: PostgresqlFlexibleServerActiveDirectoryAdministratorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig">PostgresqlFlexibleServerActiveDirectoryAdministratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig">PostgresqlFlexibleServerActiveDirectoryAdministratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.putTimeouts"></a>

```typescript
public putTimeouts(value: PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PostgresqlFlexibleServerActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isConstruct"></a>

```typescript
import { postgresqlFlexibleServerActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement"></a>

```typescript
import { postgresqlFlexibleServerActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource"></a>

```typescript
import { postgresqlFlexibleServerActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport"></a>

```typescript
import { postgresqlFlexibleServerActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PostgresqlFlexibleServerActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresqlFlexibleServerActiveDirectoryAdministrator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresqlFlexibleServerActiveDirectoryAdministrator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PostgresqlFlexibleServerActiveDirectoryAdministrator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalNameInput">principalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalName">principalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeouts"></a>

```typescript
public readonly timeouts: PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `principalNameInput`<sup>Optional</sup> <a name="principalNameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalNameInput"></a>

```typescript
public readonly principalNameInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalName"></a>

```typescript
public readonly principalName: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlFlexibleServerActiveDirectoryAdministratorConfig <a name="PostgresqlFlexibleServerActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.Initializer"></a>

```typescript
import { postgresqlFlexibleServerActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

const postgresqlFlexibleServerActiveDirectoryAdministratorConfig: postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#object_id PostgresqlFlexibleServerActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalName">principalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_name PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_type PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#resource_group_name PostgresqlFlexibleServerActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#server_name PostgresqlFlexibleServerActiveDirectoryAdministrator#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#tenant_id PostgresqlFlexibleServerActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#id PostgresqlFlexibleServerActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#object_id PostgresqlFlexibleServerActiveDirectoryAdministrator#object_id}.

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalName"></a>

```typescript
public readonly principalName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_name PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_name}.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_type PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#resource_group_name PostgresqlFlexibleServerActiveDirectoryAdministrator#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#server_name PostgresqlFlexibleServerActiveDirectoryAdministrator#server_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#tenant_id PostgresqlFlexibleServerActiveDirectoryAdministrator#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#id PostgresqlFlexibleServerActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#timeouts PostgresqlFlexibleServerActiveDirectoryAdministrator#timeouts}

---

### PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts <a name="PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.Initializer"></a>

```typescript
import { postgresqlFlexibleServerActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

const postgresqlFlexibleServerActiveDirectoryAdministratorTimeouts: postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#create PostgresqlFlexibleServerActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#delete PostgresqlFlexibleServerActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#read PostgresqlFlexibleServerActiveDirectoryAdministrator#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#create PostgresqlFlexibleServerActiveDirectoryAdministrator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#delete PostgresqlFlexibleServerActiveDirectoryAdministrator#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/postgresql_flexible_server_active_directory_administrator#read PostgresqlFlexibleServerActiveDirectoryAdministrator#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference <a name="PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```typescript
import { postgresqlFlexibleServerActiveDirectoryAdministrator } from '@cdktf/provider-azurerm'

new postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

---



