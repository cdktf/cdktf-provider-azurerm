# `consumptionBudgetSubscription` Submodule <a name="`consumptionBudgetSubscription` Submodule" id="@cdktf/provider-azurerm.consumptionBudgetSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsumptionBudgetSubscription <a name="ConsumptionBudgetSubscription" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription azurerm_consumption_budget_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscription(Construct Scope, string Id, ConsumptionBudgetSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig">ConsumptionBudgetSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig">ConsumptionBudgetSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimePeriod">PutTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetTimeGrain">ResetTimeGrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putFilter"></a>

```csharp
private void PutFilter(ConsumptionBudgetSubscriptionFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a>

---

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putNotification"></a>

```csharp
private void PutNotification(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putNotification.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimeouts"></a>

```csharp
private void PutTimeouts(ConsumptionBudgetSubscriptionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts">ConsumptionBudgetSubscriptionTimeouts</a>

---

##### `PutTimePeriod` <a name="PutTimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimePeriod"></a>

```csharp
private void PutTimePeriod(ConsumptionBudgetSubscriptionTimePeriod Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.putTimePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeGrain` <a name="ResetTimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetTimeGrain"></a>

```csharp
private void ResetTimeGrain()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConsumptionBudgetSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ConsumptionBudgetSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ConsumptionBudgetSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ConsumptionBudgetSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ConsumptionBudgetSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ConsumptionBudgetSubscription resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConsumptionBudgetSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConsumptionBudgetSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ConsumptionBudgetSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference">ConsumptionBudgetSubscriptionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList">ConsumptionBudgetSubscriptionNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference">ConsumptionBudgetSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference">ConsumptionBudgetSubscriptionTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.amountInput">AmountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.notificationInput">NotificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeGrainInput">TimeGrainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timePeriodInput">TimePeriodInput</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.amount">Amount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeGrain">TimeGrain</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.filter"></a>

```csharp
public ConsumptionBudgetSubscriptionFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference">ConsumptionBudgetSubscriptionFilterOutputReference</a>

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.notification"></a>

```csharp
public ConsumptionBudgetSubscriptionNotificationList Notification { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList">ConsumptionBudgetSubscriptionNotificationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeouts"></a>

```csharp
public ConsumptionBudgetSubscriptionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference">ConsumptionBudgetSubscriptionTimeoutsOutputReference</a>

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timePeriod"></a>

```csharp
public ConsumptionBudgetSubscriptionTimePeriodOutputReference TimePeriod { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference">ConsumptionBudgetSubscriptionTimePeriodOutputReference</a>

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.amountInput"></a>

```csharp
public double AmountInput { get; }
```

- *Type:* double

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.filterInput"></a>

```csharp
public ConsumptionBudgetSubscriptionFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.notificationInput"></a>

```csharp
public object NotificationInput { get; }
```

- *Type:* object

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TimeGrainInput`<sup>Optional</sup> <a name="TimeGrainInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeGrainInput"></a>

```csharp
public string TimeGrainInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimePeriodInput`<sup>Optional</sup> <a name="TimePeriodInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timePeriodInput"></a>

```csharp
public ConsumptionBudgetSubscriptionTimePeriod TimePeriodInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a>

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.amount"></a>

```csharp
public double Amount { get; }
```

- *Type:* double

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TimeGrain`<sup>Required</sup> <a name="TimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.timeGrain"></a>

```csharp
public string TimeGrain { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConsumptionBudgetSubscriptionConfig <a name="ConsumptionBudgetSubscriptionConfig" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double Amount,
    string Name,
    object Notification,
    string SubscriptionId,
    ConsumptionBudgetSubscriptionTimePeriod TimePeriod,
    string Etag = null,
    ConsumptionBudgetSubscriptionFilter Filter = null,
    string Id = null,
    string TimeGrain = null,
    ConsumptionBudgetSubscriptionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.amount">Amount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#amount ConsumptionBudgetSubscription#amount}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.notification">Notification</a></code> | <code>object</code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#subscription_id ConsumptionBudgetSubscription#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.etag">Etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#etag ConsumptionBudgetSubscription#etag}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#id ConsumptionBudgetSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timeGrain">TimeGrain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#time_grain ConsumptionBudgetSubscription#time_grain}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts">ConsumptionBudgetSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.amount"></a>

```csharp
public double Amount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#amount ConsumptionBudgetSubscription#amount}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.notification"></a>

```csharp
public object Notification { get; set; }
```

- *Type:* object

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#notification ConsumptionBudgetSubscription#notification}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#subscription_id ConsumptionBudgetSubscription#subscription_id}.

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timePeriod"></a>

```csharp
public ConsumptionBudgetSubscriptionTimePeriod TimePeriod { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#time_period ConsumptionBudgetSubscription#time_period}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#etag ConsumptionBudgetSubscription#etag}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.filter"></a>

```csharp
public ConsumptionBudgetSubscriptionFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#filter ConsumptionBudgetSubscription#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#id ConsumptionBudgetSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeGrain`<sup>Optional</sup> <a name="TimeGrain" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timeGrain"></a>

```csharp
public string TimeGrain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#time_grain ConsumptionBudgetSubscription#time_grain}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionConfig.property.timeouts"></a>

```csharp
public ConsumptionBudgetSubscriptionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts">ConsumptionBudgetSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#timeouts ConsumptionBudgetSubscription#timeouts}

---

### ConsumptionBudgetSubscriptionFilter <a name="ConsumptionBudgetSubscriptionFilter" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionFilter {
    object Dimension = null,
    object Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.dimension">Dimension</a></code> | <code>object</code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.tag">Tag</a></code> | <code>object</code> | tag block. |

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.dimension"></a>

```csharp
public object Dimension { get; set; }
```

- *Type:* object

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#dimension ConsumptionBudgetSubscription#dimension}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter.property.tag"></a>

```csharp
public object Tag { get; set; }
```

- *Type:* object

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#tag ConsumptionBudgetSubscription#tag}

---

### ConsumptionBudgetSubscriptionFilterDimension <a name="ConsumptionBudgetSubscriptionFilterDimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionFilterDimension {
    string Name,
    string[] Values,
    string Operator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimension.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}.

---

### ConsumptionBudgetSubscriptionFilterTag <a name="ConsumptionBudgetSubscriptionFilterTag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionFilterTag {
    string Name,
    string[] Values,
    string Operator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#name ConsumptionBudgetSubscription#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#values ConsumptionBudgetSubscription#values}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTag.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}.

---

### ConsumptionBudgetSubscriptionNotification <a name="ConsumptionBudgetSubscriptionNotification" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionNotification {
    string Operator,
    double Threshold,
    string[] ContactEmails = null,
    string[] ContactGroups = null,
    string[] ContactRoles = null,
    object Enabled = null,
    string ThresholdType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#threshold ConsumptionBudgetSubscription#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactEmails">ContactEmails</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#contact_emails ConsumptionBudgetSubscription#contact_emails}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactGroups">ContactGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#contact_groups ConsumptionBudgetSubscription#contact_groups}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactRoles">ContactRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#contact_roles ConsumptionBudgetSubscription#contact_roles}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#enabled ConsumptionBudgetSubscription#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.thresholdType">ThresholdType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#threshold_type ConsumptionBudgetSubscription#threshold_type}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#operator ConsumptionBudgetSubscription#operator}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#threshold ConsumptionBudgetSubscription#threshold}.

---

##### `ContactEmails`<sup>Optional</sup> <a name="ContactEmails" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactEmails"></a>

```csharp
public string[] ContactEmails { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#contact_emails ConsumptionBudgetSubscription#contact_emails}.

---

##### `ContactGroups`<sup>Optional</sup> <a name="ContactGroups" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactGroups"></a>

```csharp
public string[] ContactGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#contact_groups ConsumptionBudgetSubscription#contact_groups}.

---

##### `ContactRoles`<sup>Optional</sup> <a name="ContactRoles" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.contactRoles"></a>

```csharp
public string[] ContactRoles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#contact_roles ConsumptionBudgetSubscription#contact_roles}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#enabled ConsumptionBudgetSubscription#enabled}.

---

##### `ThresholdType`<sup>Optional</sup> <a name="ThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotification.property.thresholdType"></a>

```csharp
public string ThresholdType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#threshold_type ConsumptionBudgetSubscription#threshold_type}.

---

### ConsumptionBudgetSubscriptionTimeouts <a name="ConsumptionBudgetSubscriptionTimeouts" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#create ConsumptionBudgetSubscription#create}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#delete ConsumptionBudgetSubscription#delete}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#read ConsumptionBudgetSubscription#read}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#update ConsumptionBudgetSubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#create ConsumptionBudgetSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#delete ConsumptionBudgetSubscription#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#read ConsumptionBudgetSubscription#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#update ConsumptionBudgetSubscription#update}.

---

### ConsumptionBudgetSubscriptionTimePeriod <a name="ConsumptionBudgetSubscriptionTimePeriod" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionTimePeriod {
    string StartDate,
    string EndDate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod.property.startDate">StartDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#start_date ConsumptionBudgetSubscription#start_date}. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod.property.endDate">EndDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#end_date ConsumptionBudgetSubscription#end_date}. |

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod.property.startDate"></a>

```csharp
public string StartDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#start_date ConsumptionBudgetSubscription#start_date}.

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/consumption_budget_subscription#end_date ConsumptionBudgetSubscription#end_date}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConsumptionBudgetSubscriptionFilterDimensionList <a name="ConsumptionBudgetSubscriptionFilterDimensionList" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionFilterDimensionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.get"></a>

```csharp
private ConsumptionBudgetSubscriptionFilterDimensionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsumptionBudgetSubscriptionFilterDimensionOutputReference <a name="ConsumptionBudgetSubscriptionFilterDimensionOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionFilterDimensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsumptionBudgetSubscriptionFilterOutputReference <a name="ConsumptionBudgetSubscriptionFilterOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putDimension"></a>

```csharp
private void PutDimension(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putDimension.parameter.value"></a>

- *Type:* object

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putTag"></a>

```csharp
private void PutTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.putTag.parameter.value"></a>

- *Type:* object

---

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetDimension"></a>

```csharp
private void ResetDimension()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList">ConsumptionBudgetSubscriptionFilterDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList">ConsumptionBudgetSubscriptionFilterTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.tagInput">TagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.dimension"></a>

```csharp
public ConsumptionBudgetSubscriptionFilterDimensionList Dimension { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterDimensionList">ConsumptionBudgetSubscriptionFilterDimensionList</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.tag"></a>

```csharp
public ConsumptionBudgetSubscriptionFilterTagList Tag { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList">ConsumptionBudgetSubscriptionFilterTagList</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.dimensionInput"></a>

```csharp
public object DimensionInput { get; }
```

- *Type:* object

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.tagInput"></a>

```csharp
public object TagInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterOutputReference.property.internalValue"></a>

```csharp
public ConsumptionBudgetSubscriptionFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilter">ConsumptionBudgetSubscriptionFilter</a>

---


### ConsumptionBudgetSubscriptionFilterTagList <a name="ConsumptionBudgetSubscriptionFilterTagList" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionFilterTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.get"></a>

```csharp
private ConsumptionBudgetSubscriptionFilterTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsumptionBudgetSubscriptionFilterTagOutputReference <a name="ConsumptionBudgetSubscriptionFilterTagOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionFilterTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionFilterTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsumptionBudgetSubscriptionNotificationList <a name="ConsumptionBudgetSubscriptionNotificationList" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionNotificationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.get"></a>

```csharp
private ConsumptionBudgetSubscriptionNotificationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsumptionBudgetSubscriptionNotificationOutputReference <a name="ConsumptionBudgetSubscriptionNotificationOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactEmails">ResetContactEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactGroups">ResetContactGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactRoles">ResetContactRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetThresholdType">ResetThresholdType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContactEmails` <a name="ResetContactEmails" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactEmails"></a>

```csharp
private void ResetContactEmails()
```

##### `ResetContactGroups` <a name="ResetContactGroups" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactGroups"></a>

```csharp
private void ResetContactGroups()
```

##### `ResetContactRoles` <a name="ResetContactRoles" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetContactRoles"></a>

```csharp
private void ResetContactRoles()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetThresholdType` <a name="ResetThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.resetThresholdType"></a>

```csharp
private void ResetThresholdType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmailsInput">ContactEmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroupsInput">ContactGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRolesInput">ContactRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdTypeInput">ThresholdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmails">ContactEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroups">ContactGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRoles">ContactRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdType">ThresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContactEmailsInput`<sup>Optional</sup> <a name="ContactEmailsInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmailsInput"></a>

```csharp
public string[] ContactEmailsInput { get; }
```

- *Type:* string[]

---

##### `ContactGroupsInput`<sup>Optional</sup> <a name="ContactGroupsInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroupsInput"></a>

```csharp
public string[] ContactGroupsInput { get; }
```

- *Type:* string[]

---

##### `ContactRolesInput`<sup>Optional</sup> <a name="ContactRolesInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRolesInput"></a>

```csharp
public string[] ContactRolesInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdTypeInput`<sup>Optional</sup> <a name="ThresholdTypeInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdTypeInput"></a>

```csharp
public string ThresholdTypeInput { get; }
```

- *Type:* string

---

##### `ContactEmails`<sup>Required</sup> <a name="ContactEmails" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmails"></a>

```csharp
public string[] ContactEmails { get; }
```

- *Type:* string[]

---

##### `ContactGroups`<sup>Required</sup> <a name="ContactGroups" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroups"></a>

```csharp
public string[] ContactGroups { get; }
```

- *Type:* string[]

---

##### `ContactRoles`<sup>Required</sup> <a name="ContactRoles" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRoles"></a>

```csharp
public string[] ContactRoles { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `ThresholdType`<sup>Required</sup> <a name="ThresholdType" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdType"></a>

```csharp
public string ThresholdType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionNotificationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsumptionBudgetSubscriptionTimeoutsOutputReference <a name="ConsumptionBudgetSubscriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConsumptionBudgetSubscriptionTimePeriodOutputReference <a name="ConsumptionBudgetSubscriptionTimePeriodOutputReference" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConsumptionBudgetSubscriptionTimePeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.resetEndDate">ResetEndDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.resetEndDate"></a>

```csharp
private void ResetEndDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDateInput">StartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDateInput"></a>

```csharp
public string StartDateInput { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriodOutputReference.property.internalValue"></a>

```csharp
public ConsumptionBudgetSubscriptionTimePeriod InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.consumptionBudgetSubscription.ConsumptionBudgetSubscriptionTimePeriod">ConsumptionBudgetSubscriptionTimePeriod</a>

---



