# `dataAzurermCosmosdbSqlRoleDefinition` Submodule <a name="`dataAzurermCosmosdbSqlRoleDefinition` Submodule" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCosmosdbSqlRoleDefinition <a name="DataAzurermCosmosdbSqlRoleDefinition" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/cosmosdb_sql_role_definition azurerm_cosmosdb_sql_role_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermCosmosdbSqlRoleDefinition(Construct Scope, string Id, DataAzurermCosmosdbSqlRoleDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig">DataAzurermCosmosdbSqlRoleDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig">DataAzurermCosmosdbSqlRoleDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermCosmosdbSqlRoleDefinitionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts">DataAzurermCosmosdbSqlRoleDefinitionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermCosmosdbSqlRoleDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermCosmosdbSqlRoleDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermCosmosdbSqlRoleDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermCosmosdbSqlRoleDefinition.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermCosmosdbSqlRoleDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermCosmosdbSqlRoleDefinition resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermCosmosdbSqlRoleDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermCosmosdbSqlRoleDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/cosmosdb_sql_role_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermCosmosdbSqlRoleDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.assignableScopes">AssignableScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList">DataAzurermCosmosdbSqlRoleDefinitionPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference">DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.roleDefinitionIdInput">RoleDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AssignableScopes`<sup>Required</sup> <a name="AssignableScopes" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.assignableScopes"></a>

```csharp
public string[] AssignableScopes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.permissions"></a>

```csharp
public DataAzurermCosmosdbSqlRoleDefinitionPermissionsList Permissions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList">DataAzurermCosmosdbSqlRoleDefinitionPermissionsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.timeouts"></a>

```csharp
public DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference">DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RoleDefinitionIdInput`<sup>Optional</sup> <a name="RoleDefinitionIdInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.roleDefinitionIdInput"></a>

```csharp
public string RoleDefinitionIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.roleDefinitionId"></a>

```csharp
public string RoleDefinitionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCosmosdbSqlRoleDefinitionConfig <a name="DataAzurermCosmosdbSqlRoleDefinitionConfig" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermCosmosdbSqlRoleDefinitionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountName,
    string ResourceGroupName,
    string RoleDefinitionId,
    string Id = null,
    DataAzurermCosmosdbSqlRoleDefinitionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/cosmosdb_sql_role_definition#account_name DataAzurermCosmosdbSqlRoleDefinition#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/cosmosdb_sql_role_definition#resource_group_name DataAzurermCosmosdbSqlRoleDefinition#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/cosmosdb_sql_role_definition#role_definition_id DataAzurermCosmosdbSqlRoleDefinition#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/cosmosdb_sql_role_definition#id DataAzurermCosmosdbSqlRoleDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts">DataAzurermCosmosdbSqlRoleDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/cosmosdb_sql_role_definition#account_name DataAzurermCosmosdbSqlRoleDefinition#account_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/cosmosdb_sql_role_definition#resource_group_name DataAzurermCosmosdbSqlRoleDefinition#resource_group_name}.

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.roleDefinitionId"></a>

```csharp
public string RoleDefinitionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/cosmosdb_sql_role_definition#role_definition_id DataAzurermCosmosdbSqlRoleDefinition#role_definition_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/cosmosdb_sql_role_definition#id DataAzurermCosmosdbSqlRoleDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.timeouts"></a>

```csharp
public DataAzurermCosmosdbSqlRoleDefinitionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts">DataAzurermCosmosdbSqlRoleDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/cosmosdb_sql_role_definition#timeouts DataAzurermCosmosdbSqlRoleDefinition#timeouts}

---

### DataAzurermCosmosdbSqlRoleDefinitionPermissions <a name="DataAzurermCosmosdbSqlRoleDefinitionPermissions" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermCosmosdbSqlRoleDefinitionPermissions {

};
```


### DataAzurermCosmosdbSqlRoleDefinitionTimeouts <a name="DataAzurermCosmosdbSqlRoleDefinitionTimeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermCosmosdbSqlRoleDefinitionTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/cosmosdb_sql_role_definition#read DataAzurermCosmosdbSqlRoleDefinition#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/cosmosdb_sql_role_definition#read DataAzurermCosmosdbSqlRoleDefinition#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCosmosdbSqlRoleDefinitionPermissionsList <a name="DataAzurermCosmosdbSqlRoleDefinitionPermissionsList" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermCosmosdbSqlRoleDefinitionPermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.get"></a>

```csharp
private DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference <a name="DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.dataActions">DataActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissions">DataAzurermCosmosdbSqlRoleDefinitionPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataActions`<sup>Required</sup> <a name="DataActions" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.dataActions"></a>

```csharp
public string[] DataActions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermCosmosdbSqlRoleDefinitionPermissions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissions">DataAzurermCosmosdbSqlRoleDefinitionPermissions</a>

---


### DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference <a name="DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



