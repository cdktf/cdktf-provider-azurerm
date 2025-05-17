# `costManagementScheduledAction` Submodule <a name="`costManagementScheduledAction` Submodule" id="@cdktf/provider-azurerm.costManagementScheduledAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostManagementScheduledAction <a name="CostManagementScheduledAction" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action azurerm_cost_management_scheduled_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CostManagementScheduledAction(Construct Scope, string Id, CostManagementScheduledActionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig">CostManagementScheduledActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig">CostManagementScheduledActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetDayOfMonth">ResetDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetHourOfDay">ResetHourOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.putTimeouts"></a>

```csharp
private void PutTimeouts(CostManagementScheduledActionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a>

---

##### `ResetDayOfMonth` <a name="ResetDayOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetDayOfMonth"></a>

```csharp
private void ResetDayOfMonth()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetHourOfDay` <a name="ResetHourOfDay" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetHourOfDay"></a>

```csharp
private void ResetHourOfDay()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetWeeksOfMonth"></a>

```csharp
private void ResetWeeksOfMonth()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CostManagementScheduledAction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CostManagementScheduledAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CostManagementScheduledAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CostManagementScheduledAction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CostManagementScheduledAction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CostManagementScheduledAction resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CostManagementScheduledAction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CostManagementScheduledAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CostManagementScheduledAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference">CostManagementScheduledActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dayOfMonthInput">DayOfMonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressSenderInput">EmailAddressSenderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailSubjectInput">EmailSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.hourOfDayInput">HourOfDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.startDateInput">StartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.viewIdInput">ViewIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dayOfMonth">DayOfMonth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressSender">EmailAddressSender</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailSubject">EmailSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.viewId">ViewId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.timeouts"></a>

```csharp
public CostManagementScheduledActionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference">CostManagementScheduledActionTimeoutsOutputReference</a>

---

##### `DayOfMonthInput`<sup>Optional</sup> <a name="DayOfMonthInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dayOfMonthInput"></a>

```csharp
public double DayOfMonthInput { get; }
```

- *Type:* double

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressesInput"></a>

```csharp
public string[] EmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `EmailAddressSenderInput`<sup>Optional</sup> <a name="EmailAddressSenderInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressSenderInput"></a>

```csharp
public string EmailAddressSenderInput { get; }
```

- *Type:* string

---

##### `EmailSubjectInput`<sup>Optional</sup> <a name="EmailSubjectInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailSubjectInput"></a>

```csharp
public string EmailSubjectInput { get; }
```

- *Type:* string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `HourOfDayInput`<sup>Optional</sup> <a name="HourOfDayInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.hourOfDayInput"></a>

```csharp
public double HourOfDayInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.startDateInput"></a>

```csharp
public string StartDateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ViewIdInput`<sup>Optional</sup> <a name="ViewIdInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.viewIdInput"></a>

```csharp
public string ViewIdInput { get; }
```

- *Type:* string

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.weeksOfMonthInput"></a>

```csharp
public string[] WeeksOfMonthInput { get; }
```

- *Type:* string[]

---

##### `DayOfMonth`<sup>Required</sup> <a name="DayOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dayOfMonth"></a>

```csharp
public double DayOfMonth { get; }
```

- *Type:* double

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; }
```

- *Type:* string[]

---

##### `EmailAddressSender`<sup>Required</sup> <a name="EmailAddressSender" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressSender"></a>

```csharp
public string EmailAddressSender { get; }
```

- *Type:* string

---

##### `EmailSubject`<sup>Required</sup> <a name="EmailSubject" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailSubject"></a>

```csharp
public string EmailSubject { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `ViewId`<sup>Required</sup> <a name="ViewId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.viewId"></a>

```csharp
public string ViewId { get; }
```

- *Type:* string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CostManagementScheduledActionConfig <a name="CostManagementScheduledActionConfig" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CostManagementScheduledActionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string[] EmailAddresses,
    string EmailAddressSender,
    string EmailSubject,
    string EndDate,
    string Frequency,
    string Name,
    string StartDate,
    string ViewId,
    double DayOfMonth = null,
    string[] DaysOfWeek = null,
    double HourOfDay = null,
    string Id = null,
    string Message = null,
    CostManagementScheduledActionTimeouts Timeouts = null,
    string[] WeeksOfMonth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#display_name CostManagementScheduledAction#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#email_addresses CostManagementScheduledAction#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailAddressSender">EmailAddressSender</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#email_address_sender CostManagementScheduledAction#email_address_sender}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailSubject">EmailSubject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#email_subject CostManagementScheduledAction#email_subject}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.endDate">EndDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#end_date CostManagementScheduledAction#end_date}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#frequency CostManagementScheduledAction#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#name CostManagementScheduledAction#name}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.startDate">StartDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#start_date CostManagementScheduledAction#start_date}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.viewId">ViewId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#view_id CostManagementScheduledAction#view_id}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.dayOfMonth">DayOfMonth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#day_of_month CostManagementScheduledAction#day_of_month}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#days_of_week CostManagementScheduledAction#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#hour_of_day CostManagementScheduledAction#hour_of_day}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#id CostManagementScheduledAction#id}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#message CostManagementScheduledAction#message}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#weeks_of_month CostManagementScheduledAction#weeks_of_month}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#display_name CostManagementScheduledAction#display_name}.

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#email_addresses CostManagementScheduledAction#email_addresses}.

---

##### `EmailAddressSender`<sup>Required</sup> <a name="EmailAddressSender" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailAddressSender"></a>

```csharp
public string EmailAddressSender { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#email_address_sender CostManagementScheduledAction#email_address_sender}.

---

##### `EmailSubject`<sup>Required</sup> <a name="EmailSubject" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailSubject"></a>

```csharp
public string EmailSubject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#email_subject CostManagementScheduledAction#email_subject}.

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#end_date CostManagementScheduledAction#end_date}.

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#frequency CostManagementScheduledAction#frequency}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#name CostManagementScheduledAction#name}.

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.startDate"></a>

```csharp
public string StartDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#start_date CostManagementScheduledAction#start_date}.

---

##### `ViewId`<sup>Required</sup> <a name="ViewId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.viewId"></a>

```csharp
public string ViewId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#view_id CostManagementScheduledAction#view_id}.

---

##### `DayOfMonth`<sup>Optional</sup> <a name="DayOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.dayOfMonth"></a>

```csharp
public double DayOfMonth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#day_of_month CostManagementScheduledAction#day_of_month}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#days_of_week CostManagementScheduledAction#days_of_week}.

---

##### `HourOfDay`<sup>Optional</sup> <a name="HourOfDay" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#hour_of_day CostManagementScheduledAction#hour_of_day}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#id CostManagementScheduledAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#message CostManagementScheduledAction#message}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.timeouts"></a>

```csharp
public CostManagementScheduledActionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#timeouts CostManagementScheduledAction#timeouts}

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#weeks_of_month CostManagementScheduledAction#weeks_of_month}.

---

### CostManagementScheduledActionTimeouts <a name="CostManagementScheduledActionTimeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CostManagementScheduledActionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#create CostManagementScheduledAction#create}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#delete CostManagementScheduledAction#delete}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#read CostManagementScheduledAction#read}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#update CostManagementScheduledAction#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#create CostManagementScheduledAction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#delete CostManagementScheduledAction#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#read CostManagementScheduledAction#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/cost_management_scheduled_action#update CostManagementScheduledAction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CostManagementScheduledActionTimeoutsOutputReference <a name="CostManagementScheduledActionTimeoutsOutputReference" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CostManagementScheduledActionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



