# `dataAzurermOracleAutonomousDatabaseBackup` Submodule <a name="`dataAzurermOracleAutonomousDatabaseBackup` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAutonomousDatabaseBackup <a name="DataAzurermOracleAutonomousDatabaseBackup" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_backup azurerm_oracle_autonomous_database_backup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.Initializer"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseBackup } from '@cdktf/provider-azurerm'

new dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup(scope: Construct, id: string, config: DataAzurermOracleAutonomousDatabaseBackupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig">DataAzurermOracleAutonomousDatabaseBackupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig">DataAzurermOracleAutonomousDatabaseBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermOracleAutonomousDatabaseBackupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeouts">DataAzurermOracleAutonomousDatabaseBackupTimeouts</a>

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseBackup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.isConstruct"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseBackup } from '@cdktf/provider-azurerm'

dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.isTerraformElement"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseBackup } from '@cdktf/provider-azurerm'

dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.isTerraformDataSource"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseBackup } from '@cdktf/provider-azurerm'

dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.generateConfigForImport"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseBackup } from '@cdktf/provider-azurerm'

dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermOracleAutonomousDatabaseBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermOracleAutonomousDatabaseBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAutonomousDatabaseBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.automatic">automatic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.autonomousDatabaseBackupOcid">autonomousDatabaseBackupOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.autonomousDatabaseOcid">autonomousDatabaseOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.databaseBackupSizeInTbs">databaseBackupSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.provisioningState">provisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.restorable">restorable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.timeAvailableTil">timeAvailableTil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.autonomousDatabaseIdInput">autonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeouts">DataAzurermOracleAutonomousDatabaseBackupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.automatic"></a>

```typescript
public readonly automatic: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `autonomousDatabaseBackupOcid`<sup>Required</sup> <a name="autonomousDatabaseBackupOcid" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.autonomousDatabaseBackupOcid"></a>

```typescript
public readonly autonomousDatabaseBackupOcid: string;
```

- *Type:* string

---

##### `autonomousDatabaseOcid`<sup>Required</sup> <a name="autonomousDatabaseOcid" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.autonomousDatabaseOcid"></a>

```typescript
public readonly autonomousDatabaseOcid: string;
```

- *Type:* string

---

##### `databaseBackupSizeInTbs`<sup>Required</sup> <a name="databaseBackupSizeInTbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.databaseBackupSizeInTbs"></a>

```typescript
public readonly databaseBackupSizeInTbs: number;
```

- *Type:* number

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `provisioningState`<sup>Required</sup> <a name="provisioningState" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.provisioningState"></a>

```typescript
public readonly provisioningState: string;
```

- *Type:* string

---

##### `restorable`<sup>Required</sup> <a name="restorable" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.restorable"></a>

```typescript
public readonly restorable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

---

##### `timeAvailableTil`<sup>Required</sup> <a name="timeAvailableTil" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.timeAvailableTil"></a>

```typescript
public readonly timeAvailableTil: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference</a>

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `autonomousDatabaseIdInput`<sup>Optional</sup> <a name="autonomousDatabaseIdInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.autonomousDatabaseIdInput"></a>

```typescript
public readonly autonomousDatabaseIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermOracleAutonomousDatabaseBackupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeouts">DataAzurermOracleAutonomousDatabaseBackupTimeouts</a>

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAutonomousDatabaseBackupConfig <a name="DataAzurermOracleAutonomousDatabaseBackupConfig" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.Initializer"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseBackup } from '@cdktf/provider-azurerm'

const dataAzurermOracleAutonomousDatabaseBackupConfig: dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_backup#autonomous_database_id DataAzurermOracleAutonomousDatabaseBackup#autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_backup#name DataAzurermOracleAutonomousDatabaseBackup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeouts">DataAzurermOracleAutonomousDatabaseBackupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_backup#autonomous_database_id DataAzurermOracleAutonomousDatabaseBackup#autonomous_database_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_backup#name DataAzurermOracleAutonomousDatabaseBackup#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermOracleAutonomousDatabaseBackupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeouts">DataAzurermOracleAutonomousDatabaseBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_backup#timeouts DataAzurermOracleAutonomousDatabaseBackup#timeouts}

---

### DataAzurermOracleAutonomousDatabaseBackupTimeouts <a name="DataAzurermOracleAutonomousDatabaseBackupTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeouts.Initializer"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseBackup } from '@cdktf/provider-azurerm'

const dataAzurermOracleAutonomousDatabaseBackupTimeouts: dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_backup#read DataAzurermOracleAutonomousDatabaseBackup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/oracle_autonomous_database_backup#read DataAzurermOracleAutonomousDatabaseBackup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference <a name="DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseBackup } from '@cdktf/provider-azurerm'

new dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeouts">DataAzurermOracleAutonomousDatabaseBackupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermOracleAutonomousDatabaseBackupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackup.DataAzurermOracleAutonomousDatabaseBackupTimeouts">DataAzurermOracleAutonomousDatabaseBackupTimeouts</a>

---



