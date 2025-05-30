# `dataAzurermOracleAutonomousDatabase` Submodule <a name="`dataAzurermOracleAutonomousDatabase` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAutonomousDatabase <a name="DataAzurermOracleAutonomousDatabase" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_autonomous_database azurerm_oracle_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabase(Construct Scope, string Id, DataAzurermOracleAutonomousDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig">DataAzurermOracleAutonomousDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig">DataAzurermOracleAutonomousDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermOracleAutonomousDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAutonomousDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAutonomousDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAutonomousDatabase.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOracleAutonomousDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermOracleAutonomousDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermOracleAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">ActualUsedDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.allocatedStorageSizeInTbs">AllocatedStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.allowedIps">AllowedIps</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autoScalingForStorageEnabled">AutoScalingForStorageEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.failedDataRecoveryInSeconds">FailedDataRecoveryInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.inMemoryAreaInGbs">InMemoryAreaInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">LocalAdgAutoFailoverMaxDataLossLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.localDataGuardEnabled">LocalDataGuardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs">MemoryPerOracleComputeUnitInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nationalCharacterSet">NationalCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nextLongTermBackupTimeStamp">NextLongTermBackupTimeStamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.peerDbId">PeerDbId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.peerDbIds">PeerDbIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.preview">Preview</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.previewVersionWithServiceTermsAccepted">PreviewVersionWithServiceTermsAccepted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpoint">PrivateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.provisionableCpus">ProvisionableCpus</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.remoteDataGuardEnabled">RemoteDataGuardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.serviceConsoleUrl">ServiceConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.sqlWebDeveloperUrl">SqlWebDeveloperUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.supportedRegionsToCloneTo">SupportedRegionsToCloneTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeDataGuardRoleChanged">TimeDataGuardRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase">TimeDeletionOfFreeAutonomousDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeLocalDataGuardEnabledOn">TimeLocalDataGuardEnabledOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeMaintenanceBegin">TimeMaintenanceBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeMaintenanceEnd">TimeMaintenanceEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastFailover">TimeOfLastFailover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastRefresh">TimeOfLastRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastRefreshPoint">TimeOfLastRefreshPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastSwitchover">TimeOfLastSwitchover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase">TimeReclamationOfFreeAutonomousDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.usedDataStorageSizeInGbs">UsedDataStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.usedDataStorageSizeInTbs">UsedDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ActualUsedDataStorageSizeInTbs`<sup>Required</sup> <a name="ActualUsedDataStorageSizeInTbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```csharp
public double ActualUsedDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AllocatedStorageSizeInTbs`<sup>Required</sup> <a name="AllocatedStorageSizeInTbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```csharp
public double AllocatedStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AllowedIps`<sup>Required</sup> <a name="AllowedIps" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.allowedIps"></a>

```csharp
public double[] AllowedIps { get; }
```

- *Type:* double[]

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autoScalingEnabled"></a>

```csharp
public IResolvable AutoScalingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutoScalingForStorageEnabled`<sup>Required</sup> <a name="AutoScalingForStorageEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autoScalingForStorageEnabled"></a>

```csharp
public IResolvable AutoScalingForStorageEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.availableUpgradeVersions"></a>

```csharp
public string[] AvailableUpgradeVersions { get; }
```

- *Type:* string[]

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```csharp
public double BackupRetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dataStorageSizeInGbs"></a>

```csharp
public double DataStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```csharp
public double DataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dbNodeStorageSizeInGbs"></a>

```csharp
public double DbNodeStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FailedDataRecoveryInSeconds`<sup>Required</sup> <a name="FailedDataRecoveryInSeconds" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.failedDataRecoveryInSeconds"></a>

```csharp
public double FailedDataRecoveryInSeconds { get; }
```

- *Type:* double

---

##### `InMemoryAreaInGbs`<sup>Required</sup> <a name="InMemoryAreaInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.inMemoryAreaInGbs"></a>

```csharp
public double InMemoryAreaInGbs { get; }
```

- *Type:* double

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LocalAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimit" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```csharp
public double LocalAdgAutoFailoverMaxDataLossLimit { get; }
```

- *Type:* double

---

##### `LocalDataGuardEnabled`<sup>Required</sup> <a name="LocalDataGuardEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.localDataGuardEnabled"></a>

```csharp
public IResolvable LocalDataGuardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MemoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs"></a>

```csharp
public double MemoryPerOracleComputeUnitInGbs { get; }
```

- *Type:* double

---

##### `MtlsConnectionRequired`<sup>Required</sup> <a name="MtlsConnectionRequired" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.mtlsConnectionRequired"></a>

```csharp
public IResolvable MtlsConnectionRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NationalCharacterSet`<sup>Required</sup> <a name="NationalCharacterSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nationalCharacterSet"></a>

```csharp
public string NationalCharacterSet { get; }
```

- *Type:* string

---

##### `NextLongTermBackupTimeStamp`<sup>Required</sup> <a name="NextLongTermBackupTimeStamp" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nextLongTermBackupTimeStamp"></a>

