# `dataAzurermMobileNetworkAttachedDataNetwork` Submodule <a name="`dataAzurermMobileNetworkAttachedDataNetwork` Submodule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMobileNetworkAttachedDataNetwork <a name="DataAzurermMobileNetworkAttachedDataNetwork" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mobile_network_attached_data_network azurerm_mobile_network_attached_data_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMobileNetworkAttachedDataNetwork(Construct Scope, string Id, DataAzurermMobileNetworkAttachedDataNetworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig">DataAzurermMobileNetworkAttachedDataNetworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig">DataAzurermMobileNetworkAttachedDataNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermMobileNetworkAttachedDataNetworkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMobileNetworkAttachedDataNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMobileNetworkAttachedDataNetwork.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMobileNetworkAttachedDataNetwork.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMobileNetworkAttachedDataNetwork.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermMobileNetworkAttachedDataNetwork.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermMobileNetworkAttachedDataNetwork resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMobileNetworkAttachedDataNetwork to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMobileNetworkAttachedDataNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mobile_network_attached_data_network#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMobileNetworkAttachedDataNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.dnsAddresses">DnsAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.networkAddressPortTranslation">NetworkAddressPortTranslation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference">DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixes">UserEquipmentAddressPoolPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixes">UserEquipmentStaticAddressPoolPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Address">UserPlaneAccessIpv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Gateway">UserPlaneAccessIpv4Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Subnet">UserPlaneAccessIpv4Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessName">UserPlaneAccessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkNameInput">MobileNetworkDataNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneIdInput">MobileNetworkPacketCoreDataPlaneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkName">MobileNetworkDataNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneId">MobileNetworkPacketCoreDataPlaneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DnsAddresses`<sup>Required</sup> <a name="DnsAddresses" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.dnsAddresses"></a>

```csharp
public string[] DnsAddresses { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `NetworkAddressPortTranslation`<sup>Required</sup> <a name="NetworkAddressPortTranslation" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.networkAddressPortTranslation"></a>

```csharp
public DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList NetworkAddressPortTranslation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.timeouts"></a>

```csharp
public DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference">DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference</a>

---

##### `UserEquipmentAddressPoolPrefixes`<sup>Required</sup> <a name="UserEquipmentAddressPoolPrefixes" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixes"></a>

```csharp
public string[] UserEquipmentAddressPoolPrefixes { get; }
```

- *Type:* string[]

---

##### `UserEquipmentStaticAddressPoolPrefixes`<sup>Required</sup> <a name="UserEquipmentStaticAddressPoolPrefixes" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixes"></a>

```csharp
public string[] UserEquipmentStaticAddressPoolPrefixes { get; }
```

- *Type:* string[]

---

##### `UserPlaneAccessIpv4Address`<sup>Required</sup> <a name="UserPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Address"></a>

```csharp
public string UserPlaneAccessIpv4Address { get; }
```

- *Type:* string

---

##### `UserPlaneAccessIpv4Gateway`<sup>Required</sup> <a name="UserPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Gateway"></a>

```csharp
public string UserPlaneAccessIpv4Gateway { get; }
```

- *Type:* string

---

##### `UserPlaneAccessIpv4Subnet`<sup>Required</sup> <a name="UserPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Subnet"></a>

```csharp
public string UserPlaneAccessIpv4Subnet { get; }
```

- *Type:* string

---

##### `UserPlaneAccessName`<sup>Required</sup> <a name="UserPlaneAccessName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.userPlaneAccessName"></a>

```csharp
public string UserPlaneAccessName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MobileNetworkDataNetworkNameInput`<sup>Optional</sup> <a name="MobileNetworkDataNetworkNameInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkNameInput"></a>

```csharp
public string MobileNetworkDataNetworkNameInput { get; }
```

- *Type:* string

---

##### `MobileNetworkPacketCoreDataPlaneIdInput`<sup>Optional</sup> <a name="MobileNetworkPacketCoreDataPlaneIdInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneIdInput"></a>

```csharp
public string MobileNetworkPacketCoreDataPlaneIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermMobileNetworkAttachedDataNetworkTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MobileNetworkDataNetworkName`<sup>Required</sup> <a name="MobileNetworkDataNetworkName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkName"></a>

```csharp
public string MobileNetworkDataNetworkName { get; }
```

- *Type:* string

---

##### `MobileNetworkPacketCoreDataPlaneId`<sup>Required</sup> <a name="MobileNetworkPacketCoreDataPlaneId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneId"></a>

```csharp
public string MobileNetworkPacketCoreDataPlaneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetwork.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMobileNetworkAttachedDataNetworkConfig <a name="DataAzurermMobileNetworkAttachedDataNetworkConfig" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMobileNetworkAttachedDataNetworkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MobileNetworkDataNetworkName,
    string MobileNetworkPacketCoreDataPlaneId,
    string Id = null,
    DataAzurermMobileNetworkAttachedDataNetworkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.mobileNetworkDataNetworkName">MobileNetworkDataNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_data_network_name DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_data_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.mobileNetworkPacketCoreDataPlaneId">MobileNetworkPacketCoreDataPlaneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mobile_network_attached_data_network#id DataAzurermMobileNetworkAttachedDataNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `MobileNetworkDataNetworkName`<sup>Required</sup> <a name="MobileNetworkDataNetworkName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.mobileNetworkDataNetworkName"></a>

