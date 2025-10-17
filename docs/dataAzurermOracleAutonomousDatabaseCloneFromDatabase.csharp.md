# `dataAzurermOracleAutonomousDatabaseCloneFromDatabase` Submodule <a name="`dataAzurermOracleAutonomousDatabaseCloneFromDatabase` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromDatabase <a name="DataAzurermOracleAutonomousDatabaseCloneFromDatabase" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database azurerm_oracle_autonomous_database_clone_from_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseCloneFromDatabase(Construct Scope, string Id, DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAutonomousDatabaseCloneFromDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAutonomousDatabaseCloneFromDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAutonomousDatabaseCloneFromDatabase.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAutonomousDatabaseCloneFromDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermOracleAutonomousDatabaseCloneFromDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermOracleAutonomousDatabaseCloneFromDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAutonomousDatabaseCloneFromDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.actualUsedDataStorageSizeInTb">ActualUsedDataStorageSizeInTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.allocatedStorageSizeInTb">AllocatedStorageSizeInTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddresses">AllowedIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabled">AutoScalingForStorageEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.connectionStrings">ConnectionStrings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.customerContacts">CustomerContacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkload">DatabaseWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTb">DataStorageSizeInTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.failedDataRecoveryInSeconds">FailedDataRecoveryInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.inMemoryAreaInGb">InMemoryAreaInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.localAdgAutoFailoverMaxDataLossLimitInSeconds">LocalAdgAutoFailoverMaxDataLossLimitInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.localDataGuardEnabled">LocalDataGuardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.longTermBackupSchedule">LongTermBackupSchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.memoryPerOracleComputeUnitInGb">MemoryPerOracleComputeUnitInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSet">NationalCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.nextLongTermBackupTimestamp">NextLongTermBackupTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.peerDatabaseIds">PeerDatabaseIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.preview">Preview</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.previewVersionWithServiceTermsAccepted">PreviewVersionWithServiceTermsAccepted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.privateEndpointUrl">PrivateEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.provisionableCpus">ProvisionableCpus</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.reconnectCloneEnabled">ReconnectCloneEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.refreshableClone">RefreshableClone</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.refreshableStatus">RefreshableStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.remoteDataGuardEnabled">RemoteDataGuardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.serviceConsoleUrl">ServiceConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.sqlWebDeveloperUrl">SqlWebDeveloperUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.supportedRegionsToCloneTo">SupportedRegionsToCloneTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeCreatedInUtc">TimeCreatedInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeDataGuardRoleChangedInUtc">TimeDataGuardRoleChangedInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeDeletionOfFreeAutonomousDatabaseInUtc">TimeDeletionOfFreeAutonomousDatabaseInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeLocalDataGuardEnabledInUtc">TimeLocalDataGuardEnabledInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeMaintenanceBeginInUtc">TimeMaintenanceBeginInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeMaintenanceEndInUtc">TimeMaintenanceEndInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastFailoverInUtc">TimeOfLastFailoverInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastRefreshInUtc">TimeOfLastRefreshInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastRefreshPointInUtc">TimeOfLastRefreshPointInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastSwitchoverInUtc">TimeOfLastSwitchoverInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeReclamationOfFreeAutonomousDatabaseInUtc">TimeReclamationOfFreeAutonomousDatabaseInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeUntilReconnectInUtc">TimeUntilReconnectInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.usedDataStorageSizeInGb">UsedDataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.usedDataStorageSizeInTb">UsedDataStorageSizeInTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ActualUsedDataStorageSizeInTb`<sup>Required</sup> <a name="ActualUsedDataStorageSizeInTb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.actualUsedDataStorageSizeInTb"></a>

```csharp
public double ActualUsedDataStorageSizeInTb { get; }
```

- *Type:* double

---

##### `AllocatedStorageSizeInTb`<sup>Required</sup> <a name="AllocatedStorageSizeInTb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.allocatedStorageSizeInTb"></a>

```csharp
public double AllocatedStorageSizeInTb { get; }
```

- *Type:* double

---

##### `AllowedIpAddresses`<sup>Required</sup> <a name="AllowedIpAddresses" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddresses"></a>

```csharp
public string[] AllowedIpAddresses { get; }
```

- *Type:* string[]

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabled"></a>

```csharp
public IResolvable AutoScalingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutoScalingForStorageEnabled`<sup>Required</sup> <a name="AutoScalingForStorageEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabled"></a>

```csharp
public IResolvable AutoScalingForStorageEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.availableUpgradeVersions"></a>

```csharp
public string[] AvailableUpgradeVersions { get; }
```

- *Type:* string[]

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDays"></a>

```csharp
public double BackupRetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.connectionStrings"></a>

```csharp
public string[] ConnectionStrings { get; }
```

- *Type:* string[]

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.customerContacts"></a>

```csharp
public string[] CustomerContacts { get; }
```

- *Type:* string[]

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `DatabaseWorkload`<sup>Required</sup> <a name="DatabaseWorkload" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkload"></a>

```csharp
public string DatabaseWorkload { get; }
```

