# `azurerm_consumption_budget_management_group`

Refer to the Terraform Registory for docs: [`azurerm_consumption_budget_management_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group).

# `consumptionBudgetManagementGroup` Submodule <a name="`consumptionBudgetManagementGroup` Submodule" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsumptionBudgetManagementGroup <a name="ConsumptionBudgetManagementGroup" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group azurerm_consumption_budget_management_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroup(Construct Scope, string Id, ConsumptionBudgetManagementGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig">ConsumptionBudgetManagementGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig">ConsumptionBudgetManagementGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putTimePeriod">PutTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetTimeGrain">ResetTimeGrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putFilter"></a>

```csharp
private void PutFilter(ConsumptionBudgetManagementGroupFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter">ConsumptionBudgetManagementGroupFilter</a>

---

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putNotification"></a>

```csharp
private void PutNotification(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putNotification.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(ConsumptionBudgetManagementGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts">ConsumptionBudgetManagementGroupTimeouts</a>

---

##### `PutTimePeriod` <a name="PutTimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putTimePeriod"></a>

```csharp
private void PutTimePeriod(ConsumptionBudgetManagementGroupTimePeriod Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.putTimePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod">ConsumptionBudgetManagementGroupTimePeriod</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeGrain` <a name="ResetTimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetTimeGrain"></a>

```csharp
private void ResetTimeGrain()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConsumptionBudgetManagementGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ConsumptionBudgetManagementGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ConsumptionBudgetManagementGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ConsumptionBudgetManagementGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ConsumptionBudgetManagementGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ConsumptionBudgetManagementGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConsumptionBudgetManagementGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConsumptionBudgetManagementGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ConsumptionBudgetManagementGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference">ConsumptionBudgetManagementGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList">ConsumptionBudgetManagementGroupNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference">ConsumptionBudgetManagementGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference">ConsumptionBudgetManagementGroupTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.amountInput">AmountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter">ConsumptionBudgetManagementGroupFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.managementGroupIdInput">ManagementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.notificationInput">NotificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeGrainInput">TimeGrainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timePeriodInput">TimePeriodInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod">ConsumptionBudgetManagementGroupTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.amount">Amount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.managementGroupId">ManagementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeGrain">TimeGrain</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.filter"></a>

```csharp
public ConsumptionBudgetManagementGroupFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference">ConsumptionBudgetManagementGroupFilterOutputReference</a>

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.notification"></a>

```csharp
public ConsumptionBudgetManagementGroupNotificationList Notification { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList">ConsumptionBudgetManagementGroupNotificationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeouts"></a>

```csharp
public ConsumptionBudgetManagementGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference">ConsumptionBudgetManagementGroupTimeoutsOutputReference</a>

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timePeriod"></a>

```csharp
public ConsumptionBudgetManagementGroupTimePeriodOutputReference TimePeriod { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference">ConsumptionBudgetManagementGroupTimePeriodOutputReference</a>

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.amountInput"></a>

```csharp
public double AmountInput { get; }
```

- *Type:* double

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.filterInput"></a>

```csharp
public ConsumptionBudgetManagementGroupFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter">ConsumptionBudgetManagementGroupFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagementGroupIdInput`<sup>Optional</sup> <a name="ManagementGroupIdInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.managementGroupIdInput"></a>

```csharp
public string ManagementGroupIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.notificationInput"></a>

```csharp
public object NotificationInput { get; }
```

- *Type:* object

---

##### `TimeGrainInput`<sup>Optional</sup> <a name="TimeGrainInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeGrainInput"></a>

```csharp
public string TimeGrainInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimePeriodInput`<sup>Optional</sup> <a name="TimePeriodInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timePeriodInput"></a>

```csharp
public ConsumptionBudgetManagementGroupTimePeriod TimePeriodInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod">ConsumptionBudgetManagementGroupTimePeriod</a>

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.amount"></a>

```csharp
public double Amount { get; }
```

- *Type:* double

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.managementGroupId"></a>

```csharp
public string ManagementGroupId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TimeGrain`<sup>Required</sup> <a name="TimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.timeGrain"></a>

```csharp
public string TimeGrain { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConsumptionBudgetManagementGroupConfig <a name="ConsumptionBudgetManagementGroupConfig" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double Amount,
    string ManagementGroupId,
    string Name,
    object Notification,
    ConsumptionBudgetManagementGroupTimePeriod TimePeriod,
    string Etag = null,
    ConsumptionBudgetManagementGroupFilter Filter = null,
    string Id = null,
    string TimeGrain = null,
    ConsumptionBudgetManagementGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.amount">Amount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#amount ConsumptionBudgetManagementGroup#amount}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.managementGroupId">ManagementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#management_group_id ConsumptionBudgetManagementGroup#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.notification">Notification</a></code> | <code>object</code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod">ConsumptionBudgetManagementGroupTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.etag">Etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#etag ConsumptionBudgetManagementGroup#etag}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter">ConsumptionBudgetManagementGroupFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#id ConsumptionBudgetManagementGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.timeGrain">TimeGrain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#time_grain ConsumptionBudgetManagementGroup#time_grain}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts">ConsumptionBudgetManagementGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.amount"></a>

```csharp
public double Amount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#amount ConsumptionBudgetManagementGroup#amount}.

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.managementGroupId"></a>

```csharp
public string ManagementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#management_group_id ConsumptionBudgetManagementGroup#management_group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}.

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.notification"></a>

```csharp
public object Notification { get; set; }
```

- *Type:* object

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#notification ConsumptionBudgetManagementGroup#notification}

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.timePeriod"></a>

```csharp
public ConsumptionBudgetManagementGroupTimePeriod TimePeriod { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod">ConsumptionBudgetManagementGroupTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#time_period ConsumptionBudgetManagementGroup#time_period}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#etag ConsumptionBudgetManagementGroup#etag}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.filter"></a>

```csharp
public ConsumptionBudgetManagementGroupFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter">ConsumptionBudgetManagementGroupFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#filter ConsumptionBudgetManagementGroup#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#id ConsumptionBudgetManagementGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeGrain`<sup>Optional</sup> <a name="TimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.timeGrain"></a>

```csharp
public string TimeGrain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#time_grain ConsumptionBudgetManagementGroup#time_grain}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupConfig.property.timeouts"></a>

```csharp
public ConsumptionBudgetManagementGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts">ConsumptionBudgetManagementGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#timeouts ConsumptionBudgetManagementGroup#timeouts}

---

### ConsumptionBudgetManagementGroupFilter <a name="ConsumptionBudgetManagementGroupFilter" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupFilter {
    object Dimension = null,
    ConsumptionBudgetManagementGroupFilterNot Not = null,
    object Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter.property.dimension">Dimension</a></code> | <code>object</code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter.property.not">Not</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot">ConsumptionBudgetManagementGroupFilterNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter.property.tag">Tag</a></code> | <code>object</code> | tag block. |

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter.property.dimension"></a>

```csharp
public object Dimension { get; set; }
```

- *Type:* object

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#dimension ConsumptionBudgetManagementGroup#dimension}

---

##### `Not`<sup>Optional</sup> <a name="Not" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter.property.not"></a>

```csharp
public ConsumptionBudgetManagementGroupFilterNot Not { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot">ConsumptionBudgetManagementGroupFilterNot</a>

not block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#not ConsumptionBudgetManagementGroup#not}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter.property.tag"></a>

```csharp
public object Tag { get; set; }
```

- *Type:* object

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#tag ConsumptionBudgetManagementGroup#tag}

---

### ConsumptionBudgetManagementGroupFilterDimension <a name="ConsumptionBudgetManagementGroupFilterDimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupFilterDimension {
    string Name,
    string[] Values,
    string Operator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimension.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}.

---

### ConsumptionBudgetManagementGroupFilterNot <a name="ConsumptionBudgetManagementGroupFilterNot" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupFilterNot {
    ConsumptionBudgetManagementGroupFilterNotDimension Dimension = null,
    ConsumptionBudgetManagementGroupFilterNotTag Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension">ConsumptionBudgetManagementGroupFilterNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag">ConsumptionBudgetManagementGroupFilterNotTag</a></code> | tag block. |

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot.property.dimension"></a>

```csharp
public ConsumptionBudgetManagementGroupFilterNotDimension Dimension { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension">ConsumptionBudgetManagementGroupFilterNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#dimension ConsumptionBudgetManagementGroup#dimension}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot.property.tag"></a>

```csharp
public ConsumptionBudgetManagementGroupFilterNotTag Tag { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag">ConsumptionBudgetManagementGroupFilterNotTag</a>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#tag ConsumptionBudgetManagementGroup#tag}

---

### ConsumptionBudgetManagementGroupFilterNotDimension <a name="ConsumptionBudgetManagementGroupFilterNotDimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupFilterNotDimension {
    string Name,
    string[] Values,
    string Operator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}.

---

### ConsumptionBudgetManagementGroupFilterNotTag <a name="ConsumptionBudgetManagementGroupFilterNotTag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupFilterNotTag {
    string Name,
    string[] Values,
    string Operator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}.

---

### ConsumptionBudgetManagementGroupFilterTag <a name="ConsumptionBudgetManagementGroupFilterTag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupFilterTag {
    string Name,
    string[] Values,
    string Operator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#name ConsumptionBudgetManagementGroup#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#values ConsumptionBudgetManagementGroup#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTag.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}.

---

### ConsumptionBudgetManagementGroupNotification <a name="ConsumptionBudgetManagementGroupNotification" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupNotification {
    string[] ContactEmails,
    string Operator,
    double Threshold,
    object Enabled = null,
    string ThresholdType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.contactEmails">ContactEmails</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#contact_emails ConsumptionBudgetManagementGroup#contact_emails}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#threshold ConsumptionBudgetManagementGroup#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#enabled ConsumptionBudgetManagementGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.thresholdType">ThresholdType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#threshold_type ConsumptionBudgetManagementGroup#threshold_type}. |

---

##### `ContactEmails`<sup>Required</sup> <a name="ContactEmails" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.contactEmails"></a>

```csharp
public string[] ContactEmails { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#contact_emails ConsumptionBudgetManagementGroup#contact_emails}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#operator ConsumptionBudgetManagementGroup#operator}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#threshold ConsumptionBudgetManagementGroup#threshold}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#enabled ConsumptionBudgetManagementGroup#enabled}.

---

##### `ThresholdType`<sup>Optional</sup> <a name="ThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotification.property.thresholdType"></a>

```csharp
public string ThresholdType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#threshold_type ConsumptionBudgetManagementGroup#threshold_type}.

---

### ConsumptionBudgetManagementGroupTimeouts <a name="ConsumptionBudgetManagementGroupTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#create ConsumptionBudgetManagementGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#delete ConsumptionBudgetManagementGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#read ConsumptionBudgetManagementGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#update ConsumptionBudgetManagementGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#create ConsumptionBudgetManagementGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#delete ConsumptionBudgetManagementGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#read ConsumptionBudgetManagementGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#update ConsumptionBudgetManagementGroup#update}.

---

### ConsumptionBudgetManagementGroupTimePeriod <a name="ConsumptionBudgetManagementGroupTimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupTimePeriod {
    string StartDate,
    string EndDate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod.property.startDate">StartDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#start_date ConsumptionBudgetManagementGroup#start_date}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod.property.endDate">EndDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#end_date ConsumptionBudgetManagementGroup#end_date}. |

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod.property.startDate"></a>

```csharp
public string StartDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#start_date ConsumptionBudgetManagementGroup#start_date}.

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/consumption_budget_management_group#end_date ConsumptionBudgetManagementGroup#end_date}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConsumptionBudgetManagementGroupFilterDimensionList <a name="ConsumptionBudgetManagementGroupFilterDimensionList" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupFilterDimensionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.get"></a>

```csharp
private ConsumptionBudgetManagementGroupFilterDimensionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsumptionBudgetManagementGroupFilterDimensionOutputReference <a name="ConsumptionBudgetManagementGroupFilterDimensionOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupFilterDimensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference <a name="ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension">ConsumptionBudgetManagementGroupFilterNotDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference.property.internalValue"></a>

```csharp
public ConsumptionBudgetManagementGroupFilterNotDimension InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension">ConsumptionBudgetManagementGroupFilterNotDimension</a>

---


### ConsumptionBudgetManagementGroupFilterNotOutputReference <a name="ConsumptionBudgetManagementGroupFilterNotOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupFilterNotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.putDimension"></a>

```csharp
private void PutDimension(ConsumptionBudgetManagementGroupFilterNotDimension Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension">ConsumptionBudgetManagementGroupFilterNotDimension</a>

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.putTag"></a>

```csharp
private void PutTag(ConsumptionBudgetManagementGroupFilterNotTag Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.putTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag">ConsumptionBudgetManagementGroupFilterNotTag</a>

---

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.resetDimension"></a>

```csharp
private void ResetDimension()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference">ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference">ConsumptionBudgetManagementGroupFilterNotTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension">ConsumptionBudgetManagementGroupFilterNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.tagInput">TagInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag">ConsumptionBudgetManagementGroupFilterNotTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot">ConsumptionBudgetManagementGroupFilterNot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.dimension"></a>

```csharp
public ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference Dimension { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference">ConsumptionBudgetManagementGroupFilterNotDimensionOutputReference</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.tag"></a>

```csharp
public ConsumptionBudgetManagementGroupFilterNotTagOutputReference Tag { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference">ConsumptionBudgetManagementGroupFilterNotTagOutputReference</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.dimensionInput"></a>

```csharp
public ConsumptionBudgetManagementGroupFilterNotDimension DimensionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotDimension">ConsumptionBudgetManagementGroupFilterNotDimension</a>

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.tagInput"></a>

```csharp
public ConsumptionBudgetManagementGroupFilterNotTag TagInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag">ConsumptionBudgetManagementGroupFilterNotTag</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference.property.internalValue"></a>

```csharp
public ConsumptionBudgetManagementGroupFilterNot InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot">ConsumptionBudgetManagementGroupFilterNot</a>

---


### ConsumptionBudgetManagementGroupFilterNotTagOutputReference <a name="ConsumptionBudgetManagementGroupFilterNotTagOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupFilterNotTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag">ConsumptionBudgetManagementGroupFilterNotTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTagOutputReference.property.internalValue"></a>

```csharp
public ConsumptionBudgetManagementGroupFilterNotTag InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotTag">ConsumptionBudgetManagementGroupFilterNotTag</a>

---


### ConsumptionBudgetManagementGroupFilterOutputReference <a name="ConsumptionBudgetManagementGroupFilterOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putNot">PutNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resetNot">ResetNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putDimension"></a>

```csharp
private void PutDimension(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putDimension.parameter.value"></a>

- *Type:* object

---

##### `PutNot` <a name="PutNot" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putNot"></a>

```csharp
private void PutNot(ConsumptionBudgetManagementGroupFilterNot Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putNot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot">ConsumptionBudgetManagementGroupFilterNot</a>

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putTag"></a>

```csharp
private void PutTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.putTag.parameter.value"></a>

- *Type:* object

---

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resetDimension"></a>

```csharp
private void ResetDimension()
```

##### `ResetNot` <a name="ResetNot" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resetNot"></a>

```csharp
private void ResetNot()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList">ConsumptionBudgetManagementGroupFilterDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.not">Not</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference">ConsumptionBudgetManagementGroupFilterNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList">ConsumptionBudgetManagementGroupFilterTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.notInput">NotInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot">ConsumptionBudgetManagementGroupFilterNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.tagInput">TagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter">ConsumptionBudgetManagementGroupFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.dimension"></a>

```csharp
public ConsumptionBudgetManagementGroupFilterDimensionList Dimension { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterDimensionList">ConsumptionBudgetManagementGroupFilterDimensionList</a>

---

##### `Not`<sup>Required</sup> <a name="Not" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.not"></a>

```csharp
public ConsumptionBudgetManagementGroupFilterNotOutputReference Not { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNotOutputReference">ConsumptionBudgetManagementGroupFilterNotOutputReference</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.tag"></a>

```csharp
public ConsumptionBudgetManagementGroupFilterTagList Tag { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList">ConsumptionBudgetManagementGroupFilterTagList</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.dimensionInput"></a>

```csharp
public object DimensionInput { get; }
```

- *Type:* object

---

##### `NotInput`<sup>Optional</sup> <a name="NotInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.notInput"></a>

```csharp
public ConsumptionBudgetManagementGroupFilterNot NotInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterNot">ConsumptionBudgetManagementGroupFilterNot</a>

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.tagInput"></a>

```csharp
public object TagInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterOutputReference.property.internalValue"></a>

```csharp
public ConsumptionBudgetManagementGroupFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilter">ConsumptionBudgetManagementGroupFilter</a>

---


### ConsumptionBudgetManagementGroupFilterTagList <a name="ConsumptionBudgetManagementGroupFilterTagList" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupFilterTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.get"></a>

```csharp
private ConsumptionBudgetManagementGroupFilterTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsumptionBudgetManagementGroupFilterTagOutputReference <a name="ConsumptionBudgetManagementGroupFilterTagOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupFilterTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupFilterTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsumptionBudgetManagementGroupNotificationList <a name="ConsumptionBudgetManagementGroupNotificationList" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupNotificationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.get"></a>

```csharp
private ConsumptionBudgetManagementGroupNotificationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsumptionBudgetManagementGroupNotificationOutputReference <a name="ConsumptionBudgetManagementGroupNotificationOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.resetThresholdType">ResetThresholdType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetThresholdType` <a name="ResetThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.resetThresholdType"></a>

```csharp
private void ResetThresholdType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.contactEmailsInput">ContactEmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.thresholdTypeInput">ThresholdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.contactEmails">ContactEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.thresholdType">ThresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContactEmailsInput`<sup>Optional</sup> <a name="ContactEmailsInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.contactEmailsInput"></a>

```csharp
public string[] ContactEmailsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdTypeInput`<sup>Optional</sup> <a name="ThresholdTypeInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.thresholdTypeInput"></a>

```csharp
public string ThresholdTypeInput { get; }
```

- *Type:* string

---

##### `ContactEmails`<sup>Required</sup> <a name="ContactEmails" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.contactEmails"></a>

```csharp
public string[] ContactEmails { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `ThresholdType`<sup>Required</sup> <a name="ThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.thresholdType"></a>

```csharp
public string ThresholdType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupNotificationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsumptionBudgetManagementGroupTimeoutsOutputReference <a name="ConsumptionBudgetManagementGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsumptionBudgetManagementGroupTimePeriodOutputReference <a name="ConsumptionBudgetManagementGroupTimePeriodOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetManagementGroupTimePeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.resetEndDate">ResetEndDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.resetEndDate"></a>

```csharp
private void ResetEndDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.startDateInput">StartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod">ConsumptionBudgetManagementGroupTimePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.startDateInput"></a>

```csharp
public string StartDateInput { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriodOutputReference.property.internalValue"></a>

```csharp
public ConsumptionBudgetManagementGroupTimePeriod InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetManagementGroup.ConsumptionBudgetManagementGroupTimePeriod">ConsumptionBudgetManagementGroupTimePeriod</a>

---