```csharp
public string MobileNetworkDataNetworkName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_data_network_name DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_data_network_name}.

---

##### `MobileNetworkPacketCoreDataPlaneId`<sup>Required</sup> <a name="MobileNetworkPacketCoreDataPlaneId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.mobileNetworkPacketCoreDataPlaneId"></a>

```csharp
public string MobileNetworkPacketCoreDataPlaneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mobile_network_attached_data_network#id DataAzurermMobileNetworkAttachedDataNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkConfig.property.timeouts"></a>

```csharp
public DataAzurermMobileNetworkAttachedDataNetworkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mobile_network_attached_data_network#timeouts DataAzurermMobileNetworkAttachedDataNetwork#timeouts}

---

### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation {

};
```


### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange {

};
```


### DataAzurermMobileNetworkAttachedDataNetworkTimeouts <a name="DataAzurermMobileNetworkAttachedDataNetworkTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMobileNetworkAttachedDataNetworkTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mobile_network_attached_data_network#read DataAzurermMobileNetworkAttachedDataNetwork#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/mobile_network_attached_data_network#read DataAzurermMobileNetworkAttachedDataNetwork#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.get"></a>

```csharp
private DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSeconds">IcmpPinholeTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumber">PinholeMaximumNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSeconds">TcpPinholeTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSeconds">TcpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSeconds">UdpPinholeTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSeconds">UdpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IcmpPinholeTimeoutInSeconds`<sup>Required</sup> <a name="IcmpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSeconds"></a>

```csharp
public double IcmpPinholeTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `PinholeMaximumNumber`<sup>Required</sup> <a name="PinholeMaximumNumber" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumber"></a>

```csharp
public double PinholeMaximumNumber { get; }
```

- *Type:* double

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRange"></a>

```csharp
public DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList PortRange { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList</a>

---

##### `TcpPinholeTimeoutInSeconds`<sup>Required</sup> <a name="TcpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSeconds"></a>

```csharp
public double TcpPinholeTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `TcpPortReuseMinimumHoldTimeInSeconds`<sup>Required</sup> <a name="TcpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSeconds"></a>

```csharp
public double TcpPortReuseMinimumHoldTimeInSeconds { get; }
```

- *Type:* double

---

##### `UdpPinholeTimeoutInSeconds`<sup>Required</sup> <a name="UdpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSeconds"></a>

```csharp
public double UdpPinholeTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `UdpPortReuseMinimumHoldTimeInSeconds`<sup>Required</sup> <a name="UdpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSeconds"></a>

```csharp
public double UdpPortReuseMinimumHoldTimeInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

---


### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.get"></a>

```csharp
private DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference <a name="DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.internalValue"></a>

```csharp
public DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a>

---


### DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference <a name="DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermMobileNetworkAttachedDataNetworkTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkAttachedDataNetwork.DataAzurermMobileNetworkAttachedDataNetworkTimeouts">DataAzurermMobileNetworkAttachedDataNetworkTimeouts</a>

---



