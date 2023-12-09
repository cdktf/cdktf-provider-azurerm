# `dataAzurermConsumptionBudgetResourceGroup` Submodule <a name="`dataAzurermConsumptionBudgetResourceGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermConsumptionBudgetResourceGroup <a name="DataAzurermConsumptionBudgetResourceGroup" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/consumption_budget_resource_group azurerm_consumption_budget_resource_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroup(Construct Scope, string Id, DataAzurermConsumptionBudgetResourceGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig">DataAzurermConsumptionBudgetResourceGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig">DataAzurermConsumptionBudgetResourceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermConsumptionBudgetResourceGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermConsumptionBudgetResourceGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermConsumptionBudgetResourceGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermConsumptionBudgetResourceGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermConsumptionBudgetResourceGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermConsumptionBudgetResourceGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermConsumptionBudgetResourceGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermConsumptionBudgetResourceGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermConsumptionBudgetResourceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/consumption_budget_resource_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermConsumptionBudgetResourceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.amount">Amount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList">DataAzurermConsumptionBudgetResourceGroupFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList">DataAzurermConsumptionBudgetResourceGroupNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeGrain">TimeGrain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference">DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList">DataAzurermConsumptionBudgetResourceGroupTimePeriodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.resourceGroupIdInput">ResourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.amount"></a>

```csharp
public double Amount { get; }
```

- *Type:* double

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.filter"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList">DataAzurermConsumptionBudgetResourceGroupFilterList</a>

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.notification"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupNotificationList Notification { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList">DataAzurermConsumptionBudgetResourceGroupNotificationList</a>

---

##### `TimeGrain`<sup>Required</sup> <a name="TimeGrain" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeGrain"></a>

```csharp
public string TimeGrain { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeouts"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference">DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference</a>

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timePeriod"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupTimePeriodList TimePeriod { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList">DataAzurermConsumptionBudgetResourceGroupTimePeriodList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupIdInput`<sup>Optional</sup> <a name="ResourceGroupIdInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.resourceGroupIdInput"></a>

```csharp
public string ResourceGroupIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermConsumptionBudgetResourceGroupConfig <a name="DataAzurermConsumptionBudgetResourceGroupConfig" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGroupId,
    string Id = null,
    DataAzurermConsumptionBudgetResourceGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/consumption_budget_resource_group#name DataAzurermConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/consumption_budget_resource_group#resource_group_id DataAzurermConsumptionBudgetResourceGroup#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/consumption_budget_resource_group#id DataAzurermConsumptionBudgetResourceGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/consumption_budget_resource_group#name DataAzurermConsumptionBudgetResourceGroup#name}.

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/consumption_budget_resource_group#resource_group_id DataAzurermConsumptionBudgetResourceGroup#resource_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/consumption_budget_resource_group#id DataAzurermConsumptionBudgetResourceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.timeouts"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/consumption_budget_resource_group#timeouts DataAzurermConsumptionBudgetResourceGroup#timeouts}

---

### DataAzurermConsumptionBudgetResourceGroupFilter <a name="DataAzurermConsumptionBudgetResourceGroupFilter" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilter {

};
```


### DataAzurermConsumptionBudgetResourceGroupFilterDimension <a name="DataAzurermConsumptionBudgetResourceGroupFilterDimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterDimension {

};
```


### DataAzurermConsumptionBudgetResourceGroupFilterNot <a name="DataAzurermConsumptionBudgetResourceGroupFilterNot" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterNot {

};
```


### DataAzurermConsumptionBudgetResourceGroupFilterNotDimension <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotDimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterNotDimension {

};
```


### DataAzurermConsumptionBudgetResourceGroupFilterNotTag <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotTag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterNotTag {

};
```


### DataAzurermConsumptionBudgetResourceGroupFilterTag <a name="DataAzurermConsumptionBudgetResourceGroupFilterTag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterTag {

};
```


### DataAzurermConsumptionBudgetResourceGroupNotification <a name="DataAzurermConsumptionBudgetResourceGroupNotification" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupNotification {

};
```


### DataAzurermConsumptionBudgetResourceGroupTimeouts <a name="DataAzurermConsumptionBudgetResourceGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/consumption_budget_resource_group#read DataAzurermConsumptionBudgetResourceGroup#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/consumption_budget_resource_group#read DataAzurermConsumptionBudgetResourceGroup#read}.

---

### DataAzurermConsumptionBudgetResourceGroupTimePeriod <a name="DataAzurermConsumptionBudgetResourceGroupTimePeriod" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupTimePeriod {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermConsumptionBudgetResourceGroupFilterDimensionList <a name="DataAzurermConsumptionBudgetResourceGroupFilterDimensionList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterDimensionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.get"></a>