```csharp
public string NextLongTermBackupTimeStamp { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `PeerDbId`<sup>Required</sup> <a name="PeerDbId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.peerDbId"></a>

```csharp
public string PeerDbId { get; }
```

- *Type:* string

---

##### `PeerDbIds`<sup>Required</sup> <a name="PeerDbIds" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.peerDbIds"></a>

```csharp
public string[] PeerDbIds { get; }
```

- *Type:* string[]

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.preview"></a>

```csharp
public IResolvable Preview { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PreviewVersionWithServiceTermsAccepted`<sup>Required</sup> <a name="PreviewVersionWithServiceTermsAccepted" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.previewVersionWithServiceTermsAccepted"></a>

```csharp
public IResolvable PreviewVersionWithServiceTermsAccepted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpoint"></a>

```csharp
public string PrivateEndpoint { get; }
```

- *Type:* string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpointIp"></a>

```csharp
public string PrivateEndpointIp { get; }
```

- *Type:* string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpointLabel"></a>

```csharp
public string PrivateEndpointLabel { get; }
```

- *Type:* string

---

##### `ProvisionableCpus`<sup>Required</sup> <a name="ProvisionableCpus" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.provisionableCpus"></a>

```csharp
public double[] ProvisionableCpus { get; }
```

- *Type:* double[]

---

##### `RemoteDataGuardEnabled`<sup>Required</sup> <a name="RemoteDataGuardEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.remoteDataGuardEnabled"></a>

```csharp
public IResolvable RemoteDataGuardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ServiceConsoleUrl`<sup>Required</sup> <a name="ServiceConsoleUrl" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.serviceConsoleUrl"></a>

```csharp
public string ServiceConsoleUrl { get; }
```

- *Type:* string

---

##### `SqlWebDeveloperUrl`<sup>Required</sup> <a name="SqlWebDeveloperUrl" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.sqlWebDeveloperUrl"></a>

```csharp
public string SqlWebDeveloperUrl { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SupportedRegionsToCloneTo`<sup>Required</sup> <a name="SupportedRegionsToCloneTo" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.supportedRegionsToCloneTo"></a>

```csharp
public string[] SupportedRegionsToCloneTo { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeDataGuardRoleChanged`<sup>Required</sup> <a name="TimeDataGuardRoleChanged" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeDataGuardRoleChanged"></a>

```csharp
public string TimeDataGuardRoleChanged { get; }
```

- *Type:* string

---

##### `TimeDeletionOfFreeAutonomousDatabase`<sup>Required</sup> <a name="TimeDeletionOfFreeAutonomousDatabase" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase"></a>

```csharp
public string TimeDeletionOfFreeAutonomousDatabase { get; }
```

- *Type:* string

---

##### `TimeLocalDataGuardEnabledOn`<sup>Required</sup> <a name="TimeLocalDataGuardEnabledOn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeLocalDataGuardEnabledOn"></a>

```csharp
public string TimeLocalDataGuardEnabledOn { get; }
```

- *Type:* string

---

##### `TimeMaintenanceBegin`<sup>Required</sup> <a name="TimeMaintenanceBegin" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeMaintenanceBegin"></a>

```csharp
public string TimeMaintenanceBegin { get; }
```

- *Type:* string

---

##### `TimeMaintenanceEnd`<sup>Required</sup> <a name="TimeMaintenanceEnd" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeMaintenanceEnd"></a>

```csharp
public string TimeMaintenanceEnd { get; }
```

- *Type:* string

---

##### `TimeOfLastFailover`<sup>Required</sup> <a name="TimeOfLastFailover" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastFailover"></a>

```csharp
public string TimeOfLastFailover { get; }
```

- *Type:* string

---

##### `TimeOfLastRefresh`<sup>Required</sup> <a name="TimeOfLastRefresh" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastRefresh"></a>

```csharp
public string TimeOfLastRefresh { get; }
```

- *Type:* string

---

##### `TimeOfLastRefreshPoint`<sup>Required</sup> <a name="TimeOfLastRefreshPoint" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastRefreshPoint"></a>

```csharp
public string TimeOfLastRefreshPoint { get; }
```

- *Type:* string

---

##### `TimeOfLastSwitchover`<sup>Required</sup> <a name="TimeOfLastSwitchover" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastSwitchover"></a>

```csharp
public string TimeOfLastSwitchover { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeouts"></a>

```csharp
public DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference</a>

---

##### `TimeReclamationOfFreeAutonomousDatabase`<sup>Required</sup> <a name="TimeReclamationOfFreeAutonomousDatabase" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase"></a>

```csharp
public string TimeReclamationOfFreeAutonomousDatabase { get; }
```

- *Type:* string

---

##### `UsedDataStorageSizeInGbs`<sup>Required</sup> <a name="UsedDataStorageSizeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.usedDataStorageSizeInGbs"></a>

```csharp
public double UsedDataStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `UsedDataStorageSizeInTbs`<sup>Required</sup> <a name="UsedDataStorageSizeInTbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.usedDataStorageSizeInTbs"></a>

```csharp
public double UsedDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAutonomousDatabaseConfig <a name="DataAzurermOracleAutonomousDatabaseConfig" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string Id = null,
    DataAzurermOracleAutonomousDatabaseTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_autonomous_database#name DataAzurermOracleAutonomousDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_autonomous_database#resource_group_name DataAzurermOracleAutonomousDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_autonomous_database#id DataAzurermOracleAutonomousDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_autonomous_database#name DataAzurermOracleAutonomousDatabase#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_autonomous_database#resource_group_name DataAzurermOracleAutonomousDatabase#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_autonomous_database#id DataAzurermOracleAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.timeouts"></a>

```csharp
public DataAzurermOracleAutonomousDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_autonomous_database#timeouts DataAzurermOracleAutonomousDatabase#timeouts}

---

### DataAzurermOracleAutonomousDatabaseTimeouts <a name="DataAzurermOracleAutonomousDatabaseTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_autonomous_database#read DataAzurermOracleAutonomousDatabase#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/oracle_autonomous_database#read DataAzurermOracleAutonomousDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference <a name="DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



