# `dataAzurermOracleAutonomousDatabaseBackups` Submodule <a name="`dataAzurermOracleAutonomousDatabaseBackups` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAutonomousDatabaseBackups <a name="DataAzurermOracleAutonomousDatabaseBackups" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups azurerm_oracle_autonomous_database_backups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseBackups(Construct Scope, string Id, DataAzurermOracleAutonomousDatabaseBackupsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig">DataAzurermOracleAutonomousDatabaseBackupsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig">DataAzurermOracleAutonomousDatabaseBackupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermOracleAutonomousDatabaseBackupsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts">DataAzurermOracleAutonomousDatabaseBackupsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseBackups resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAutonomousDatabaseBackups.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAutonomousDatabaseBackups.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAutonomousDatabaseBackups.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAutonomousDatabaseBackups.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseBackups resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermOracleAutonomousDatabaseBackups to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermOracleAutonomousDatabaseBackups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAutonomousDatabaseBackups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.autonomousDatabaseBackups">AutonomousDatabaseBackups</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList">DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts">DataAzurermOracleAutonomousDatabaseBackupsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutonomousDatabaseBackups`<sup>Required</sup> <a name="AutonomousDatabaseBackups" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.autonomousDatabaseBackups"></a>

```csharp
public DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList AutonomousDatabaseBackups { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList">DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.timeouts"></a>

```csharp
public DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference</a>

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.autonomousDatabaseIdInput"></a>

```csharp
public string AutonomousDatabaseIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermOracleAutonomousDatabaseBackupsTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts">DataAzurermOracleAutonomousDatabaseBackupsTimeouts</a>

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups <a name="DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups {

};
```


### DataAzurermOracleAutonomousDatabaseBackupsConfig <a name="DataAzurermOracleAutonomousDatabaseBackupsConfig" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseBackupsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AutonomousDatabaseId,
    string Id = null,
    DataAzurermOracleAutonomousDatabaseBackupsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#autonomous_database_id DataAzurermOracleAutonomousDatabaseBackups#autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#id DataAzurermOracleAutonomousDatabaseBackups#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts">DataAzurermOracleAutonomousDatabaseBackupsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#autonomous_database_id DataAzurermOracleAutonomousDatabaseBackups#autonomous_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#id DataAzurermOracleAutonomousDatabaseBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.timeouts"></a>

```csharp
public DataAzurermOracleAutonomousDatabaseBackupsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts">DataAzurermOracleAutonomousDatabaseBackupsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#timeouts DataAzurermOracleAutonomousDatabaseBackups#timeouts}

---

### DataAzurermOracleAutonomousDatabaseBackupsTimeouts <a name="DataAzurermOracleAutonomousDatabaseBackupsTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseBackupsTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#read DataAzurermOracleAutonomousDatabaseBackups#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#read DataAzurermOracleAutonomousDatabaseBackups#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList <a name="DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.get"></a>

```csharp
private DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference <a name="DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.automatic">Automatic</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.autonomousDatabaseBackupOcid">AutonomousDatabaseBackupOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.autonomousDatabaseOcid">AutonomousDatabaseOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.databaseBackupSizeInTbs">DatabaseBackupSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.provisioningState">ProvisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.restorable">Restorable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeAvailableTil">TimeAvailableTil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups">DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.automatic"></a>

```csharp
public IResolvable Automatic { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutonomousDatabaseBackupOcid`<sup>Required</sup> <a name="AutonomousDatabaseBackupOcid" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.autonomousDatabaseBackupOcid"></a>

```csharp
public string AutonomousDatabaseBackupOcid { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseOcid`<sup>Required</sup> <a name="AutonomousDatabaseOcid" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.autonomousDatabaseOcid"></a>

```csharp
public string AutonomousDatabaseOcid { get; }
```

- *Type:* string

---

##### `DatabaseBackupSizeInTbs`<sup>Required</sup> <a name="DatabaseBackupSizeInTbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.databaseBackupSizeInTbs"></a>

```csharp
public double DatabaseBackupSizeInTbs { get; }
```

- *Type:* double

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ProvisioningState`<sup>Required</sup> <a name="ProvisioningState" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.provisioningState"></a>

```csharp
public string ProvisioningState { get; }
```

- *Type:* string

---

##### `Restorable`<sup>Required</sup> <a name="Restorable" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.restorable"></a>

```csharp
public IResolvable Restorable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.retentionPeriodInDays"></a>

```csharp
public double RetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `TimeAvailableTil`<sup>Required</sup> <a name="TimeAvailableTil" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeAvailableTil"></a>

```csharp
public string TimeAvailableTil { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups">DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups</a>

---


### DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference <a name="DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts">DataAzurermOracleAutonomousDatabaseBackupsTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermOracleAutonomousDatabaseBackupsTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts">DataAzurermOracleAutonomousDatabaseBackupsTimeouts</a>

---



