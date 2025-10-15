# `dataAzurermOracleAutonomousDatabaseCloneFromBackup` Submodule <a name="`dataAzurermOracleAutonomousDatabaseCloneFromBackup` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromBackup <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackup" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_clone_from_backup azurerm_oracle_autonomous_database_clone_from_backup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCloneFromBackup } from '@cdktf/provider-azurerm'

new dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup(scope: Construct, id: string, config: DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig">DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig">DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseCloneFromBackup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isConstruct"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCloneFromBackup } from '@cdktf/provider-azurerm'

dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformElement"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCloneFromBackup } from '@cdktf/provider-azurerm'

dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformDataSource"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCloneFromBackup } from '@cdktf/provider-azurerm'

dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCloneFromBackup } from '@cdktf/provider-azurerm'

dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseCloneFromBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermOracleAutonomousDatabaseCloneFromBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermOracleAutonomousDatabaseCloneFromBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAutonomousDatabaseCloneFromBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.actualUsedDataStorageSizeInTb">actualUsedDataStorageSizeInTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allocatedStorageSizeInTb">allocatedStorageSizeInTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddresses">allowedIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabled">autoScalingForStorageEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.availableUpgradeVersions">availableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeModel">computeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.connectionStrings">connectionStrings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.customerContacts">customerContacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseWorkload">databaseWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTb">dataStorageSizeInTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.failedDataRecoveryInSeconds">failedDataRecoveryInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.inMemoryAreaInGb">inMemoryAreaInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localAdgAutoFailoverMaxDataLossLimitInSeconds">localAdgAutoFailoverMaxDataLossLimitInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localDataGuardEnabled">localDataGuardEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.longTermBackupSchedule">longTermBackupSchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.memoryPerOracleComputeUnitInGb">memoryPerOracleComputeUnitInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSet">nationalCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nextLongTermBackupTimestamp">nextLongTermBackupTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.peerDatabaseIds">peerDatabaseIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.preview">preview</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.previewVersionWithServiceTermsAccepted">previewVersionWithServiceTermsAccepted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointUrl">privateEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provisionableCpus">provisionableCpus</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.remoteDataGuardEnabled">remoteDataGuardEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.serviceConsoleUrl">serviceConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sqlWebDeveloperUrl">sqlWebDeveloperUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.supportedRegionsToCloneTo">supportedRegionsToCloneTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeCreatedInUtc">timeCreatedInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDataGuardRoleChangedInUtc">timeDataGuardRoleChangedInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDeletionOfFreeAutonomousDatabaseInUtc">timeDeletionOfFreeAutonomousDatabaseInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeLocalDataGuardEnabledInUtc">timeLocalDataGuardEnabledInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceBeginInUtc">timeMaintenanceBeginInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceEndInUtc">timeMaintenanceEndInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastFailoverInUtc">timeOfLastFailoverInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshInUtc">timeOfLastRefreshInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshPointInUtc">timeOfLastRefreshPointInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastSwitchoverInUtc">timeOfLastSwitchoverInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeReclamationOfFreeAutonomousDatabaseInUtc">timeReclamationOfFreeAutonomousDatabaseInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInGb">usedDataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInTb">usedDataStorageSizeInTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `actualUsedDataStorageSizeInTb`<sup>Required</sup> <a name="actualUsedDataStorageSizeInTb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.actualUsedDataStorageSizeInTb"></a>

```typescript
public readonly actualUsedDataStorageSizeInTb: number;
```

- *Type:* number

---

##### `allocatedStorageSizeInTb`<sup>Required</sup> <a name="allocatedStorageSizeInTb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allocatedStorageSizeInTb"></a>

```typescript
public readonly allocatedStorageSizeInTb: number;
```

- *Type:* number

---

##### `allowedIpAddresses`<sup>Required</sup> <a name="allowedIpAddresses" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddresses"></a>

```typescript
public readonly allowedIpAddresses: string[];
```

- *Type:* string[]

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabled"></a>

```typescript
public readonly autoScalingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `autoScalingForStorageEnabled`<sup>Required</sup> <a name="autoScalingForStorageEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabled"></a>

```typescript
public readonly autoScalingForStorageEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `availableUpgradeVersions`<sup>Required</sup> <a name="availableUpgradeVersions" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.availableUpgradeVersions"></a>

```typescript
public readonly availableUpgradeVersions: string[];
```

- *Type:* string[]

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDays"></a>

```typescript
public readonly backupRetentionPeriodInDays: number;
```

