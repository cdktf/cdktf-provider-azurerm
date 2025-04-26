# `dataAzurermElasticCloudElasticsearch` Submodule <a name="`dataAzurermElasticCloudElasticsearch` Submodule" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermElasticCloudElasticsearch <a name="DataAzurermElasticCloudElasticsearch" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/elastic_cloud_elasticsearch azurerm_elastic_cloud_elasticsearch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermElasticCloudElasticsearch(Construct Scope, string Id, DataAzurermElasticCloudElasticsearchConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig">DataAzurermElasticCloudElasticsearchConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig">DataAzurermElasticCloudElasticsearchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.putLogs">PutLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.resetLogs">ResetLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLogs` <a name="PutLogs" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.putLogs"></a>

```csharp
private void PutLogs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.putLogs.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermElasticCloudElasticsearchTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeouts">DataAzurermElasticCloudElasticsearchTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogs` <a name="ResetLogs" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.resetLogs"></a>

```csharp
private void ResetLogs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermElasticCloudElasticsearch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermElasticCloudElasticsearch.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermElasticCloudElasticsearch.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermElasticCloudElasticsearch.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermElasticCloudElasticsearch.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermElasticCloudElasticsearch resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermElasticCloudElasticsearch to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermElasticCloudElasticsearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/elastic_cloud_elasticsearch#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermElasticCloudElasticsearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.elasticCloudDeploymentId">ElasticCloudDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.elasticCloudEmailAddress">ElasticCloudEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.elasticCloudSsoDefaultUrl">ElasticCloudSsoDefaultUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.elasticCloudUserId">ElasticCloudUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.elasticsearchServiceUrl">ElasticsearchServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.kibanaServiceUrl">KibanaServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.kibanaSsoUri">KibanaSsoUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.logs">Logs</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList">DataAzurermElasticCloudElasticsearchLogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.monitoringEnabled">MonitoringEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference">DataAzurermElasticCloudElasticsearchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.logsInput">LogsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ElasticCloudDeploymentId`<sup>Required</sup> <a name="ElasticCloudDeploymentId" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.elasticCloudDeploymentId"></a>

```csharp
public string ElasticCloudDeploymentId { get; }
```

- *Type:* string

---

##### `ElasticCloudEmailAddress`<sup>Required</sup> <a name="ElasticCloudEmailAddress" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.elasticCloudEmailAddress"></a>

```csharp
public string ElasticCloudEmailAddress { get; }
```

- *Type:* string

---

##### `ElasticCloudSsoDefaultUrl`<sup>Required</sup> <a name="ElasticCloudSsoDefaultUrl" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.elasticCloudSsoDefaultUrl"></a>

```csharp
public string ElasticCloudSsoDefaultUrl { get; }
```

- *Type:* string

---

##### `ElasticCloudUserId`<sup>Required</sup> <a name="ElasticCloudUserId" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.elasticCloudUserId"></a>

```csharp
public string ElasticCloudUserId { get; }
```

- *Type:* string

---

##### `ElasticsearchServiceUrl`<sup>Required</sup> <a name="ElasticsearchServiceUrl" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.elasticsearchServiceUrl"></a>

```csharp
public string ElasticsearchServiceUrl { get; }
```

- *Type:* string

---

##### `KibanaServiceUrl`<sup>Required</sup> <a name="KibanaServiceUrl" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.kibanaServiceUrl"></a>

```csharp
public string KibanaServiceUrl { get; }
```

- *Type:* string

---

##### `KibanaSsoUri`<sup>Required</sup> <a name="KibanaSsoUri" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.kibanaSsoUri"></a>

```csharp
public string KibanaSsoUri { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Logs`<sup>Required</sup> <a name="Logs" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.logs"></a>

```csharp
public DataAzurermElasticCloudElasticsearchLogsList Logs { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList">DataAzurermElasticCloudElasticsearchLogsList</a>

---

##### `MonitoringEnabled`<sup>Required</sup> <a name="MonitoringEnabled" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.monitoringEnabled"></a>

```csharp
public IResolvable MonitoringEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.timeouts"></a>

```csharp
public DataAzurermElasticCloudElasticsearchTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference">DataAzurermElasticCloudElasticsearchTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogsInput`<sup>Optional</sup> <a name="LogsInput" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.logsInput"></a>

