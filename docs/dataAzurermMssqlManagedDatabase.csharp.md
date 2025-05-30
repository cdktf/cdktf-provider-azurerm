# `dataAzurermMssqlManagedDatabase` Submodule <a name="`dataAzurermMssqlManagedDatabase` Submodule" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMssqlManagedDatabase <a name="DataAzurermMssqlManagedDatabase" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database azurerm_mssql_managed_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlManagedDatabase(Construct Scope, string Id, DataAzurermMssqlManagedDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig">DataAzurermMssqlManagedDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig">DataAzurermMssqlManagedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermMssqlManagedDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMssqlManagedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMssqlManagedDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMssqlManagedDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMssqlManagedDatabase.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMssqlManagedDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermMssqlManagedDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMssqlManagedDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMssqlManagedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMssqlManagedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.longTermRetentionPolicy">LongTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList">DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceName">ManagedInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.pointInTimeRestore">PointInTimeRestore</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList">DataAzurermMssqlManagedDatabasePointInTimeRestoreList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.shortTermRetentionDays">ShortTermRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference">DataAzurermMssqlManagedDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `LongTermRetentionPolicy`<sup>Required</sup> <a name="LongTermRetentionPolicy" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.longTermRetentionPolicy"></a>

```csharp
public DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList LongTermRetentionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList">DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList</a>

---

##### `ManagedInstanceName`<sup>Required</sup> <a name="ManagedInstanceName" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceName"></a>

```csharp
public string ManagedInstanceName { get; }
```

- *Type:* string

---

##### `PointInTimeRestore`<sup>Required</sup> <a name="PointInTimeRestore" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.pointInTimeRestore"></a>

```csharp
public DataAzurermMssqlManagedDatabasePointInTimeRestoreList PointInTimeRestore { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList">DataAzurermMssqlManagedDatabasePointInTimeRestoreList</a>

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ShortTermRetentionDays`<sup>Required</sup> <a name="ShortTermRetentionDays" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.shortTermRetentionDays"></a>

```csharp
public double ShortTermRetentionDays { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.timeouts"></a>

```csharp
public DataAzurermMssqlManagedDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference">DataAzurermMssqlManagedDatabaseTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceIdInput"></a>

```csharp
public string ManagedInstanceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMssqlManagedDatabaseConfig <a name="DataAzurermMssqlManagedDatabaseConfig" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlManagedDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceId,
    string Name,
    string Id = null,
    DataAzurermMssqlManagedDatabaseTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#managed_instance_id DataAzurermMssqlManagedDatabase#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#name DataAzurermMssqlManagedDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#id DataAzurermMssqlManagedDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#managed_instance_id DataAzurermMssqlManagedDatabase#managed_instance_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#name DataAzurermMssqlManagedDatabase#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#id DataAzurermMssqlManagedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.timeouts"></a>

```csharp
public DataAzurermMssqlManagedDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#timeouts DataAzurermMssqlManagedDatabase#timeouts}

---

### DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy <a name="DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy {

};
```


### DataAzurermMssqlManagedDatabasePointInTimeRestore <a name="DataAzurermMssqlManagedDatabasePointInTimeRestore" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlManagedDatabasePointInTimeRestore {

};
```


### DataAzurermMssqlManagedDatabaseTimeouts <a name="DataAzurermMssqlManagedDatabaseTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlManagedDatabaseTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#read DataAzurermMssqlManagedDatabase#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#read DataAzurermMssqlManagedDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList <a name="DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.get"></a>

```csharp
private DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference <a name="DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabled">ImmutableBackupsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention">MonthlyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention">WeeklyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear">WeekOfYear</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention">YearlyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy">DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImmutableBackupsEnabled`<sup>Required</sup> <a name="ImmutableBackupsEnabled" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabled"></a>

```csharp
public IResolvable ImmutableBackupsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MonthlyRetention`<sup>Required</sup> <a name="MonthlyRetention" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention"></a>

```csharp
public string MonthlyRetention { get; }
```

- *Type:* string

---

##### `WeeklyRetention`<sup>Required</sup> <a name="WeeklyRetention" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention"></a>

```csharp
public string WeeklyRetention { get; }
```

- *Type:* string

---

##### `WeekOfYear`<sup>Required</sup> <a name="WeekOfYear" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear"></a>

```csharp
public double WeekOfYear { get; }
```

- *Type:* double

---

##### `YearlyRetention`<sup>Required</sup> <a name="YearlyRetention" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention"></a>

```csharp
public string YearlyRetention { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy">DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy</a>

---


### DataAzurermMssqlManagedDatabasePointInTimeRestoreList <a name="DataAzurermMssqlManagedDatabasePointInTimeRestoreList" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlManagedDatabasePointInTimeRestoreList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.get"></a>

```csharp
private DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference <a name="DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.restorePointInTime">RestorePointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.sourceDatabaseId">SourceDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestore">DataAzurermMssqlManagedDatabasePointInTimeRestore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RestorePointInTime`<sup>Required</sup> <a name="RestorePointInTime" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.restorePointInTime"></a>

```csharp
public string RestorePointInTime { get; }
```

- *Type:* string

---

##### `SourceDatabaseId`<sup>Required</sup> <a name="SourceDatabaseId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.sourceDatabaseId"></a>

```csharp
public string SourceDatabaseId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMssqlManagedDatabasePointInTimeRestore InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestore">DataAzurermMssqlManagedDatabasePointInTimeRestore</a>

---


### DataAzurermMssqlManagedDatabaseTimeoutsOutputReference <a name="DataAzurermMssqlManagedDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMssqlManagedDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



