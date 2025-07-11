# `dataAzurermCosmosdbMongoDatabase` Submodule <a name="`dataAzurermCosmosdbMongoDatabase` Submodule" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCosmosdbMongoDatabase <a name="DataAzurermCosmosdbMongoDatabase" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/cosmosdb_mongo_database azurerm_cosmosdb_mongo_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermCosmosdbMongoDatabase(Construct Scope, string Id, DataAzurermCosmosdbMongoDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig">DataAzurermCosmosdbMongoDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig">DataAzurermCosmosdbMongoDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermCosmosdbMongoDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeouts">DataAzurermCosmosdbMongoDatabaseTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermCosmosdbMongoDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermCosmosdbMongoDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermCosmosdbMongoDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermCosmosdbMongoDatabase.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermCosmosdbMongoDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermCosmosdbMongoDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermCosmosdbMongoDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermCosmosdbMongoDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/cosmosdb_mongo_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermCosmosdbMongoDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference">DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.timeouts"></a>

```csharp
public DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference">DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCosmosdbMongoDatabaseConfig <a name="DataAzurermCosmosdbMongoDatabaseConfig" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermCosmosdbMongoDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountName,
    string Name,
    string ResourceGroupName,
    string Id = null,
    DataAzurermCosmosdbMongoDatabaseTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/cosmosdb_mongo_database#account_name DataAzurermCosmosdbMongoDatabase#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/cosmosdb_mongo_database#name DataAzurermCosmosdbMongoDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/cosmosdb_mongo_database#resource_group_name DataAzurermCosmosdbMongoDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/cosmosdb_mongo_database#id DataAzurermCosmosdbMongoDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeouts">DataAzurermCosmosdbMongoDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/cosmosdb_mongo_database#account_name DataAzurermCosmosdbMongoDatabase#account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/cosmosdb_mongo_database#name DataAzurermCosmosdbMongoDatabase#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/cosmosdb_mongo_database#resource_group_name DataAzurermCosmosdbMongoDatabase#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/cosmosdb_mongo_database#id DataAzurermCosmosdbMongoDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseConfig.property.timeouts"></a>

```csharp
public DataAzurermCosmosdbMongoDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeouts">DataAzurermCosmosdbMongoDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/cosmosdb_mongo_database#timeouts DataAzurermCosmosdbMongoDatabase#timeouts}

---

### DataAzurermCosmosdbMongoDatabaseTimeouts <a name="DataAzurermCosmosdbMongoDatabaseTimeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermCosmosdbMongoDatabaseTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/cosmosdb_mongo_database#read DataAzurermCosmosdbMongoDatabase#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/cosmosdb_mongo_database#read DataAzurermCosmosdbMongoDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference <a name="DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermCosmosdbMongoDatabase.DataAzurermCosmosdbMongoDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



