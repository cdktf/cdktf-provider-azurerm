# `dataProtectionBackupInstancePostgresql` Submodule <a name="`dataProtectionBackupInstancePostgresql` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupInstancePostgresql <a name="DataProtectionBackupInstancePostgresql" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql azurerm_data_protection_backup_instance_postgresql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer"></a>

```typescript
import { dataProtectionBackupInstancePostgresql } from '@cdktf/provider-azurerm'

new dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql(scope: Construct, id: string, config: DataProtectionBackupInstancePostgresqlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig">DataProtectionBackupInstancePostgresqlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig">DataProtectionBackupInstancePostgresqlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetDatabaseCredentialKeyVaultSecretId">resetDatabaseCredentialKeyVaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.putTimeouts"></a>

```typescript
public putTimeouts(value: DataProtectionBackupInstancePostgresqlTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a>

---

##### `resetDatabaseCredentialKeyVaultSecretId` <a name="resetDatabaseCredentialKeyVaultSecretId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetDatabaseCredentialKeyVaultSecretId"></a>

```typescript
public resetDatabaseCredentialKeyVaultSecretId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataProtectionBackupInstancePostgresql resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isConstruct"></a>

```typescript
import { dataProtectionBackupInstancePostgresql } from '@cdktf/provider-azurerm'

dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformElement"></a>

```typescript
import { dataProtectionBackupInstancePostgresql } from '@cdktf/provider-azurerm'

dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformResource"></a>

```typescript
import { dataProtectionBackupInstancePostgresql } from '@cdktf/provider-azurerm'

dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport"></a>

```typescript
import { dataProtectionBackupInstancePostgresql } from '@cdktf/provider-azurerm'

dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataProtectionBackupInstancePostgresql resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupInstancePostgresql to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupInstancePostgresql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupInstancePostgresql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference">DataProtectionBackupInstancePostgresqlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.backupPolicyIdInput">backupPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseCredentialKeyVaultSecretIdInput">databaseCredentialKeyVaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.backupPolicyId">backupPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseCredentialKeyVaultSecretId">databaseCredentialKeyVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.timeouts"></a>

```typescript
public readonly timeouts: DataProtectionBackupInstancePostgresqlTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference">DataProtectionBackupInstancePostgresqlTimeoutsOutputReference</a>

---

##### `backupPolicyIdInput`<sup>Optional</sup> <a name="backupPolicyIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.backupPolicyIdInput"></a>

```typescript
public readonly backupPolicyIdInput: string;
```

- *Type:* string

---

##### `databaseCredentialKeyVaultSecretIdInput`<sup>Optional</sup> <a name="databaseCredentialKeyVaultSecretIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseCredentialKeyVaultSecretIdInput"></a>

```typescript
public readonly databaseCredentialKeyVaultSecretIdInput: string;
```

- *Type:* string

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataProtectionBackupInstancePostgresqlTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a>

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.backupPolicyId"></a>

```typescript
public readonly backupPolicyId: string;
```

- *Type:* string

---

##### `databaseCredentialKeyVaultSecretId`<sup>Required</sup> <a name="databaseCredentialKeyVaultSecretId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseCredentialKeyVaultSecretId"></a>

```typescript
public readonly databaseCredentialKeyVaultSecretId: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresql.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupInstancePostgresqlConfig <a name="DataProtectionBackupInstancePostgresqlConfig" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.Initializer"></a>

```typescript
import { dataProtectionBackupInstancePostgresql } from '@cdktf/provider-azurerm'

const dataProtectionBackupInstancePostgresqlConfig: dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.backupPolicyId">backupPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#backup_policy_id DataProtectionBackupInstancePostgresql#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.databaseId">databaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#database_id DataProtectionBackupInstancePostgresql#database_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#location DataProtectionBackupInstancePostgresql#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#name DataProtectionBackupInstancePostgresql#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#vault_id DataProtectionBackupInstancePostgresql#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.databaseCredentialKeyVaultSecretId">databaseCredentialKeyVaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#database_credential_key_vault_secret_id DataProtectionBackupInstancePostgresql#database_credential_key_vault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#id DataProtectionBackupInstancePostgresql#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.backupPolicyId"></a>

```typescript
public readonly backupPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#backup_policy_id DataProtectionBackupInstancePostgresql#backup_policy_id}.

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#database_id DataProtectionBackupInstancePostgresql#database_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#location DataProtectionBackupInstancePostgresql#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#name DataProtectionBackupInstancePostgresql#name}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#vault_id DataProtectionBackupInstancePostgresql#vault_id}.

---

##### `databaseCredentialKeyVaultSecretId`<sup>Optional</sup> <a name="databaseCredentialKeyVaultSecretId" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.databaseCredentialKeyVaultSecretId"></a>

```typescript
public readonly databaseCredentialKeyVaultSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#database_credential_key_vault_secret_id DataProtectionBackupInstancePostgresql#database_credential_key_vault_secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#id DataProtectionBackupInstancePostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataProtectionBackupInstancePostgresqlTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#timeouts DataProtectionBackupInstancePostgresql#timeouts}

---

### DataProtectionBackupInstancePostgresqlTimeouts <a name="DataProtectionBackupInstancePostgresqlTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.Initializer"></a>

```typescript
import { dataProtectionBackupInstancePostgresql } from '@cdktf/provider-azurerm'

const dataProtectionBackupInstancePostgresqlTimeouts: dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#create DataProtectionBackupInstancePostgresql#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#delete DataProtectionBackupInstancePostgresql#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#read DataProtectionBackupInstancePostgresql#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#update DataProtectionBackupInstancePostgresql#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#create DataProtectionBackupInstancePostgresql#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#delete DataProtectionBackupInstancePostgresql#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#read DataProtectionBackupInstancePostgresql#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_instance_postgresql#update DataProtectionBackupInstancePostgresql#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupInstancePostgresqlTimeoutsOutputReference <a name="DataProtectionBackupInstancePostgresqlTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupInstancePostgresql } from '@cdktf/provider-azurerm'

new dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupInstancePostgresqlTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstancePostgresql.DataProtectionBackupInstancePostgresqlTimeouts">DataProtectionBackupInstancePostgresqlTimeouts</a>

---



