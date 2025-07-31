# `dataAzurermDataShareDatasetBlobStorage` Submodule <a name="`dataAzurermDataShareDatasetBlobStorage` Submodule" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDataShareDatasetBlobStorage <a name="DataAzurermDataShareDatasetBlobStorage" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/data_share_dataset_blob_storage azurerm_data_share_dataset_blob_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataShareDatasetBlobStorage(Construct Scope, string Id, DataAzurermDataShareDatasetBlobStorageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig">DataAzurermDataShareDatasetBlobStorageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig">DataAzurermDataShareDatasetBlobStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermDataShareDatasetBlobStorageTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeouts">DataAzurermDataShareDatasetBlobStorageTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermDataShareDatasetBlobStorage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermDataShareDatasetBlobStorage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermDataShareDatasetBlobStorage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermDataShareDatasetBlobStorage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermDataShareDatasetBlobStorage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermDataShareDatasetBlobStorage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermDataShareDatasetBlobStorage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermDataShareDatasetBlobStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/data_share_dataset_blob_storage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDataShareDatasetBlobStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.folderPath">FolderPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.storageAccount">StorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList">DataAzurermDataShareDatasetBlobStorageStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference">DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.dataShareIdInput">DataShareIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.dataShareId">DataShareId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `FolderPath`<sup>Required</sup> <a name="FolderPath" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.folderPath"></a>

```csharp
public string FolderPath { get; }
```

- *Type:* string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.storageAccount"></a>

```csharp
public DataAzurermDataShareDatasetBlobStorageStorageAccountList StorageAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList">DataAzurermDataShareDatasetBlobStorageStorageAccountList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.timeouts"></a>

```csharp
public DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference">DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference</a>

---

##### `DataShareIdInput`<sup>Optional</sup> <a name="DataShareIdInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.dataShareIdInput"></a>

```csharp
public string DataShareIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DataShareId`<sup>Required</sup> <a name="DataShareId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.dataShareId"></a>

```csharp
public string DataShareId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDataShareDatasetBlobStorageConfig <a name="DataAzurermDataShareDatasetBlobStorageConfig" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataShareDatasetBlobStorageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataShareId,
    string Name,
    string Id = null,
    DataAzurermDataShareDatasetBlobStorageTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.dataShareId">DataShareId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/data_share_dataset_blob_storage#data_share_id DataAzurermDataShareDatasetBlobStorage#data_share_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/data_share_dataset_blob_storage#name DataAzurermDataShareDatasetBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/data_share_dataset_blob_storage#id DataAzurermDataShareDatasetBlobStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeouts">DataAzurermDataShareDatasetBlobStorageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataShareId`<sup>Required</sup> <a name="DataShareId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.dataShareId"></a>

```csharp
public string DataShareId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/data_share_dataset_blob_storage#data_share_id DataAzurermDataShareDatasetBlobStorage#data_share_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/data_share_dataset_blob_storage#name DataAzurermDataShareDatasetBlobStorage#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/data_share_dataset_blob_storage#id DataAzurermDataShareDatasetBlobStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.timeouts"></a>

```csharp
public DataAzurermDataShareDatasetBlobStorageTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeouts">DataAzurermDataShareDatasetBlobStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/data_share_dataset_blob_storage#timeouts DataAzurermDataShareDatasetBlobStorage#timeouts}

---

### DataAzurermDataShareDatasetBlobStorageStorageAccount <a name="DataAzurermDataShareDatasetBlobStorageStorageAccount" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataShareDatasetBlobStorageStorageAccount {

};
```


### DataAzurermDataShareDatasetBlobStorageTimeouts <a name="DataAzurermDataShareDatasetBlobStorageTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataShareDatasetBlobStorageTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/data_share_dataset_blob_storage#read DataAzurermDataShareDatasetBlobStorage#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/data_share_dataset_blob_storage#read DataAzurermDataShareDatasetBlobStorage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDataShareDatasetBlobStorageStorageAccountList <a name="DataAzurermDataShareDatasetBlobStorageStorageAccountList" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataShareDatasetBlobStorageStorageAccountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.get"></a>

```csharp
private DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference <a name="DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccount">DataAzurermDataShareDatasetBlobStorageStorageAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.internalValue"></a>

```csharp
public DataAzurermDataShareDatasetBlobStorageStorageAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccount">DataAzurermDataShareDatasetBlobStorageStorageAccount</a>

---


### DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference <a name="DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