- *Type:* string

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DataStorageSizeInTb`<sup>Required</sup> <a name="DataStorageSizeInTb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTb"></a>

```csharp
public double DataStorageSizeInTb { get; }
```

- *Type:* double

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FailedDataRecoveryInSeconds`<sup>Required</sup> <a name="FailedDataRecoveryInSeconds" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.failedDataRecoveryInSeconds"></a>

```csharp
public double FailedDataRecoveryInSeconds { get; }
```

- *Type:* double

---

##### `InMemoryAreaInGb`<sup>Required</sup> <a name="InMemoryAreaInGb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.inMemoryAreaInGb"></a>

```csharp
public double InMemoryAreaInGb { get; }
```

- *Type:* double

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `LocalAdgAutoFailoverMaxDataLossLimitInSeconds`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimitInSeconds" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.localAdgAutoFailoverMaxDataLossLimitInSeconds"></a>

```csharp
public double LocalAdgAutoFailoverMaxDataLossLimitInSeconds { get; }
```

- *Type:* double

---

##### `LocalDataGuardEnabled`<sup>Required</sup> <a name="LocalDataGuardEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.localDataGuardEnabled"></a>

```csharp
public IResolvable LocalDataGuardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `LongTermBackupSchedule`<sup>Required</sup> <a name="LongTermBackupSchedule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.longTermBackupSchedule"></a>

```csharp
public DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList LongTermBackupSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList</a>

---

##### `MemoryPerOracleComputeUnitInGb`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.memoryPerOracleComputeUnitInGb"></a>

```csharp
public double MemoryPerOracleComputeUnitInGb { get; }
```

- *Type:* double

---

##### `MtlsConnectionRequired`<sup>Required</sup> <a name="MtlsConnectionRequired" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequired"></a>

```csharp
public IResolvable MtlsConnectionRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NationalCharacterSet`<sup>Required</sup> <a name="NationalCharacterSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSet"></a>

```csharp
public string NationalCharacterSet { get; }
```

- *Type:* string

---

##### `NextLongTermBackupTimestamp`<sup>Required</sup> <a name="NextLongTermBackupTimestamp" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.nextLongTermBackupTimestamp"></a>

