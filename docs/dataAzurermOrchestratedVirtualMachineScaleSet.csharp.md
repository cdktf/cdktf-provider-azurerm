# `data_azurerm_orchestrated_virtual_machine_scale_set`

Refer to the Terraform Registory for docs: [`data_azurerm_orchestrated_virtual_machine_scale_set`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/orchestrated_virtual_machine_scale_set).

# `dataAzurermOrchestratedVirtualMachineScaleSet` Submodule <a name="`dataAzurermOrchestratedVirtualMachineScaleSet` Submodule" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOrchestratedVirtualMachineScaleSet <a name="DataAzurermOrchestratedVirtualMachineScaleSet" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/orchestrated_virtual_machine_scale_set azurerm_orchestrated_virtual_machine_scale_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSet(Construct Scope, string Id, DataAzurermOrchestratedVirtualMachineScaleSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig">DataAzurermOrchestratedVirtualMachineScaleSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig">DataAzurermOrchestratedVirtualMachineScaleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermOrchestratedVirtualMachineScaleSetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOrchestratedVirtualMachineScaleSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOrchestratedVirtualMachineScaleSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermOrchestratedVirtualMachineScaleSet.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList">DataAzurermOrchestratedVirtualMachineScaleSetIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference">DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.identity"></a>

```csharp
public DataAzurermOrchestratedVirtualMachineScaleSetIdentityList Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList">DataAzurermOrchestratedVirtualMachineScaleSetIdentityList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.networkInterface"></a>

```csharp
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeouts"></a>

```csharp
public DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference">DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOrchestratedVirtualMachineScaleSetConfig <a name="DataAzurermOrchestratedVirtualMachineScaleSetConfig" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetConfig {
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
    DataAzurermOrchestratedVirtualMachineScaleSetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/orchestrated_virtual_machine_scale_set#name DataAzurermOrchestratedVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/orchestrated_virtual_machine_scale_set#resource_group_name DataAzurermOrchestratedVirtualMachineScaleSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/orchestrated_virtual_machine_scale_set#id DataAzurermOrchestratedVirtualMachineScaleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/orchestrated_virtual_machine_scale_set#name DataAzurermOrchestratedVirtualMachineScaleSet#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/orchestrated_virtual_machine_scale_set#resource_group_name DataAzurermOrchestratedVirtualMachineScaleSet#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/orchestrated_virtual_machine_scale_set#id DataAzurermOrchestratedVirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.timeouts"></a>

```csharp
public DataAzurermOrchestratedVirtualMachineScaleSetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/orchestrated_virtual_machine_scale_set#timeouts DataAzurermOrchestratedVirtualMachineScaleSet#timeouts}

---

### DataAzurermOrchestratedVirtualMachineScaleSetIdentity <a name="DataAzurermOrchestratedVirtualMachineScaleSetIdentity" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetIdentity {

};
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface {

};
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration {

};
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress {

};
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag {

};
```


### DataAzurermOrchestratedVirtualMachineScaleSetTimeouts <a name="DataAzurermOrchestratedVirtualMachineScaleSetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/orchestrated_virtual_machine_scale_set#read DataAzurermOrchestratedVirtualMachineScaleSet#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/orchestrated_virtual_machine_scale_set#read DataAzurermOrchestratedVirtualMachineScaleSet#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOrchestratedVirtualMachineScaleSetIdentityList <a name="DataAzurermOrchestratedVirtualMachineScaleSetIdentityList" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.get"></a>

```csharp
private DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity">DataAzurermOrchestratedVirtualMachineScaleSetIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.internalValue"></a>

```csharp
public DataAzurermOrchestratedVirtualMachineScaleSetIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity">DataAzurermOrchestratedVirtualMachineScaleSetIdentity</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get"></a>

```csharp
private DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds">ApplicationGatewayBackendAddressPoolIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds">ApplicationSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds">LoadBalancerBackendAddressPoolIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds">LoadBalancerInboundNatRulesIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary">Primary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress">PublicIpAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationGatewayBackendAddressPoolIds`<sup>Required</sup> <a name="ApplicationGatewayBackendAddressPoolIds" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds"></a>

```csharp
public string[] ApplicationGatewayBackendAddressPoolIds { get; }
```

- *Type:* string[]

---

##### `ApplicationSecurityGroupIds`<sup>Required</sup> <a name="ApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds"></a>

```csharp
public string[] ApplicationSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `LoadBalancerBackendAddressPoolIds`<sup>Required</sup> <a name="LoadBalancerBackendAddressPoolIds" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds"></a>

```csharp
public string[] LoadBalancerBackendAddressPoolIds { get; }
```

- *Type:* string[]

---

##### `LoadBalancerInboundNatRulesIds`<sup>Required</sup> <a name="LoadBalancerInboundNatRulesIds" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds"></a>

```csharp
public string[] LoadBalancerInboundNatRulesIds { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary"></a>

```csharp
public IResolvable Primary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress"></a>

```csharp
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList PublicIpAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get"></a>

```csharp
private DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue"></a>

```csharp
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get"></a>

```csharp
private DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel">DomainNameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag">IpTag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId">PublicIpPrefixId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainNameLabel`<sup>Required</sup> <a name="DomainNameLabel" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel"></a>

```csharp
public string DomainNameLabel { get; }
```

- *Type:* string

---

##### `IdleTimeoutInMinutes`<sup>Required</sup> <a name="IdleTimeoutInMinutes" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes"></a>

```csharp
public double IdleTimeoutInMinutes { get; }
```

- *Type:* double

---

##### `IpTag`<sup>Required</sup> <a name="IpTag" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag"></a>

```csharp
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList IpTag { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicIpPrefixId`<sup>Required</sup> <a name="PublicIpPrefixId" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId"></a>

```csharp
public string PublicIpPrefixId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue"></a>

```csharp
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.get"></a>

```csharp
private DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.acceleratedNetworkingEnabled">AcceleratedNetworkingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipForwardingEnabled">IpForwardingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary">Primary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratedNetworkingEnabled`<sup>Required</sup> <a name="AcceleratedNetworkingEnabled" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.acceleratedNetworkingEnabled"></a>

```csharp
public IResolvable AcceleratedNetworkingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; }
```

- *Type:* string[]

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration"></a>

```csharp
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList IpConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a>

---

##### `IpForwardingEnabled`<sup>Required</sup> <a name="IpForwardingEnabled" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipForwardingEnabled"></a>

```csharp
public IResolvable IpForwardingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupId`<sup>Required</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId"></a>

```csharp
public string NetworkSecurityGroupId { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary"></a>

```csharp
public IResolvable Primary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