```csharp
private DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimension">DataAzurermConsumptionBudgetResourceGroupFilterDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.internalValue"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupFilterDimension InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimension">DataAzurermConsumptionBudgetResourceGroupFilterDimension</a>

---


### DataAzurermConsumptionBudgetResourceGroupFilterList <a name="DataAzurermConsumptionBudgetResourceGroupFilterList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.get"></a>

```csharp
private DataAzurermConsumptionBudgetResourceGroupFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.get"></a>

```csharp
private DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimension">DataAzurermConsumptionBudgetResourceGroupFilterNotDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.internalValue"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupFilterNotDimension InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimension">DataAzurermConsumptionBudgetResourceGroupFilterNotDimension</a>

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotList <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterNotList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.get"></a>

```csharp
private DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList">DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList">DataAzurermConsumptionBudgetResourceGroupFilterNotTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNot">DataAzurermConsumptionBudgetResourceGroupFilterNot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.dimension"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList Dimension { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList">DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.tag"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupFilterNotTagList Tag { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList">DataAzurermConsumptionBudgetResourceGroupFilterNotTagList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.internalValue"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupFilterNot InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNot">DataAzurermConsumptionBudgetResourceGroupFilterNot</a>

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotTagList <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotTagList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterNotTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.get"></a>

```csharp
private DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTag">DataAzurermConsumptionBudgetResourceGroupFilterNotTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.internalValue"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupFilterNotTag InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTag">DataAzurermConsumptionBudgetResourceGroupFilterNotTag</a>

---


### DataAzurermConsumptionBudgetResourceGroupFilterOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList">DataAzurermConsumptionBudgetResourceGroupFilterDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.not">Not</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList">DataAzurermConsumptionBudgetResourceGroupFilterNotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList">DataAzurermConsumptionBudgetResourceGroupFilterTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilter">DataAzurermConsumptionBudgetResourceGroupFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.dimension"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupFilterDimensionList Dimension { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList">DataAzurermConsumptionBudgetResourceGroupFilterDimensionList</a>

---

##### `Not`<sup>Required</sup> <a name="Not" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.not"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupFilterNotList Not { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList">DataAzurermConsumptionBudgetResourceGroupFilterNotList</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.tag"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupFilterTagList Tag { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList">DataAzurermConsumptionBudgetResourceGroupFilterTagList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.internalValue"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilter">DataAzurermConsumptionBudgetResourceGroupFilter</a>

---


### DataAzurermConsumptionBudgetResourceGroupFilterTagList <a name="DataAzurermConsumptionBudgetResourceGroupFilterTagList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.get"></a>

```csharp
private DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTag">DataAzurermConsumptionBudgetResourceGroupFilterTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.internalValue"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupFilterTag InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTag">DataAzurermConsumptionBudgetResourceGroupFilterTag</a>

---


### DataAzurermConsumptionBudgetResourceGroupNotificationList <a name="DataAzurermConsumptionBudgetResourceGroupNotificationList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupNotificationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.get"></a>

```csharp
private DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmails">ContactEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroups">ContactGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRoles">ContactRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdType">ThresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotification">DataAzurermConsumptionBudgetResourceGroupNotification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContactEmails`<sup>Required</sup> <a name="ContactEmails" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmails"></a>

```csharp
public string[] ContactEmails { get; }
```

- *Type:* string[]

---

##### `ContactGroups`<sup>Required</sup> <a name="ContactGroups" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroups"></a>

```csharp
public string[] ContactGroups { get; }
```

- *Type:* string[]

---

##### `ContactRoles`<sup>Required</sup> <a name="ContactRoles" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRoles"></a>

```csharp
public string[] ContactRoles { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `ThresholdType`<sup>Required</sup> <a name="ThresholdType" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdType"></a>

```csharp
public string ThresholdType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.internalValue"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupNotification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotification">DataAzurermConsumptionBudgetResourceGroupNotification</a>

---


### DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAzurermConsumptionBudgetResourceGroupTimePeriodList <a name="DataAzurermConsumptionBudgetResourceGroupTimePeriodList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupTimePeriodList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.get"></a>

```csharp
private DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriod">DataAzurermConsumptionBudgetResourceGroupTimePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.internalValue"></a>

```csharp
public DataAzurermConsumptionBudgetResourceGroupTimePeriod InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriod">DataAzurermConsumptionBudgetResourceGroupTimePeriod</a>

---



