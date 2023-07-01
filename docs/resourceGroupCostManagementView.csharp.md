# `azurerm_resource_group_cost_management_view`

Refer to the Terraform Registory for docs: [`azurerm_resource_group_cost_management_view`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view).

# `resourceGroupCostManagementView` Submodule <a name="`resourceGroupCostManagementView` Submodule" id="@cdktf/provider-azurerm.resourceGroupCostManagementView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupCostManagementView <a name="ResourceGroupCostManagementView" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view azurerm_resource_group_cost_management_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementView(Construct Scope, string Id, ResourceGroupCostManagementViewConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig">ResourceGroupCostManagementViewConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig">ResourceGroupCostManagementViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putDataset">PutDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putKpi">PutKpi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putPivot">PutPivot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetKpi">ResetKpi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetPivot">ResetPivot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putDataset"></a>

```csharp
private void PutDataset(ResourceGroupCostManagementViewDataset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a>

---

##### `PutKpi` <a name="PutKpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putKpi"></a>

```csharp
private void PutKpi(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putKpi.parameter.value"></a>

- *Type:* object

---

##### `PutPivot` <a name="PutPivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putPivot"></a>

```csharp
private void PutPivot(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putPivot.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putTimeouts"></a>

```csharp
private void PutTimeouts(ResourceGroupCostManagementViewTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKpi` <a name="ResetKpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetKpi"></a>

```csharp
private void ResetKpi()
```

##### `ResetPivot` <a name="ResetPivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetPivot"></a>

```csharp
private void ResetPivot()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ResourceGroupCostManagementView.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ResourceGroupCostManagementView.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ResourceGroupCostManagementView.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference">ResourceGroupCostManagementViewDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.kpi">Kpi</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList">ResourceGroupCostManagementViewKpiList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.pivot">Pivot</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList">ResourceGroupCostManagementViewPivotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference">ResourceGroupCostManagementViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.accumulatedInput">AccumulatedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.chartTypeInput">ChartTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.kpiInput">KpiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.pivotInput">PivotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.reportTypeInput">ReportTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.resourceGroupIdInput">ResourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeframeInput">TimeframeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.accumulated">Accumulated</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.chartType">ChartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.reportType">ReportType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeframe">Timeframe</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.dataset"></a>

```csharp
public ResourceGroupCostManagementViewDatasetOutputReference Dataset { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference">ResourceGroupCostManagementViewDatasetOutputReference</a>

---

##### `Kpi`<sup>Required</sup> <a name="Kpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.kpi"></a>

```csharp
public ResourceGroupCostManagementViewKpiList Kpi { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList">ResourceGroupCostManagementViewKpiList</a>

---

##### `Pivot`<sup>Required</sup> <a name="Pivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.pivot"></a>

```csharp
public ResourceGroupCostManagementViewPivotList Pivot { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList">ResourceGroupCostManagementViewPivotList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeouts"></a>

```csharp
public ResourceGroupCostManagementViewTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference">ResourceGroupCostManagementViewTimeoutsOutputReference</a>

---

##### `AccumulatedInput`<sup>Optional</sup> <a name="AccumulatedInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.accumulatedInput"></a>

```csharp
public object AccumulatedInput { get; }
```

- *Type:* object

---

##### `ChartTypeInput`<sup>Optional</sup> <a name="ChartTypeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.chartTypeInput"></a>

```csharp
public string ChartTypeInput { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.datasetInput"></a>

```csharp
public ResourceGroupCostManagementViewDataset DatasetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KpiInput`<sup>Optional</sup> <a name="KpiInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.kpiInput"></a>

```csharp
public object KpiInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PivotInput`<sup>Optional</sup> <a name="PivotInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.pivotInput"></a>

```csharp
public object PivotInput { get; }
```

- *Type:* object

---

##### `ReportTypeInput`<sup>Optional</sup> <a name="ReportTypeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.reportTypeInput"></a>

```csharp
public string ReportTypeInput { get; }
```

- *Type:* string

---

##### `ResourceGroupIdInput`<sup>Optional</sup> <a name="ResourceGroupIdInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.resourceGroupIdInput"></a>

```csharp
public string ResourceGroupIdInput { get; }
```

- *Type:* string

---

##### `TimeframeInput`<sup>Optional</sup> <a name="TimeframeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeframeInput"></a>

```csharp
public string TimeframeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Accumulated`<sup>Required</sup> <a name="Accumulated" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.accumulated"></a>

```csharp
public object Accumulated { get; }
```

- *Type:* object

---

##### `ChartType`<sup>Required</sup> <a name="ChartType" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.chartType"></a>

```csharp
public string ChartType { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReportType`<sup>Required</sup> <a name="ReportType" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.reportType"></a>

```csharp
public string ReportType { get; }
```

- *Type:* string

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; }
```

- *Type:* string

---

##### `Timeframe`<sup>Required</sup> <a name="Timeframe" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeframe"></a>

```csharp
public string Timeframe { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupCostManagementViewConfig <a name="ResourceGroupCostManagementViewConfig" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Accumulated,
    string ChartType,
    ResourceGroupCostManagementViewDataset Dataset,
    string DisplayName,
    string Name,
    string ReportType,
    string ResourceGroupId,
    string Timeframe,
    string Id = null,
    object Kpi = null,
    object Pivot = null,
    ResourceGroupCostManagementViewTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.accumulated">Accumulated</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#accumulated ResourceGroupCostManagementView#accumulated}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.chartType">ChartType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#chart_type ResourceGroupCostManagementView#chart_type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#display_name ResourceGroupCostManagementView#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.reportType">ReportType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#report_type ResourceGroupCostManagementView#report_type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#resource_group_id ResourceGroupCostManagementView#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.timeframe">Timeframe</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#timeframe ResourceGroupCostManagementView#timeframe}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#id ResourceGroupCostManagementView#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.kpi">Kpi</a></code> | <code>object</code> | kpi block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.pivot">Pivot</a></code> | <code>object</code> | pivot block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Accumulated`<sup>Required</sup> <a name="Accumulated" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.accumulated"></a>

```csharp
public object Accumulated { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#accumulated ResourceGroupCostManagementView#accumulated}.

---

##### `ChartType`<sup>Required</sup> <a name="ChartType" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.chartType"></a>

```csharp
public string ChartType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#chart_type ResourceGroupCostManagementView#chart_type}.

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.dataset"></a>

```csharp
public ResourceGroupCostManagementViewDataset Dataset { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#dataset ResourceGroupCostManagementView#dataset}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#display_name ResourceGroupCostManagementView#display_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

##### `ReportType`<sup>Required</sup> <a name="ReportType" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.reportType"></a>

```csharp
public string ReportType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#report_type ResourceGroupCostManagementView#report_type}.

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#resource_group_id ResourceGroupCostManagementView#resource_group_id}.

---

##### `Timeframe`<sup>Required</sup> <a name="Timeframe" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.timeframe"></a>

```csharp
public string Timeframe { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#timeframe ResourceGroupCostManagementView#timeframe}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#id ResourceGroupCostManagementView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Kpi`<sup>Optional</sup> <a name="Kpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.kpi"></a>

```csharp
public object Kpi { get; set; }
```

- *Type:* object

kpi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#kpi ResourceGroupCostManagementView#kpi}

---

##### `Pivot`<sup>Optional</sup> <a name="Pivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.pivot"></a>

```csharp
public object Pivot { get; set; }
```

- *Type:* object

pivot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#pivot ResourceGroupCostManagementView#pivot}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.timeouts"></a>

```csharp
public ResourceGroupCostManagementViewTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#timeouts ResourceGroupCostManagementView#timeouts}

---

### ResourceGroupCostManagementViewDataset <a name="ResourceGroupCostManagementViewDataset" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewDataset {
    object Aggregation,
    string Granularity,
    object Grouping = null,
    object Sorting = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.aggregation">Aggregation</a></code> | <code>object</code> | aggregation block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.granularity">Granularity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#granularity ResourceGroupCostManagementView#granularity}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.grouping">Grouping</a></code> | <code>object</code> | grouping block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.sorting">Sorting</a></code> | <code>object</code> | sorting block. |

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.aggregation"></a>

```csharp
public object Aggregation { get; set; }
```

- *Type:* object

aggregation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#aggregation ResourceGroupCostManagementView#aggregation}

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.granularity"></a>

```csharp
public string Granularity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#granularity ResourceGroupCostManagementView#granularity}.

---

##### `Grouping`<sup>Optional</sup> <a name="Grouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.grouping"></a>

```csharp
public object Grouping { get; set; }
```

- *Type:* object

grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#grouping ResourceGroupCostManagementView#grouping}

---

##### `Sorting`<sup>Optional</sup> <a name="Sorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.sorting"></a>

```csharp
public object Sorting { get; set; }
```

- *Type:* object

sorting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#sorting ResourceGroupCostManagementView#sorting}

---

### ResourceGroupCostManagementViewDatasetAggregation <a name="ResourceGroupCostManagementViewDatasetAggregation" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewDatasetAggregation {
    string ColumnName,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#column_name ResourceGroupCostManagementView#column_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#column_name ResourceGroupCostManagementView#column_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

### ResourceGroupCostManagementViewDatasetGrouping <a name="ResourceGroupCostManagementViewDatasetGrouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewDatasetGrouping {
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}.

---

### ResourceGroupCostManagementViewDatasetSorting <a name="ResourceGroupCostManagementViewDatasetSorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewDatasetSorting {
    string Direction,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting.property.direction">Direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#direction ResourceGroupCostManagementView#direction}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#direction ResourceGroupCostManagementView#direction}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

### ResourceGroupCostManagementViewKpi <a name="ResourceGroupCostManagementViewKpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewKpi {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}.

---

### ResourceGroupCostManagementViewPivot <a name="ResourceGroupCostManagementViewPivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewPivot {
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}.

---

### ResourceGroupCostManagementViewTimeouts <a name="ResourceGroupCostManagementViewTimeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#create ResourceGroupCostManagementView#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#delete ResourceGroupCostManagementView#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#read ResourceGroupCostManagementView#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#update ResourceGroupCostManagementView#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#create ResourceGroupCostManagementView#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#delete ResourceGroupCostManagementView#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#read ResourceGroupCostManagementView#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/resource_group_cost_management_view#update ResourceGroupCostManagementView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupCostManagementViewDatasetAggregationList <a name="ResourceGroupCostManagementViewDatasetAggregationList" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewDatasetAggregationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.get"></a>

```csharp
private ResourceGroupCostManagementViewDatasetAggregationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceGroupCostManagementViewDatasetAggregationOutputReference <a name="ResourceGroupCostManagementViewDatasetAggregationOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewDatasetAggregationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceGroupCostManagementViewDatasetGroupingList <a name="ResourceGroupCostManagementViewDatasetGroupingList" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewDatasetGroupingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.get"></a>

```csharp
private ResourceGroupCostManagementViewDatasetGroupingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceGroupCostManagementViewDatasetGroupingOutputReference <a name="ResourceGroupCostManagementViewDatasetGroupingOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewDatasetGroupingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceGroupCostManagementViewDatasetOutputReference <a name="ResourceGroupCostManagementViewDatasetOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putAggregation">PutAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putGrouping">PutGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putSorting">PutSorting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resetGrouping">ResetGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resetSorting">ResetSorting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAggregation` <a name="PutAggregation" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putAggregation"></a>

```csharp
private void PutAggregation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putAggregation.parameter.value"></a>

- *Type:* object

---

##### `PutGrouping` <a name="PutGrouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putGrouping"></a>

```csharp
private void PutGrouping(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putGrouping.parameter.value"></a>

- *Type:* object

---

##### `PutSorting` <a name="PutSorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putSorting"></a>

```csharp
private void PutSorting(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putSorting.parameter.value"></a>

- *Type:* object

---

##### `ResetGrouping` <a name="ResetGrouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resetGrouping"></a>

```csharp
private void ResetGrouping()
```

##### `ResetSorting` <a name="ResetSorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resetSorting"></a>

```csharp
private void ResetSorting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.aggregation">Aggregation</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList">ResourceGroupCostManagementViewDatasetAggregationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.grouping">Grouping</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList">ResourceGroupCostManagementViewDatasetGroupingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.sorting">Sorting</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList">ResourceGroupCostManagementViewDatasetSortingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.granularityInput">GranularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.groupingInput">GroupingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.sortingInput">SortingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.granularity">Granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.aggregation"></a>

```csharp
public ResourceGroupCostManagementViewDatasetAggregationList Aggregation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList">ResourceGroupCostManagementViewDatasetAggregationList</a>

---

##### `Grouping`<sup>Required</sup> <a name="Grouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.grouping"></a>

```csharp
public ResourceGroupCostManagementViewDatasetGroupingList Grouping { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList">ResourceGroupCostManagementViewDatasetGroupingList</a>

---

##### `Sorting`<sup>Required</sup> <a name="Sorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.sorting"></a>

```csharp
public ResourceGroupCostManagementViewDatasetSortingList Sorting { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList">ResourceGroupCostManagementViewDatasetSortingList</a>

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.aggregationInput"></a>

```csharp
public object AggregationInput { get; }
```

- *Type:* object

---

##### `GranularityInput`<sup>Optional</sup> <a name="GranularityInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.granularityInput"></a>

```csharp
public string GranularityInput { get; }
```

- *Type:* string

---

##### `GroupingInput`<sup>Optional</sup> <a name="GroupingInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.groupingInput"></a>

```csharp
public object GroupingInput { get; }
```

- *Type:* object

---

##### `SortingInput`<sup>Optional</sup> <a name="SortingInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.sortingInput"></a>

```csharp
public object SortingInput { get; }
```

- *Type:* object

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.granularity"></a>

```csharp
public string Granularity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.internalValue"></a>

```csharp
public ResourceGroupCostManagementViewDataset InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a>

---


### ResourceGroupCostManagementViewDatasetSortingList <a name="ResourceGroupCostManagementViewDatasetSortingList" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewDatasetSortingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.get"></a>

```csharp
private ResourceGroupCostManagementViewDatasetSortingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceGroupCostManagementViewDatasetSortingOutputReference <a name="ResourceGroupCostManagementViewDatasetSortingOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewDatasetSortingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceGroupCostManagementViewKpiList <a name="ResourceGroupCostManagementViewKpiList" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewKpiList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.get"></a>

```csharp
private ResourceGroupCostManagementViewKpiOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceGroupCostManagementViewKpiOutputReference <a name="ResourceGroupCostManagementViewKpiOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewKpiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceGroupCostManagementViewPivotList <a name="ResourceGroupCostManagementViewPivotList" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewPivotList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.get"></a>

```csharp
private ResourceGroupCostManagementViewPivotOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceGroupCostManagementViewPivotOutputReference <a name="ResourceGroupCostManagementViewPivotOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewPivotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResourceGroupCostManagementViewTimeoutsOutputReference <a name="ResourceGroupCostManagementViewTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceGroupCostManagementViewTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