```csharp
public string NextLongTermBackupTimestamp { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `PeerDatabaseIds`<sup>Required</sup> <a name="PeerDatabaseIds" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.peerDatabaseIds"></a>

```csharp
public string[] PeerDatabaseIds { get; }
```

- *Type:* string[]

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.preview"></a>

```csharp
public IResolvable Preview { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PreviewVersionWithServiceTermsAccepted`<sup>Required</sup> <a name="PreviewVersionWithServiceTermsAccepted" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.previewVersionWithServiceTermsAccepted"></a>

```csharp
public IResolvable PreviewVersionWithServiceTermsAccepted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.privateEndpointIp"></a>

```csharp
public string PrivateEndpointIp { get; }
```

- *Type:* string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.privateEndpointLabel"></a>

```csharp
public string PrivateEndpointLabel { get; }
```

- *Type:* string

---

##### `PrivateEndpointUrl`<sup>Required</sup> <a name="PrivateEndpointUrl" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.privateEndpointUrl"></a>

```csharp
public string PrivateEndpointUrl { get; }
```

- *Type:* string

---

##### `ProvisionableCpus`<sup>Required</sup> <a name="ProvisionableCpus" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.provisionableCpus"></a>

```csharp
public double[] ProvisionableCpus { get; }
```

- *Type:* double[]

---

##### `ReconnectCloneEnabled`<sup>Required</sup> <a name="ReconnectCloneEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.reconnectCloneEnabled"></a>

```csharp
public IResolvable ReconnectCloneEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RefreshableClone`<sup>Required</sup> <a name="RefreshableClone" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.refreshableClone"></a>

```csharp
public IResolvable RefreshableClone { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RefreshableStatus`<sup>Required</sup> <a name="RefreshableStatus" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.refreshableStatus"></a>

```csharp
public string RefreshableStatus { get; }
```

- *Type:* string

---

##### `RemoteDataGuardEnabled`<sup>Required</sup> <a name="RemoteDataGuardEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.remoteDataGuardEnabled"></a>

```csharp
public IResolvable RemoteDataGuardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ServiceConsoleUrl`<sup>Required</sup> <a name="ServiceConsoleUrl" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.serviceConsoleUrl"></a>

```csharp
public string ServiceConsoleUrl { get; }
```

- *Type:* string

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseId"></a>

```csharp
public string SourceAutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `SqlWebDeveloperUrl`<sup>Required</sup> <a name="SqlWebDeveloperUrl" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.sqlWebDeveloperUrl"></a>

```csharp
public string SqlWebDeveloperUrl { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SupportedRegionsToCloneTo`<sup>Required</sup> <a name="SupportedRegionsToCloneTo" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.supportedRegionsToCloneTo"></a>

```csharp
public string[] SupportedRegionsToCloneTo { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreatedInUtc`<sup>Required</sup> <a name="TimeCreatedInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeCreatedInUtc"></a>

```csharp
public string TimeCreatedInUtc { get; }
```

- *Type:* string

---

##### `TimeDataGuardRoleChangedInUtc`<sup>Required</sup> <a name="TimeDataGuardRoleChangedInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeDataGuardRoleChangedInUtc"></a>

```csharp
public string TimeDataGuardRoleChangedInUtc { get; }
```

- *Type:* string

---

##### `TimeDeletionOfFreeAutonomousDatabaseInUtc`<sup>Required</sup> <a name="TimeDeletionOfFreeAutonomousDatabaseInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeDeletionOfFreeAutonomousDatabaseInUtc"></a>

```csharp
public string TimeDeletionOfFreeAutonomousDatabaseInUtc { get; }
```

- *Type:* string

---

##### `TimeLocalDataGuardEnabledInUtc`<sup>Required</sup> <a name="TimeLocalDataGuardEnabledInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeLocalDataGuardEnabledInUtc"></a>

```csharp
public string TimeLocalDataGuardEnabledInUtc { get; }
```

- *Type:* string

---

##### `TimeMaintenanceBeginInUtc`<sup>Required</sup> <a name="TimeMaintenanceBeginInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeMaintenanceBeginInUtc"></a>

```csharp
public string TimeMaintenanceBeginInUtc { get; }
```

- *Type:* string

---

##### `TimeMaintenanceEndInUtc`<sup>Required</sup> <a name="TimeMaintenanceEndInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeMaintenanceEndInUtc"></a>

```csharp
public string TimeMaintenanceEndInUtc { get; }
```

- *Type:* string

---

##### `TimeOfLastFailoverInUtc`<sup>Required</sup> <a name="TimeOfLastFailoverInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastFailoverInUtc"></a>

```csharp
public string TimeOfLastFailoverInUtc { get; }
```

- *Type:* string

---

##### `TimeOfLastRefreshInUtc`<sup>Required</sup> <a name="TimeOfLastRefreshInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastRefreshInUtc"></a>

```csharp
public string TimeOfLastRefreshInUtc { get; }
```

- *Type:* string

---

##### `TimeOfLastRefreshPointInUtc`<sup>Required</sup> <a name="TimeOfLastRefreshPointInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastRefreshPointInUtc"></a>

```csharp
public string TimeOfLastRefreshPointInUtc { get; }
```

- *Type:* string

---

##### `TimeOfLastSwitchoverInUtc`<sup>Required</sup> <a name="TimeOfLastSwitchoverInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeOfLastSwitchoverInUtc"></a>

```csharp
public string TimeOfLastSwitchoverInUtc { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeouts"></a>

```csharp
public DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference</a>

---

##### `TimeReclamationOfFreeAutonomousDatabaseInUtc`<sup>Required</sup> <a name="TimeReclamationOfFreeAutonomousDatabaseInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeReclamationOfFreeAutonomousDatabaseInUtc"></a>

```csharp
public string TimeReclamationOfFreeAutonomousDatabaseInUtc { get; }
```

- *Type:* string

---

##### `TimeUntilReconnectInUtc`<sup>Required</sup> <a name="TimeUntilReconnectInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeUntilReconnectInUtc"></a>

```csharp
public string TimeUntilReconnectInUtc { get; }
```

- *Type:* string

---

##### `UsedDataStorageSizeInGb`<sup>Required</sup> <a name="UsedDataStorageSizeInGb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.usedDataStorageSizeInGb"></a>

```csharp
public double UsedDataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `UsedDataStorageSizeInTb`<sup>Required</sup> <a name="UsedDataStorageSizeInTb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.usedDataStorageSizeInTb"></a>

```csharp
public double UsedDataStorageSizeInTb { get; }
```

- *Type:* double

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig <a name="DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string Id = null,
    DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#name DataAzurermOracleAutonomousDatabaseCloneFromDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#id DataAzurermOracleAutonomousDatabaseCloneFromDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#name DataAzurermOracleAutonomousDatabaseCloneFromDatabase#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromDatabase#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#id DataAzurermOracleAutonomousDatabaseCloneFromDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig.property.timeouts"></a>

```csharp
public DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#timeouts DataAzurermOracleAutonomousDatabaseCloneFromDatabase#timeouts}

---

### DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule <a name="DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule {

};
```


### DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts <a name="DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#read DataAzurermOracleAutonomousDatabaseCloneFromDatabase#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#read DataAzurermOracleAutonomousDatabaseCloneFromDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList <a name="DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.get"></a>

```csharp
private DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference <a name="DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">RepeatCadence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInUtc">TimeOfBackupInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RepeatCadence`<sup>Required</sup> <a name="RepeatCadence" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```csharp
public string RepeatCadence { get; }
```

- *Type:* string

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```csharp
public double RetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `TimeOfBackupInUtc`<sup>Required</sup> <a name="TimeOfBackupInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInUtc"></a>

```csharp
public string TimeOfBackupInUtc { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule</a>

---


### DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference <a name="DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromDatabase.DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---