```csharp
public object LogsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearch.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermElasticCloudElasticsearchConfig <a name="DataAzurermElasticCloudElasticsearchConfig" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermElasticCloudElasticsearchConfig {
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
    object Logs = null,
    DataAzurermElasticCloudElasticsearchTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/elastic_cloud_elasticsearch#name DataAzurermElasticCloudElasticsearch#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/elastic_cloud_elasticsearch#resource_group_name DataAzurermElasticCloudElasticsearch#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/elastic_cloud_elasticsearch#id DataAzurermElasticCloudElasticsearch#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.logs">Logs</a></code> | <code>object</code> | logs block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeouts">DataAzurermElasticCloudElasticsearchTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/elastic_cloud_elasticsearch#name DataAzurermElasticCloudElasticsearch#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/elastic_cloud_elasticsearch#resource_group_name DataAzurermElasticCloudElasticsearch#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/elastic_cloud_elasticsearch#id DataAzurermElasticCloudElasticsearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logs`<sup>Optional</sup> <a name="Logs" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.logs"></a>

```csharp
public object Logs { get; set; }
```

- *Type:* object

logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/elastic_cloud_elasticsearch#logs DataAzurermElasticCloudElasticsearch#logs}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchConfig.property.timeouts"></a>

```csharp
public DataAzurermElasticCloudElasticsearchTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeouts">DataAzurermElasticCloudElasticsearchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/elastic_cloud_elasticsearch#timeouts DataAzurermElasticCloudElasticsearch#timeouts}

---

### DataAzurermElasticCloudElasticsearchLogs <a name="DataAzurermElasticCloudElasticsearchLogs" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermElasticCloudElasticsearchLogs {

};
```


### DataAzurermElasticCloudElasticsearchLogsFilteringTag <a name="DataAzurermElasticCloudElasticsearchLogsFilteringTag" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermElasticCloudElasticsearchLogsFilteringTag {

};
```


### DataAzurermElasticCloudElasticsearchTimeouts <a name="DataAzurermElasticCloudElasticsearchTimeouts" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermElasticCloudElasticsearchTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/elastic_cloud_elasticsearch#read DataAzurermElasticCloudElasticsearch#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/elastic_cloud_elasticsearch#read DataAzurermElasticCloudElasticsearch#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermElasticCloudElasticsearchLogsFilteringTagList <a name="DataAzurermElasticCloudElasticsearchLogsFilteringTagList" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermElasticCloudElasticsearchLogsFilteringTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.get"></a>

```csharp
private DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference <a name="DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTag">DataAzurermElasticCloudElasticsearchLogsFilteringTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference.property.internalValue"></a>

```csharp
public DataAzurermElasticCloudElasticsearchLogsFilteringTag InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTag">DataAzurermElasticCloudElasticsearchLogsFilteringTag</a>

---


### DataAzurermElasticCloudElasticsearchLogsList <a name="DataAzurermElasticCloudElasticsearchLogsList" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermElasticCloudElasticsearchLogsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.get"></a>

```csharp
private DataAzurermElasticCloudElasticsearchLogsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAzurermElasticCloudElasticsearchLogsOutputReference <a name="DataAzurermElasticCloudElasticsearchLogsOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermElasticCloudElasticsearchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.property.filteringTag">FilteringTag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList">DataAzurermElasticCloudElasticsearchLogsFilteringTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.property.sendActivityLogs">SendActivityLogs</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.property.sendAzureadLogs">SendAzureadLogs</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.property.sendSubscriptionLogs">SendSubscriptionLogs</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilteringTag`<sup>Required</sup> <a name="FilteringTag" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.property.filteringTag"></a>

```csharp
public DataAzurermElasticCloudElasticsearchLogsFilteringTagList FilteringTag { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsFilteringTagList">DataAzurermElasticCloudElasticsearchLogsFilteringTagList</a>

---

##### `SendActivityLogs`<sup>Required</sup> <a name="SendActivityLogs" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.property.sendActivityLogs"></a>

```csharp
public IResolvable SendActivityLogs { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SendAzureadLogs`<sup>Required</sup> <a name="SendAzureadLogs" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.property.sendAzureadLogs"></a>

```csharp
public IResolvable SendAzureadLogs { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SendSubscriptionLogs`<sup>Required</sup> <a name="SendSubscriptionLogs" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.property.sendSubscriptionLogs"></a>

```csharp
public IResolvable SendSubscriptionLogs { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchLogsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAzurermElasticCloudElasticsearchTimeoutsOutputReference <a name="DataAzurermElasticCloudElasticsearchTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermElasticCloudElasticsearchTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermElasticCloudElasticsearch.DataAzurermElasticCloudElasticsearchTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



