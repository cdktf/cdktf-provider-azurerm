# `azurerm_data_factory_dataset_binary`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_dataset_binary`](https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary).

# `dataFactoryDatasetBinary` Submodule <a name="`dataFactoryDatasetBinary` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetBinary <a name="DataFactoryDatasetBinary" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary azurerm_data_factory_dataset_binary}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDatasetBinary(Construct Scope, string Id, DataFactoryDatasetBinaryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig">DataFactoryDatasetBinaryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig">DataFactoryDatasetBinaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putAzureBlobStorageLocation">PutAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putCompression">PutCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putHttpServerLocation">PutHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putSftpServerLocation">PutSftpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetAzureBlobStorageLocation">ResetAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetHttpServerLocation">ResetHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetSftpServerLocation">ResetSftpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAzureBlobStorageLocation` <a name="PutAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putAzureBlobStorageLocation"></a>

```csharp
private void PutAzureBlobStorageLocation(DataFactoryDatasetBinaryAzureBlobStorageLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putAzureBlobStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation">DataFactoryDatasetBinaryAzureBlobStorageLocation</a>

---

##### `PutCompression` <a name="PutCompression" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putCompression"></a>

```csharp
private void PutCompression(DataFactoryDatasetBinaryCompression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putCompression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression">DataFactoryDatasetBinaryCompression</a>

---

##### `PutHttpServerLocation` <a name="PutHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putHttpServerLocation"></a>

```csharp
private void PutHttpServerLocation(DataFactoryDatasetBinaryHttpServerLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putHttpServerLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation">DataFactoryDatasetBinaryHttpServerLocation</a>

---

##### `PutSftpServerLocation` <a name="PutSftpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putSftpServerLocation"></a>

```csharp
private void PutSftpServerLocation(DataFactoryDatasetBinarySftpServerLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putSftpServerLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation">DataFactoryDatasetBinarySftpServerLocation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFactoryDatasetBinaryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts">DataFactoryDatasetBinaryTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAzureBlobStorageLocation` <a name="ResetAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetAzureBlobStorageLocation"></a>

```csharp
private void ResetAzureBlobStorageLocation()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetCompression"></a>

```csharp
private void ResetCompression()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetFolder"></a>

```csharp
private void ResetFolder()
```

##### `ResetHttpServerLocation` <a name="ResetHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetHttpServerLocation"></a>

```csharp
private void ResetHttpServerLocation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetSftpServerLocation` <a name="ResetSftpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetSftpServerLocation"></a>

```csharp
private void ResetSftpServerLocation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryDatasetBinary.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryDatasetBinary.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryDatasetBinary.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.azureBlobStorageLocation">AzureBlobStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference">DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.compression">Compression</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference">DataFactoryDatasetBinaryCompressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.httpServerLocation">HttpServerLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference">DataFactoryDatasetBinaryHttpServerLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.sftpServerLocation">SftpServerLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference">DataFactoryDatasetBinarySftpServerLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference">DataFactoryDatasetBinaryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.annotationsInput">AnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.azureBlobStorageLocationInput">AzureBlobStorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation">DataFactoryDatasetBinaryAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.compressionInput">CompressionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression">DataFactoryDatasetBinaryCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.httpServerLocationInput">HttpServerLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation">DataFactoryDatasetBinaryHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.sftpServerLocationInput">SftpServerLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation">DataFactoryDatasetBinarySftpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.annotations">Annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AzureBlobStorageLocation`<sup>Required</sup> <a name="AzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.azureBlobStorageLocation"></a>

```csharp
public DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference AzureBlobStorageLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference">DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference</a>

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.compression"></a>

```csharp
public DataFactoryDatasetBinaryCompressionOutputReference Compression { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference">DataFactoryDatasetBinaryCompressionOutputReference</a>

---

##### `HttpServerLocation`<sup>Required</sup> <a name="HttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.httpServerLocation"></a>

```csharp
public DataFactoryDatasetBinaryHttpServerLocationOutputReference HttpServerLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference">DataFactoryDatasetBinaryHttpServerLocationOutputReference</a>

---

##### `SftpServerLocation`<sup>Required</sup> <a name="SftpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.sftpServerLocation"></a>

```csharp
public DataFactoryDatasetBinarySftpServerLocationOutputReference SftpServerLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference">DataFactoryDatasetBinarySftpServerLocationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.timeouts"></a>

```csharp
public DataFactoryDatasetBinaryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference">DataFactoryDatasetBinaryTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.additionalPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.annotationsInput"></a>

```csharp
public string[] AnnotationsInput { get; }
```

- *Type:* string[]

---

##### `AzureBlobStorageLocationInput`<sup>Optional</sup> <a name="AzureBlobStorageLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.azureBlobStorageLocationInput"></a>

```csharp
public DataFactoryDatasetBinaryAzureBlobStorageLocation AzureBlobStorageLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation">DataFactoryDatasetBinaryAzureBlobStorageLocation</a>

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.compressionInput"></a>

```csharp
public DataFactoryDatasetBinaryCompression CompressionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression">DataFactoryDatasetBinaryCompression</a>

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `HttpServerLocationInput`<sup>Optional</sup> <a name="HttpServerLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.httpServerLocationInput"></a>

```csharp
public DataFactoryDatasetBinaryHttpServerLocation HttpServerLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation">DataFactoryDatasetBinaryHttpServerLocation</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.linkedServiceNameInput"></a>

```csharp
public string LinkedServiceNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SftpServerLocationInput`<sup>Optional</sup> <a name="SftpServerLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.sftpServerLocationInput"></a>

```csharp
public DataFactoryDatasetBinarySftpServerLocation SftpServerLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation">DataFactoryDatasetBinarySftpServerLocation</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.annotations"></a>

```csharp
public string[] Annotations { get; }
```

- *Type:* string[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetBinaryAzureBlobStorageLocation <a name="DataFactoryDatasetBinaryAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDatasetBinaryAzureBlobStorageLocation {
    string Container,
    object DynamicContainerEnabled = null,
    object DynamicFilenameEnabled = null,
    object DynamicPathEnabled = null,
    string Filename = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.container">Container</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#container DataFactoryDatasetBinary#container}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.dynamicContainerEnabled">DynamicContainerEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#dynamic_container_enabled DataFactoryDatasetBinary#dynamic_container_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.filename">Filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#filename DataFactoryDatasetBinary#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#path DataFactoryDatasetBinary#path}. |

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.container"></a>

```csharp
public string Container { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#container DataFactoryDatasetBinary#container}.

---

##### `DynamicContainerEnabled`<sup>Optional</sup> <a name="DynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.dynamicContainerEnabled"></a>

```csharp
public object DynamicContainerEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#dynamic_container_enabled DataFactoryDatasetBinary#dynamic_container_enabled}.

---

##### `DynamicFilenameEnabled`<sup>Optional</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.dynamicFilenameEnabled"></a>

```csharp
public object DynamicFilenameEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}.

---

##### `DynamicPathEnabled`<sup>Optional</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.dynamicPathEnabled"></a>

```csharp
public object DynamicPathEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}.

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#filename DataFactoryDatasetBinary#filename}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#path DataFactoryDatasetBinary#path}.

---

### DataFactoryDatasetBinaryCompression <a name="DataFactoryDatasetBinaryCompression" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDatasetBinaryCompression {
    string Type,
    string Level = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#type DataFactoryDatasetBinary#type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression.property.level">Level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#level DataFactoryDatasetBinary#level}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#type DataFactoryDatasetBinary#type}.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#level DataFactoryDatasetBinary#level}.

---

### DataFactoryDatasetBinaryConfig <a name="DataFactoryDatasetBinaryConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDatasetBinaryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataFactoryId,
    string LinkedServiceName,
    string Name,
    System.Collections.Generic.IDictionary<string, string> AdditionalProperties = null,
    string[] Annotations = null,
    DataFactoryDatasetBinaryAzureBlobStorageLocation AzureBlobStorageLocation = null,
    DataFactoryDatasetBinaryCompression Compression = null,
    string Description = null,
    string Folder = null,
    DataFactoryDatasetBinaryHttpServerLocation HttpServerLocation = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    DataFactoryDatasetBinarySftpServerLocation SftpServerLocation = null,
    DataFactoryDatasetBinaryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#data_factory_id DataFactoryDatasetBinary#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#linked_service_name DataFactoryDatasetBinary#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#name DataFactoryDatasetBinary#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#additional_properties DataFactoryDatasetBinary#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.annotations">Annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#annotations DataFactoryDatasetBinary#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.azureBlobStorageLocation">AzureBlobStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation">DataFactoryDatasetBinaryAzureBlobStorageLocation</a></code> | azure_blob_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.compression">Compression</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression">DataFactoryDatasetBinaryCompression</a></code> | compression block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#description DataFactoryDatasetBinary#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.folder">Folder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#folder DataFactoryDatasetBinary#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.httpServerLocation">HttpServerLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation">DataFactoryDatasetBinaryHttpServerLocation</a></code> | http_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#id DataFactoryDatasetBinary#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#parameters DataFactoryDatasetBinary#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.sftpServerLocation">SftpServerLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation">DataFactoryDatasetBinarySftpServerLocation</a></code> | sftp_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts">DataFactoryDatasetBinaryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#data_factory_id DataFactoryDatasetBinary#data_factory_id}.

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#linked_service_name DataFactoryDatasetBinary#linked_service_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#name DataFactoryDatasetBinary#name}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#additional_properties DataFactoryDatasetBinary#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.annotations"></a>

```csharp
public string[] Annotations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#annotations DataFactoryDatasetBinary#annotations}.

---

##### `AzureBlobStorageLocation`<sup>Optional</sup> <a name="AzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.azureBlobStorageLocation"></a>

```csharp
public DataFactoryDatasetBinaryAzureBlobStorageLocation AzureBlobStorageLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation">DataFactoryDatasetBinaryAzureBlobStorageLocation</a>

azure_blob_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#azure_blob_storage_location DataFactoryDatasetBinary#azure_blob_storage_location}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.compression"></a>

```csharp
public DataFactoryDatasetBinaryCompression Compression { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression">DataFactoryDatasetBinaryCompression</a>

compression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#compression DataFactoryDatasetBinary#compression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#description DataFactoryDatasetBinary#description}.

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#folder DataFactoryDatasetBinary#folder}.

---

##### `HttpServerLocation`<sup>Optional</sup> <a name="HttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.httpServerLocation"></a>

```csharp
public DataFactoryDatasetBinaryHttpServerLocation HttpServerLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation">DataFactoryDatasetBinaryHttpServerLocation</a>

http_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#http_server_location DataFactoryDatasetBinary#http_server_location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#id DataFactoryDatasetBinary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#parameters DataFactoryDatasetBinary#parameters}.

---

##### `SftpServerLocation`<sup>Optional</sup> <a name="SftpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.sftpServerLocation"></a>

```csharp
public DataFactoryDatasetBinarySftpServerLocation SftpServerLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation">DataFactoryDatasetBinarySftpServerLocation</a>

sftp_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#sftp_server_location DataFactoryDatasetBinary#sftp_server_location}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.timeouts"></a>

```csharp
public DataFactoryDatasetBinaryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts">DataFactoryDatasetBinaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#timeouts DataFactoryDatasetBinary#timeouts}

---

### DataFactoryDatasetBinaryHttpServerLocation <a name="DataFactoryDatasetBinaryHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDatasetBinaryHttpServerLocation {
    string Filename,
    string Path,
    string RelativeUrl,
    object DynamicFilenameEnabled = null,
    object DynamicPathEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.filename">Filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#filename DataFactoryDatasetBinary#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#path DataFactoryDatasetBinary#path}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.relativeUrl">RelativeUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#relative_url DataFactoryDatasetBinary#relative_url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}. |

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#filename DataFactoryDatasetBinary#filename}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#path DataFactoryDatasetBinary#path}.

---

##### `RelativeUrl`<sup>Required</sup> <a name="RelativeUrl" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.relativeUrl"></a>

```csharp
public string RelativeUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#relative_url DataFactoryDatasetBinary#relative_url}.

---

##### `DynamicFilenameEnabled`<sup>Optional</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.dynamicFilenameEnabled"></a>

```csharp
public object DynamicFilenameEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}.

---

##### `DynamicPathEnabled`<sup>Optional</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.dynamicPathEnabled"></a>

```csharp
public object DynamicPathEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}.

---

### DataFactoryDatasetBinarySftpServerLocation <a name="DataFactoryDatasetBinarySftpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDatasetBinarySftpServerLocation {
    string Filename,
    string Path,
    object DynamicFilenameEnabled = null,
    object DynamicPathEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.filename">Filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#filename DataFactoryDatasetBinary#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#path DataFactoryDatasetBinary#path}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}. |

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#filename DataFactoryDatasetBinary#filename}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#path DataFactoryDatasetBinary#path}.

---

##### `DynamicFilenameEnabled`<sup>Optional</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.dynamicFilenameEnabled"></a>

```csharp
public object DynamicFilenameEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}.

---

##### `DynamicPathEnabled`<sup>Optional</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.dynamicPathEnabled"></a>

```csharp
public object DynamicPathEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}.

---

### DataFactoryDatasetBinaryTimeouts <a name="DataFactoryDatasetBinaryTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDatasetBinaryTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#create DataFactoryDatasetBinary#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#delete DataFactoryDatasetBinary#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#read DataFactoryDatasetBinary#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#update DataFactoryDatasetBinary#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#create DataFactoryDatasetBinary#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#delete DataFactoryDatasetBinary#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#read DataFactoryDatasetBinary#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/data_factory_dataset_binary#update DataFactoryDatasetBinary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference <a name="DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled">ResetDynamicContainerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled">ResetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled">ResetDynamicPathEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetFilename">ResetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDynamicContainerEnabled` <a name="ResetDynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled"></a>

```csharp
private void ResetDynamicContainerEnabled()
```

##### `ResetDynamicFilenameEnabled` <a name="ResetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled"></a>

```csharp
private void ResetDynamicFilenameEnabled()
```

##### `ResetDynamicPathEnabled` <a name="ResetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled"></a>

```csharp
private void ResetDynamicPathEnabled()
```

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetFilename"></a>

```csharp
private void ResetFilename()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.containerInput">ContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput">DynamicContainerEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput">DynamicFilenameEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput">DynamicPathEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled">DynamicContainerEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation">DataFactoryDatasetBinaryAzureBlobStorageLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.containerInput"></a>

```csharp
public string ContainerInput { get; }
```

- *Type:* string

---

##### `DynamicContainerEnabledInput`<sup>Optional</sup> <a name="DynamicContainerEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput"></a>

```csharp
public object DynamicContainerEnabledInput { get; }
```

- *Type:* object

---

##### `DynamicFilenameEnabledInput`<sup>Optional</sup> <a name="DynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```csharp
public object DynamicFilenameEnabledInput { get; }
```

- *Type:* object

---

##### `DynamicPathEnabledInput`<sup>Optional</sup> <a name="DynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput"></a>

```csharp
public object DynamicPathEnabledInput { get; }
```

- *Type:* object

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `DynamicContainerEnabled`<sup>Required</sup> <a name="DynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled"></a>

```csharp
public object DynamicContainerEnabled { get; }
```

- *Type:* object

---

##### `DynamicFilenameEnabled`<sup>Required</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled"></a>

```csharp
public object DynamicFilenameEnabled { get; }
```

- *Type:* object

---

##### `DynamicPathEnabled`<sup>Required</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled"></a>

```csharp
public object DynamicPathEnabled { get; }
```

- *Type:* object

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDatasetBinaryAzureBlobStorageLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation">DataFactoryDatasetBinaryAzureBlobStorageLocation</a>

---


### DataFactoryDatasetBinaryCompressionOutputReference <a name="DataFactoryDatasetBinaryCompressionOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDatasetBinaryCompressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.resetLevel"></a>

```csharp
private void ResetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression">DataFactoryDatasetBinaryCompression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDatasetBinaryCompression InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression">DataFactoryDatasetBinaryCompression</a>

---


### DataFactoryDatasetBinaryHttpServerLocationOutputReference <a name="DataFactoryDatasetBinaryHttpServerLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDatasetBinaryHttpServerLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.resetDynamicFilenameEnabled">ResetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.resetDynamicPathEnabled">ResetDynamicPathEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDynamicFilenameEnabled` <a name="ResetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.resetDynamicFilenameEnabled"></a>

```csharp
private void ResetDynamicFilenameEnabled()
```

##### `ResetDynamicPathEnabled` <a name="ResetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.resetDynamicPathEnabled"></a>

```csharp
private void ResetDynamicPathEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput">DynamicFilenameEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicPathEnabledInput">DynamicPathEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.relativeUrlInput">RelativeUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.relativeUrl">RelativeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation">DataFactoryDatasetBinaryHttpServerLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DynamicFilenameEnabledInput`<sup>Optional</sup> <a name="DynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```csharp
public object DynamicFilenameEnabledInput { get; }
```

- *Type:* object

---

##### `DynamicPathEnabledInput`<sup>Optional</sup> <a name="DynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicPathEnabledInput"></a>

```csharp
public object DynamicPathEnabledInput { get; }
```

- *Type:* object

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RelativeUrlInput`<sup>Optional</sup> <a name="RelativeUrlInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.relativeUrlInput"></a>

```csharp
public string RelativeUrlInput { get; }
```

- *Type:* string

---

##### `DynamicFilenameEnabled`<sup>Required</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicFilenameEnabled"></a>

```csharp
public object DynamicFilenameEnabled { get; }
```

- *Type:* object

---

##### `DynamicPathEnabled`<sup>Required</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicPathEnabled"></a>

```csharp
public object DynamicPathEnabled { get; }
```

- *Type:* object

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RelativeUrl`<sup>Required</sup> <a name="RelativeUrl" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.relativeUrl"></a>

```csharp
public string RelativeUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDatasetBinaryHttpServerLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation">DataFactoryDatasetBinaryHttpServerLocation</a>

---


### DataFactoryDatasetBinarySftpServerLocationOutputReference <a name="DataFactoryDatasetBinarySftpServerLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDatasetBinarySftpServerLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.resetDynamicFilenameEnabled">ResetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.resetDynamicPathEnabled">ResetDynamicPathEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDynamicFilenameEnabled` <a name="ResetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.resetDynamicFilenameEnabled"></a>

```csharp
private void ResetDynamicFilenameEnabled()
```

##### `ResetDynamicPathEnabled` <a name="ResetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.resetDynamicPathEnabled"></a>

```csharp
private void ResetDynamicPathEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicFilenameEnabledInput">DynamicFilenameEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicPathEnabledInput">DynamicPathEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation">DataFactoryDatasetBinarySftpServerLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DynamicFilenameEnabledInput`<sup>Optional</sup> <a name="DynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```csharp
public object DynamicFilenameEnabledInput { get; }
```

- *Type:* object

---

##### `DynamicPathEnabledInput`<sup>Optional</sup> <a name="DynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicPathEnabledInput"></a>

```csharp
public object DynamicPathEnabledInput { get; }
```

- *Type:* object

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `DynamicFilenameEnabled`<sup>Required</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicFilenameEnabled"></a>

```csharp
public object DynamicFilenameEnabled { get; }
```

- *Type:* object

---

##### `DynamicPathEnabled`<sup>Required</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicPathEnabled"></a>

```csharp
public object DynamicPathEnabled { get; }
```

- *Type:* object

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.internalValue"></a>

```csharp
public DataFactoryDatasetBinarySftpServerLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation">DataFactoryDatasetBinarySftpServerLocation</a>

---


### DataFactoryDatasetBinaryTimeoutsOutputReference <a name="DataFactoryDatasetBinaryTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryDatasetBinaryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



