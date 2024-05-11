# `dataAzurermApiManagementGatewayHostNameConfiguration` Submodule <a name="`dataAzurermApiManagementGatewayHostNameConfiguration` Submodule" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermApiManagementGatewayHostNameConfiguration <a name="DataAzurermApiManagementGatewayHostNameConfiguration" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/api_management_gateway_host_name_configuration azurerm_api_management_gateway_host_name_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermApiManagementGatewayHostNameConfiguration(Construct Scope, string Id, DataAzurermApiManagementGatewayHostNameConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig">DataAzurermApiManagementGatewayHostNameConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig">DataAzurermApiManagementGatewayHostNameConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermApiManagementGatewayHostNameConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts">DataAzurermApiManagementGatewayHostNameConfigurationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermApiManagementGatewayHostNameConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermApiManagementGatewayHostNameConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermApiManagementGatewayHostNameConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermApiManagementGatewayHostNameConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermApiManagementGatewayHostNameConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermApiManagementGatewayHostNameConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermApiManagementGatewayHostNameConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermApiManagementGatewayHostNameConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/api_management_gateway_host_name_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermApiManagementGatewayHostNameConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.http2Enabled">Http2Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabled">RequestClientCertificateEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference">DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tls10Enabled">Tls10Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tls11Enabled">Tls11Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.apiManagementIdInput">ApiManagementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.gatewayNameInput">GatewayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.apiManagementId">ApiManagementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.gatewayName">GatewayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.http2Enabled"></a>

```csharp
public IResolvable Http2Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RequestClientCertificateEnabled`<sup>Required</sup> <a name="RequestClientCertificateEnabled" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabled"></a>

```csharp
public IResolvable RequestClientCertificateEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.timeouts"></a>

```csharp
public DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference">DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference</a>

---

##### `Tls10Enabled`<sup>Required</sup> <a name="Tls10Enabled" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tls10Enabled"></a>

```csharp
public IResolvable Tls10Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Tls11Enabled`<sup>Required</sup> <a name="Tls11Enabled" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tls11Enabled"></a>

```csharp
public IResolvable Tls11Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ApiManagementIdInput`<sup>Optional</sup> <a name="ApiManagementIdInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.apiManagementIdInput"></a>

```csharp
public string ApiManagementIdInput { get; }
```

- *Type:* string

---

##### `GatewayNameInput`<sup>Optional</sup> <a name="GatewayNameInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.gatewayNameInput"></a>

```csharp
public string GatewayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.apiManagementId"></a>

```csharp
public string ApiManagementId { get; }
```

- *Type:* string

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.gatewayName"></a>

```csharp
public string GatewayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermApiManagementGatewayHostNameConfigurationConfig <a name="DataAzurermApiManagementGatewayHostNameConfigurationConfig" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermApiManagementGatewayHostNameConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiManagementId,
    string GatewayName,
    string Name,
    string Id = null,
    DataAzurermApiManagementGatewayHostNameConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.apiManagementId">ApiManagementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/api_management_gateway_host_name_configuration#api_management_id DataAzurermApiManagementGatewayHostNameConfiguration#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.gatewayName">GatewayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/api_management_gateway_host_name_configuration#gateway_name DataAzurermApiManagementGatewayHostNameConfiguration#gateway_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/api_management_gateway_host_name_configuration#name DataAzurermApiManagementGatewayHostNameConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/api_management_gateway_host_name_configuration#id DataAzurermApiManagementGatewayHostNameConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts">DataAzurermApiManagementGatewayHostNameConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.apiManagementId"></a>

```csharp
public string ApiManagementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/api_management_gateway_host_name_configuration#api_management_id DataAzurermApiManagementGatewayHostNameConfiguration#api_management_id}.

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.gatewayName"></a>

```csharp
public string GatewayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/api_management_gateway_host_name_configuration#gateway_name DataAzurermApiManagementGatewayHostNameConfiguration#gateway_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/api_management_gateway_host_name_configuration#name DataAzurermApiManagementGatewayHostNameConfiguration#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/api_management_gateway_host_name_configuration#id DataAzurermApiManagementGatewayHostNameConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.timeouts"></a>

```csharp
public DataAzurermApiManagementGatewayHostNameConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts">DataAzurermApiManagementGatewayHostNameConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/api_management_gateway_host_name_configuration#timeouts DataAzurermApiManagementGatewayHostNameConfiguration#timeouts}

---

### DataAzurermApiManagementGatewayHostNameConfigurationTimeouts <a name="DataAzurermApiManagementGatewayHostNameConfigurationTimeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermApiManagementGatewayHostNameConfigurationTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/api_management_gateway_host_name_configuration#read DataAzurermApiManagementGatewayHostNameConfiguration#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/api_management_gateway_host_name_configuration#read DataAzurermApiManagementGatewayHostNameConfiguration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference <a name="DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