- *Type:* number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: string[];
```

- *Type:* string[]

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.customerContacts"></a>

```typescript
public readonly customerContacts: string[];
```

- *Type:* string[]

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `databaseWorkload`<sup>Required</sup> <a name="databaseWorkload" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseWorkload"></a>

```typescript
public readonly databaseWorkload: string;
```

- *Type:* string

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `dataStorageSizeInTb`<sup>Required</sup> <a name="dataStorageSizeInTb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTb"></a>

```typescript
public readonly dataStorageSizeInTb: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `failedDataRecoveryInSeconds`<sup>Required</sup> <a name="failedDataRecoveryInSeconds" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.failedDataRecoveryInSeconds"></a>

```typescript
public readonly failedDataRecoveryInSeconds: number;
```

- *Type:* number

---

##### `inMemoryAreaInGb`<sup>Required</sup> <a name="inMemoryAreaInGb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.inMemoryAreaInGb"></a>

```typescript
public readonly inMemoryAreaInGb: number;
```

- *Type:* number

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `localAdgAutoFailoverMaxDataLossLimitInSeconds`<sup>Required</sup> <a name="localAdgAutoFailoverMaxDataLossLimitInSeconds" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localAdgAutoFailoverMaxDataLossLimitInSeconds"></a>

```typescript
public readonly localAdgAutoFailoverMaxDataLossLimitInSeconds: number;
```

- *Type:* number

---

##### `localDataGuardEnabled`<sup>Required</sup> <a name="localDataGuardEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localDataGuardEnabled"></a>

```typescript
public readonly localDataGuardEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `longTermBackupSchedule`<sup>Required</sup> <a name="longTermBackupSchedule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.longTermBackupSchedule"></a>

```typescript
public readonly longTermBackupSchedule: DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList</a>

---

##### `memoryPerOracleComputeUnitInGb`<sup>Required</sup> <a name="memoryPerOracleComputeUnitInGb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.memoryPerOracleComputeUnitInGb"></a>

```typescript
public readonly memoryPerOracleComputeUnitInGb: number;
```

- *Type:* number

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequired"></a>

```typescript
public readonly mtlsConnectionRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nationalCharacterSet`<sup>Required</sup> <a name="nationalCharacterSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSet"></a>

```typescript
public readonly nationalCharacterSet: string;
```

- *Type:* string

---

##### `nextLongTermBackupTimestamp`<sup>Required</sup> <a name="nextLongTermBackupTimestamp" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nextLongTermBackupTimestamp"></a>

```typescript
public readonly nextLongTermBackupTimestamp: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `peerDatabaseIds`<sup>Required</sup> <a name="peerDatabaseIds" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.peerDatabaseIds"></a>

```typescript
public readonly peerDatabaseIds: string[];
```

- *Type:* string[]

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.preview"></a>

```typescript
public readonly preview: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `previewVersionWithServiceTermsAccepted`<sup>Required</sup> <a name="previewVersionWithServiceTermsAccepted" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.previewVersionWithServiceTermsAccepted"></a>

```typescript
public readonly previewVersionWithServiceTermsAccepted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

---

##### `privateEndpointLabel`<sup>Required</sup> <a name="privateEndpointLabel" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointLabel"></a>

```typescript
public readonly privateEndpointLabel: string;
```

- *Type:* string

---

##### `privateEndpointUrl`<sup>Required</sup> <a name="privateEndpointUrl" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointUrl"></a>

```typescript
public readonly privateEndpointUrl: string;
```

- *Type:* string

---

##### `provisionableCpus`<sup>Required</sup> <a name="provisionableCpus" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provisionableCpus"></a>

```typescript
public readonly provisionableCpus: number[];
```

- *Type:* number[]

---

##### `remoteDataGuardEnabled`<sup>Required</sup> <a name="remoteDataGuardEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.remoteDataGuardEnabled"></a>

```typescript
public readonly remoteDataGuardEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serviceConsoleUrl`<sup>Required</sup> <a name="serviceConsoleUrl" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.serviceConsoleUrl"></a>

```typescript
public readonly serviceConsoleUrl: string;
```

- *Type:* string

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseId"></a>

```typescript
public readonly sourceAutonomousDatabaseId: string;
```

- *Type:* string

---

##### `sqlWebDeveloperUrl`<sup>Required</sup> <a name="sqlWebDeveloperUrl" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sqlWebDeveloperUrl"></a>

```typescript
public readonly sqlWebDeveloperUrl: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `supportedRegionsToCloneTo`<sup>Required</sup> <a name="supportedRegionsToCloneTo" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.supportedRegionsToCloneTo"></a>

```typescript
public readonly supportedRegionsToCloneTo: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreatedInUtc`<sup>Required</sup> <a name="timeCreatedInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeCreatedInUtc"></a>

```typescript
public readonly timeCreatedInUtc: string;
```

- *Type:* string

---

##### `timeDataGuardRoleChangedInUtc`<sup>Required</sup> <a name="timeDataGuardRoleChangedInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDataGuardRoleChangedInUtc"></a>

```typescript
public readonly timeDataGuardRoleChangedInUtc: string;
```

- *Type:* string

---

##### `timeDeletionOfFreeAutonomousDatabaseInUtc`<sup>Required</sup> <a name="timeDeletionOfFreeAutonomousDatabaseInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDeletionOfFreeAutonomousDatabaseInUtc"></a>

```typescript
public readonly timeDeletionOfFreeAutonomousDatabaseInUtc: string;
```

- *Type:* string

---

##### `timeLocalDataGuardEnabledInUtc`<sup>Required</sup> <a name="timeLocalDataGuardEnabledInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeLocalDataGuardEnabledInUtc"></a>

```typescript
public readonly timeLocalDataGuardEnabledInUtc: string;
```

- *Type:* string

---

##### `timeMaintenanceBeginInUtc`<sup>Required</sup> <a name="timeMaintenanceBeginInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceBeginInUtc"></a>

```typescript
public readonly timeMaintenanceBeginInUtc: string;
```

- *Type:* string

---

##### `timeMaintenanceEndInUtc`<sup>Required</sup> <a name="timeMaintenanceEndInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceEndInUtc"></a>

```typescript
public readonly timeMaintenanceEndInUtc: string;
```

- *Type:* string

---

##### `timeOfLastFailoverInUtc`<sup>Required</sup> <a name="timeOfLastFailoverInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastFailoverInUtc"></a>

```typescript
public readonly timeOfLastFailoverInUtc: string;
```

- *Type:* string

---

##### `timeOfLastRefreshInUtc`<sup>Required</sup> <a name="timeOfLastRefreshInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshInUtc"></a>

```typescript
public readonly timeOfLastRefreshInUtc: string;
```

- *Type:* string

---

##### `timeOfLastRefreshPointInUtc`<sup>Required</sup> <a name="timeOfLastRefreshPointInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshPointInUtc"></a>

```typescript
public readonly timeOfLastRefreshPointInUtc: string;
```

- *Type:* string

---

##### `timeOfLastSwitchoverInUtc`<sup>Required</sup> <a name="timeOfLastSwitchoverInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastSwitchoverInUtc"></a>

```typescript
public readonly timeOfLastSwitchoverInUtc: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference</a>

---

##### `timeReclamationOfFreeAutonomousDatabaseInUtc`<sup>Required</sup> <a name="timeReclamationOfFreeAutonomousDatabaseInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeReclamationOfFreeAutonomousDatabaseInUtc"></a>

```typescript
public readonly timeReclamationOfFreeAutonomousDatabaseInUtc: string;
```

- *Type:* string

---

##### `usedDataStorageSizeInGb`<sup>Required</sup> <a name="usedDataStorageSizeInGb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInGb"></a>

```typescript
public readonly usedDataStorageSizeInGb: number;
```

- *Type:* number

---

##### `usedDataStorageSizeInTb`<sup>Required</sup> <a name="usedDataStorageSizeInTb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInTb"></a>

```typescript
public readonly usedDataStorageSizeInTb: number;
```

- *Type:* number

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.Initializer"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCloneFromBackup } from '@cdktf/provider-azurerm'

const dataAzurermOracleAutonomousDatabaseCloneFromBackupConfig: dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#name DataAzurermOracleAutonomousDatabaseCloneFromBackup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromBackup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#id DataAzurermOracleAutonomousDatabaseCloneFromBackup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#name DataAzurermOracleAutonomousDatabaseCloneFromBackup#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromBackup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#id DataAzurermOracleAutonomousDatabaseCloneFromBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#timeouts DataAzurermOracleAutonomousDatabaseCloneFromBackup#timeouts}

---

### DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule.Initializer"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCloneFromBackup } from '@cdktf/provider-azurerm'

const dataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule: dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule = { ... }
```


### DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts.Initializer"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCloneFromBackup } from '@cdktf/provider-azurerm'

const dataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts: dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#read DataAzurermOracleAutonomousDatabaseCloneFromBackup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#read DataAzurermOracleAutonomousDatabaseCloneFromBackup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCloneFromBackup } from '@cdktf/provider-azurerm'

new dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.get"></a>

```typescript
public get(index: number): DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCloneFromBackup } from '@cdktf/provider-azurerm'

new dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.repeatCadence">repeatCadence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.timeOfBackupInUtc">timeOfBackupInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `repeatCadence`<sup>Required</sup> <a name="repeatCadence" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```typescript
public readonly repeatCadence: string;
```

- *Type:* string

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

---

##### `timeOfBackupInUtc`<sup>Required</sup> <a name="timeOfBackupInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.timeOfBackupInUtc"></a>

```typescript
public readonly timeOfBackupInUtc: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule</a>

---


### DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCloneFromBackup } from '@cdktf/provider-azurerm'

new dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a>

---



