# `monitorAlertProcessingRuleSuppression` Submodule <a name="`monitorAlertProcessingRuleSuppression` Submodule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAlertProcessingRuleSuppression <a name="MonitorAlertProcessingRuleSuppression" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression azurerm_monitor_alert_processing_rule_suppression}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppression(Construct Scope, string Id, MonitorAlertProcessingRuleSuppressionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig">MonitorAlertProcessingRuleSuppressionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig">MonitorAlertProcessingRuleSuppressionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putCondition"></a>

```csharp
private void PutCondition(MonitorAlertProcessingRuleSuppressionCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putSchedule"></a>

```csharp
private void PutSchedule(MonitorAlertProcessingRuleSuppressionSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitorAlertProcessingRuleSuppressionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts">MonitorAlertProcessingRuleSuppressionTimeouts</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorAlertProcessingRuleSuppression resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorAlertProcessingRuleSuppression.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorAlertProcessingRuleSuppression.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorAlertProcessingRuleSuppression.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorAlertProcessingRuleSuppression.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MonitorAlertProcessingRuleSuppression resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorAlertProcessingRuleSuppression to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorAlertProcessingRuleSuppression that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MonitorAlertProcessingRuleSuppression to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference">MonitorAlertProcessingRuleSuppressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference">MonitorAlertProcessingRuleSuppressionScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference">MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.condition"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference">MonitorAlertProcessingRuleSuppressionConditionOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.schedule"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference">MonitorAlertProcessingRuleSuppressionScheduleOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.timeouts"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference">MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.conditionInput"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.scheduleInput"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionSchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a>

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppression.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAlertProcessingRuleSuppressionCondition <a name="MonitorAlertProcessingRuleSuppressionCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionCondition {
    MonitorAlertProcessingRuleSuppressionConditionAlertContext AlertContext = null,
    MonitorAlertProcessingRuleSuppressionConditionAlertRuleId AlertRuleId = null,
    MonitorAlertProcessingRuleSuppressionConditionAlertRuleName AlertRuleName = null,
    MonitorAlertProcessingRuleSuppressionConditionDescription Description = null,
    MonitorAlertProcessingRuleSuppressionConditionMonitorCondition MonitorCondition = null,
    MonitorAlertProcessingRuleSuppressionConditionMonitorService MonitorService = null,
    MonitorAlertProcessingRuleSuppressionConditionSeverity Severity = null,
    MonitorAlertProcessingRuleSuppressionConditionSignalType SignalType = null,
    MonitorAlertProcessingRuleSuppressionConditionTargetResource TargetResource = null,
    MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup TargetResourceGroup = null,
    MonitorAlertProcessingRuleSuppressionConditionTargetResourceType TargetResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.alertContext">AlertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext">MonitorAlertProcessingRuleSuppressionConditionAlertContext</a></code> | alert_context block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.alertRuleId">AlertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId">MonitorAlertProcessingRuleSuppressionConditionAlertRuleId</a></code> | alert_rule_id block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.alertRuleName">AlertRuleName</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName">MonitorAlertProcessingRuleSuppressionConditionAlertRuleName</a></code> | alert_rule_name block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.description">Description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription">MonitorAlertProcessingRuleSuppressionConditionDescription</a></code> | description block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.monitorCondition">MonitorCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition">MonitorAlertProcessingRuleSuppressionConditionMonitorCondition</a></code> | monitor_condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.monitorService">MonitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService">MonitorAlertProcessingRuleSuppressionConditionMonitorService</a></code> | monitor_service block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.severity">Severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity">MonitorAlertProcessingRuleSuppressionConditionSeverity</a></code> | severity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.signalType">SignalType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType">MonitorAlertProcessingRuleSuppressionConditionSignalType</a></code> | signal_type block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.targetResource">TargetResource</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource">MonitorAlertProcessingRuleSuppressionConditionTargetResource</a></code> | target_resource block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.targetResourceGroup">TargetResourceGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup</a></code> | target_resource_group block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.targetResourceType">TargetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType">MonitorAlertProcessingRuleSuppressionConditionTargetResourceType</a></code> | target_resource_type block. |

---

##### `AlertContext`<sup>Optional</sup> <a name="AlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.alertContext"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionAlertContext AlertContext { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext">MonitorAlertProcessingRuleSuppressionConditionAlertContext</a>

alert_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#alert_context MonitorAlertProcessingRuleSuppression#alert_context}

---

##### `AlertRuleId`<sup>Optional</sup> <a name="AlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.alertRuleId"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleId AlertRuleId { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId">MonitorAlertProcessingRuleSuppressionConditionAlertRuleId</a>

alert_rule_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#alert_rule_id MonitorAlertProcessingRuleSuppression#alert_rule_id}

---

##### `AlertRuleName`<sup>Optional</sup> <a name="AlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.alertRuleName"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleName AlertRuleName { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName">MonitorAlertProcessingRuleSuppressionConditionAlertRuleName</a>

alert_rule_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#alert_rule_name MonitorAlertProcessingRuleSuppression#alert_rule_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.description"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionDescription Description { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription">MonitorAlertProcessingRuleSuppressionConditionDescription</a>

description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#description MonitorAlertProcessingRuleSuppression#description}

---

##### `MonitorCondition`<sup>Optional</sup> <a name="MonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.monitorCondition"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionMonitorCondition MonitorCondition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition">MonitorAlertProcessingRuleSuppressionConditionMonitorCondition</a>

monitor_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#monitor_condition MonitorAlertProcessingRuleSuppression#monitor_condition}

---

##### `MonitorService`<sup>Optional</sup> <a name="MonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.monitorService"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionMonitorService MonitorService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService">MonitorAlertProcessingRuleSuppressionConditionMonitorService</a>

monitor_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#monitor_service MonitorAlertProcessingRuleSuppression#monitor_service}

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.severity"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionSeverity Severity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity">MonitorAlertProcessingRuleSuppressionConditionSeverity</a>

severity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#severity MonitorAlertProcessingRuleSuppression#severity}

---

##### `SignalType`<sup>Optional</sup> <a name="SignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.signalType"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionSignalType SignalType { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType">MonitorAlertProcessingRuleSuppressionConditionSignalType</a>

signal_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#signal_type MonitorAlertProcessingRuleSuppression#signal_type}

---

##### `TargetResource`<sup>Optional</sup> <a name="TargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.targetResource"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionTargetResource TargetResource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource">MonitorAlertProcessingRuleSuppressionConditionTargetResource</a>

target_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#target_resource MonitorAlertProcessingRuleSuppression#target_resource}

---

##### `TargetResourceGroup`<sup>Optional</sup> <a name="TargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.targetResourceGroup"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup TargetResourceGroup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup</a>

target_resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#target_resource_group MonitorAlertProcessingRuleSuppression#target_resource_group}

---

##### `TargetResourceType`<sup>Optional</sup> <a name="TargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition.property.targetResourceType"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceType TargetResourceType { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType">MonitorAlertProcessingRuleSuppressionConditionTargetResourceType</a>

target_resource_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#target_resource_type MonitorAlertProcessingRuleSuppression#target_resource_type}

---

### MonitorAlertProcessingRuleSuppressionConditionAlertContext <a name="MonitorAlertProcessingRuleSuppressionConditionAlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionAlertContext {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionAlertRuleId <a name="MonitorAlertProcessingRuleSuppressionConditionAlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionAlertRuleId {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionAlertRuleName <a name="MonitorAlertProcessingRuleSuppressionConditionAlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionAlertRuleName {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionDescription <a name="MonitorAlertProcessingRuleSuppressionConditionDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionDescription {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionMonitorCondition <a name="MonitorAlertProcessingRuleSuppressionConditionMonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionMonitorCondition {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionMonitorService <a name="MonitorAlertProcessingRuleSuppressionConditionMonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionMonitorService {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionSeverity <a name="MonitorAlertProcessingRuleSuppressionConditionSeverity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionSeverity {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionSignalType <a name="MonitorAlertProcessingRuleSuppressionConditionSignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionSignalType {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionTargetResource <a name="MonitorAlertProcessingRuleSuppressionConditionTargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionTargetResource {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup <a name="MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConditionTargetResourceType <a name="MonitorAlertProcessingRuleSuppressionConditionTargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionTargetResourceType {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#operator MonitorAlertProcessingRuleSuppression#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#values MonitorAlertProcessingRuleSuppression#values}.

---

### MonitorAlertProcessingRuleSuppressionConfig <a name="MonitorAlertProcessingRuleSuppressionConfig" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string[] Scopes,
    MonitorAlertProcessingRuleSuppressionCondition Condition = null,
    string Description = null,
    object Enabled = null,
    string Id = null,
    MonitorAlertProcessingRuleSuppressionSchedule Schedule = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MonitorAlertProcessingRuleSuppressionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#name MonitorAlertProcessingRuleSuppression#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#resource_group_name MonitorAlertProcessingRuleSuppression#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#scopes MonitorAlertProcessingRuleSuppression#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#description MonitorAlertProcessingRuleSuppression#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#enabled MonitorAlertProcessingRuleSuppression#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#id MonitorAlertProcessingRuleSuppression#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#tags MonitorAlertProcessingRuleSuppression#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts">MonitorAlertProcessingRuleSuppressionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#name MonitorAlertProcessingRuleSuppression#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#resource_group_name MonitorAlertProcessingRuleSuppression#resource_group_name}.

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#scopes MonitorAlertProcessingRuleSuppression#scopes}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.condition"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#condition MonitorAlertProcessingRuleSuppression#condition}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#description MonitorAlertProcessingRuleSuppression#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#enabled MonitorAlertProcessingRuleSuppression#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#id MonitorAlertProcessingRuleSuppression#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.schedule"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#schedule MonitorAlertProcessingRuleSuppression#schedule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#tags MonitorAlertProcessingRuleSuppression#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConfig.property.timeouts"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts">MonitorAlertProcessingRuleSuppressionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#timeouts MonitorAlertProcessingRuleSuppression#timeouts}

---

### MonitorAlertProcessingRuleSuppressionSchedule <a name="MonitorAlertProcessingRuleSuppressionSchedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionSchedule {
    string EffectiveFrom = null,
    string EffectiveUntil = null,
    MonitorAlertProcessingRuleSuppressionScheduleRecurrence Recurrence = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.effectiveFrom">EffectiveFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#effective_from MonitorAlertProcessingRuleSuppression#effective_from}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.effectiveUntil">EffectiveUntil</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#effective_until MonitorAlertProcessingRuleSuppression#effective_until}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence">MonitorAlertProcessingRuleSuppressionScheduleRecurrence</a></code> | recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#time_zone MonitorAlertProcessingRuleSuppression#time_zone}. |

---

##### `EffectiveFrom`<sup>Optional</sup> <a name="EffectiveFrom" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.effectiveFrom"></a>

```csharp
public string EffectiveFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#effective_from MonitorAlertProcessingRuleSuppression#effective_from}.

---

##### `EffectiveUntil`<sup>Optional</sup> <a name="EffectiveUntil" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.effectiveUntil"></a>

```csharp
public string EffectiveUntil { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#effective_until MonitorAlertProcessingRuleSuppression#effective_until}.

---

##### `Recurrence`<sup>Optional</sup> <a name="Recurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.recurrence"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionScheduleRecurrence Recurrence { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence">MonitorAlertProcessingRuleSuppressionScheduleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#recurrence MonitorAlertProcessingRuleSuppression#recurrence}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#time_zone MonitorAlertProcessingRuleSuppression#time_zone}.

---

### MonitorAlertProcessingRuleSuppressionScheduleRecurrence <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrence {
    object Daily = null,
    object Monthly = null,
    object Weekly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence.property.daily">Daily</a></code> | <code>object</code> | daily block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence.property.monthly">Monthly</a></code> | <code>object</code> | monthly block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence.property.weekly">Weekly</a></code> | <code>object</code> | weekly block. |

---

##### `Daily`<sup>Optional</sup> <a name="Daily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence.property.daily"></a>

```csharp
public object Daily { get; set; }
```

- *Type:* object

daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#daily MonitorAlertProcessingRuleSuppression#daily}

---

##### `Monthly`<sup>Optional</sup> <a name="Monthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence.property.monthly"></a>

```csharp
public object Monthly { get; set; }
```

- *Type:* object

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#monthly MonitorAlertProcessingRuleSuppression#monthly}

---

##### `Weekly`<sup>Optional</sup> <a name="Weekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence.property.weekly"></a>

```csharp
public object Weekly { get; set; }
```

- *Type:* object

weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#weekly MonitorAlertProcessingRuleSuppression#weekly}

---

### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily {
    string EndTime,
    string StartTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#end_time MonitorAlertProcessingRuleSuppression#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#start_time MonitorAlertProcessingRuleSuppression#start_time}. |

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#end_time MonitorAlertProcessingRuleSuppression#end_time}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDaily.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#start_time MonitorAlertProcessingRuleSuppression#start_time}.

---

### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly {
    double[] DaysOfMonth,
    string EndTime = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly.property.daysOfMonth">DaysOfMonth</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#days_of_month MonitorAlertProcessingRuleSuppression#days_of_month}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#end_time MonitorAlertProcessingRuleSuppression#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#start_time MonitorAlertProcessingRuleSuppression#start_time}. |

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly.property.daysOfMonth"></a>

```csharp
public double[] DaysOfMonth { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#days_of_month MonitorAlertProcessingRuleSuppression#days_of_month}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#end_time MonitorAlertProcessingRuleSuppression#end_time}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthly.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#start_time MonitorAlertProcessingRuleSuppression#start_time}.

---

### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly {
    string[] DaysOfWeek,
    string EndTime = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#days_of_week MonitorAlertProcessingRuleSuppression#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#end_time MonitorAlertProcessingRuleSuppression#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#start_time MonitorAlertProcessingRuleSuppression#start_time}. |

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#days_of_week MonitorAlertProcessingRuleSuppression#days_of_week}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#end_time MonitorAlertProcessingRuleSuppression#end_time}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeekly.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#start_time MonitorAlertProcessingRuleSuppression#start_time}.

---

### MonitorAlertProcessingRuleSuppressionTimeouts <a name="MonitorAlertProcessingRuleSuppressionTimeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#create MonitorAlertProcessingRuleSuppression#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#delete MonitorAlertProcessingRuleSuppression#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#read MonitorAlertProcessingRuleSuppression#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#update MonitorAlertProcessingRuleSuppression#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#create MonitorAlertProcessingRuleSuppression#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#delete MonitorAlertProcessingRuleSuppression#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#read MonitorAlertProcessingRuleSuppression#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/monitor_alert_processing_rule_suppression#update MonitorAlertProcessingRuleSuppression#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext">MonitorAlertProcessingRuleSuppressionConditionAlertContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionAlertContext InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext">MonitorAlertProcessingRuleSuppressionConditionAlertContext</a>

---


### MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId">MonitorAlertProcessingRuleSuppressionConditionAlertRuleId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleId InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId">MonitorAlertProcessingRuleSuppressionConditionAlertRuleId</a>

---


### MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName">MonitorAlertProcessingRuleSuppressionConditionAlertRuleName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleName InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName">MonitorAlertProcessingRuleSuppressionConditionAlertRuleName</a>

---


### MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription">MonitorAlertProcessingRuleSuppressionConditionDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionDescription InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription">MonitorAlertProcessingRuleSuppressionConditionDescription</a>

---


### MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition">MonitorAlertProcessingRuleSuppressionConditionMonitorCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionMonitorCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition">MonitorAlertProcessingRuleSuppressionConditionMonitorCondition</a>

---


### MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService">MonitorAlertProcessingRuleSuppressionConditionMonitorService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionMonitorService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService">MonitorAlertProcessingRuleSuppressionConditionMonitorService</a>

---


### MonitorAlertProcessingRuleSuppressionConditionOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertContext">PutAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertRuleId">PutAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertRuleName">PutAlertRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putDescription">PutDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putMonitorCondition">PutMonitorCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putMonitorService">PutMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putSeverity">PutSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putSignalType">PutSignalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResource">PutTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResourceGroup">PutTargetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResourceType">PutTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetAlertContext">ResetAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetAlertRuleId">ResetAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetAlertRuleName">ResetAlertRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetMonitorCondition">ResetMonitorCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetMonitorService">ResetMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetSignalType">ResetSignalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetTargetResource">ResetTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetTargetResourceGroup">ResetTargetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetTargetResourceType">ResetTargetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlertContext` <a name="PutAlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertContext"></a>

```csharp
private void PutAlertContext(MonitorAlertProcessingRuleSuppressionConditionAlertContext Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext">MonitorAlertProcessingRuleSuppressionConditionAlertContext</a>

---

##### `PutAlertRuleId` <a name="PutAlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertRuleId"></a>

```csharp
private void PutAlertRuleId(MonitorAlertProcessingRuleSuppressionConditionAlertRuleId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertRuleId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId">MonitorAlertProcessingRuleSuppressionConditionAlertRuleId</a>

---

##### `PutAlertRuleName` <a name="PutAlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertRuleName"></a>

```csharp
private void PutAlertRuleName(MonitorAlertProcessingRuleSuppressionConditionAlertRuleName Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putAlertRuleName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName">MonitorAlertProcessingRuleSuppressionConditionAlertRuleName</a>

---

##### `PutDescription` <a name="PutDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putDescription"></a>

```csharp
private void PutDescription(MonitorAlertProcessingRuleSuppressionConditionDescription Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putDescription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription">MonitorAlertProcessingRuleSuppressionConditionDescription</a>

---

##### `PutMonitorCondition` <a name="PutMonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putMonitorCondition"></a>

```csharp
private void PutMonitorCondition(MonitorAlertProcessingRuleSuppressionConditionMonitorCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putMonitorCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition">MonitorAlertProcessingRuleSuppressionConditionMonitorCondition</a>

---

##### `PutMonitorService` <a name="PutMonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putMonitorService"></a>

```csharp
private void PutMonitorService(MonitorAlertProcessingRuleSuppressionConditionMonitorService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putMonitorService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService">MonitorAlertProcessingRuleSuppressionConditionMonitorService</a>

---

##### `PutSeverity` <a name="PutSeverity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putSeverity"></a>

```csharp
private void PutSeverity(MonitorAlertProcessingRuleSuppressionConditionSeverity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putSeverity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity">MonitorAlertProcessingRuleSuppressionConditionSeverity</a>

---

##### `PutSignalType` <a name="PutSignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putSignalType"></a>

```csharp
private void PutSignalType(MonitorAlertProcessingRuleSuppressionConditionSignalType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putSignalType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType">MonitorAlertProcessingRuleSuppressionConditionSignalType</a>

---

##### `PutTargetResource` <a name="PutTargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResource"></a>

```csharp
private void PutTargetResource(MonitorAlertProcessingRuleSuppressionConditionTargetResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource">MonitorAlertProcessingRuleSuppressionConditionTargetResource</a>

---

##### `PutTargetResourceGroup` <a name="PutTargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResourceGroup"></a>

```csharp
private void PutTargetResourceGroup(MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResourceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup</a>

---

##### `PutTargetResourceType` <a name="PutTargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResourceType"></a>

```csharp
private void PutTargetResourceType(MonitorAlertProcessingRuleSuppressionConditionTargetResourceType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.putTargetResourceType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType">MonitorAlertProcessingRuleSuppressionConditionTargetResourceType</a>

---

##### `ResetAlertContext` <a name="ResetAlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetAlertContext"></a>

```csharp
private void ResetAlertContext()
```

##### `ResetAlertRuleId` <a name="ResetAlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetAlertRuleId"></a>

```csharp
private void ResetAlertRuleId()
```

##### `ResetAlertRuleName` <a name="ResetAlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetAlertRuleName"></a>

```csharp
private void ResetAlertRuleName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMonitorCondition` <a name="ResetMonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetMonitorCondition"></a>

```csharp
private void ResetMonitorCondition()
```

##### `ResetMonitorService` <a name="ResetMonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetMonitorService"></a>

```csharp
private void ResetMonitorService()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetSeverity"></a>

```csharp
private void ResetSeverity()
```

##### `ResetSignalType` <a name="ResetSignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetSignalType"></a>

```csharp
private void ResetSignalType()
```

##### `ResetTargetResource` <a name="ResetTargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetTargetResource"></a>

```csharp
private void ResetTargetResource()
```

##### `ResetTargetResourceGroup` <a name="ResetTargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetTargetResourceGroup"></a>

```csharp
private void ResetTargetResourceGroup()
```

##### `ResetTargetResourceType` <a name="ResetTargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.resetTargetResourceType"></a>

```csharp
private void ResetTargetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertContext">AlertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference">MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleId">AlertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference">MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleName">AlertRuleName</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference">MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.description">Description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference">MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorCondition">MonitorCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference">MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorService">MonitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference">MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.severity">Severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference">MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.signalType">SignalType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference">MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResource">TargetResource</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference">MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceGroup">TargetResourceGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceType">TargetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference">MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertContextInput">AlertContextInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext">MonitorAlertProcessingRuleSuppressionConditionAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleIdInput">AlertRuleIdInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId">MonitorAlertProcessingRuleSuppressionConditionAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleNameInput">AlertRuleNameInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName">MonitorAlertProcessingRuleSuppressionConditionAlertRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription">MonitorAlertProcessingRuleSuppressionConditionDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorConditionInput">MonitorConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition">MonitorAlertProcessingRuleSuppressionConditionMonitorCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorServiceInput">MonitorServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService">MonitorAlertProcessingRuleSuppressionConditionMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.severityInput">SeverityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity">MonitorAlertProcessingRuleSuppressionConditionSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.signalTypeInput">SignalTypeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType">MonitorAlertProcessingRuleSuppressionConditionSignalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceGroupInput">TargetResourceGroupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceInput">TargetResourceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource">MonitorAlertProcessingRuleSuppressionConditionTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceTypeInput">TargetResourceTypeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType">MonitorAlertProcessingRuleSuppressionConditionTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlertContext`<sup>Required</sup> <a name="AlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertContext"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference AlertContext { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference">MonitorAlertProcessingRuleSuppressionConditionAlertContextOutputReference</a>

---

##### `AlertRuleId`<sup>Required</sup> <a name="AlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleId"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference AlertRuleId { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference">MonitorAlertProcessingRuleSuppressionConditionAlertRuleIdOutputReference</a>

---

##### `AlertRuleName`<sup>Required</sup> <a name="AlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleName"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference AlertRuleName { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference">MonitorAlertProcessingRuleSuppressionConditionAlertRuleNameOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.description"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference Description { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference">MonitorAlertProcessingRuleSuppressionConditionDescriptionOutputReference</a>

---

##### `MonitorCondition`<sup>Required</sup> <a name="MonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorCondition"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference MonitorCondition { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference">MonitorAlertProcessingRuleSuppressionConditionMonitorConditionOutputReference</a>

---

##### `MonitorService`<sup>Required</sup> <a name="MonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorService"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference MonitorService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference">MonitorAlertProcessingRuleSuppressionConditionMonitorServiceOutputReference</a>

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.severity"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference Severity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference">MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference</a>

---

##### `SignalType`<sup>Required</sup> <a name="SignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.signalType"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference SignalType { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference">MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference</a>

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResource"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference TargetResource { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference">MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference</a>

---

##### `TargetResourceGroup`<sup>Required</sup> <a name="TargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceGroup"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference TargetResourceGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference</a>

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceType"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference TargetResourceType { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference">MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference</a>

---

##### `AlertContextInput`<sup>Optional</sup> <a name="AlertContextInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertContextInput"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionAlertContext AlertContextInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertContext">MonitorAlertProcessingRuleSuppressionConditionAlertContext</a>

---

##### `AlertRuleIdInput`<sup>Optional</sup> <a name="AlertRuleIdInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleIdInput"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleId AlertRuleIdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleId">MonitorAlertProcessingRuleSuppressionConditionAlertRuleId</a>

---

##### `AlertRuleNameInput`<sup>Optional</sup> <a name="AlertRuleNameInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.alertRuleNameInput"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionAlertRuleName AlertRuleNameInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionAlertRuleName">MonitorAlertProcessingRuleSuppressionConditionAlertRuleName</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.descriptionInput"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionDescription DescriptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionDescription">MonitorAlertProcessingRuleSuppressionConditionDescription</a>

---

##### `MonitorConditionInput`<sup>Optional</sup> <a name="MonitorConditionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorConditionInput"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionMonitorCondition MonitorConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorCondition">MonitorAlertProcessingRuleSuppressionConditionMonitorCondition</a>

---

##### `MonitorServiceInput`<sup>Optional</sup> <a name="MonitorServiceInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.monitorServiceInput"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionMonitorService MonitorServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionMonitorService">MonitorAlertProcessingRuleSuppressionConditionMonitorService</a>

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.severityInput"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionSeverity SeverityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity">MonitorAlertProcessingRuleSuppressionConditionSeverity</a>

---

##### `SignalTypeInput`<sup>Optional</sup> <a name="SignalTypeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.signalTypeInput"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionSignalType SignalTypeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType">MonitorAlertProcessingRuleSuppressionConditionSignalType</a>

---

##### `TargetResourceGroupInput`<sup>Optional</sup> <a name="TargetResourceGroupInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceGroupInput"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup TargetResourceGroupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup</a>

---

##### `TargetResourceInput`<sup>Optional</sup> <a name="TargetResourceInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceInput"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionTargetResource TargetResourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource">MonitorAlertProcessingRuleSuppressionConditionTargetResource</a>

---

##### `TargetResourceTypeInput`<sup>Optional</sup> <a name="TargetResourceTypeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.targetResourceTypeInput"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceType TargetResourceTypeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType">MonitorAlertProcessingRuleSuppressionConditionTargetResourceType</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionCondition">MonitorAlertProcessingRuleSuppressionCondition</a>

---


### MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity">MonitorAlertProcessingRuleSuppressionConditionSeverity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverityOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionSeverity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSeverity">MonitorAlertProcessingRuleSuppressionConditionSeverity</a>

---


### MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType">MonitorAlertProcessingRuleSuppressionConditionSignalType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalTypeOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionSignalType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionSignalType">MonitorAlertProcessingRuleSuppressionConditionSignalType</a>

---


### MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroupOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup">MonitorAlertProcessingRuleSuppressionConditionTargetResourceGroup</a>

---


### MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource">MonitorAlertProcessingRuleSuppressionConditionTargetResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionTargetResource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResource">MonitorAlertProcessingRuleSuppressionConditionTargetResource</a>

---


### MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference <a name="MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType">MonitorAlertProcessingRuleSuppressionConditionTargetResourceType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceTypeOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionConditionTargetResourceType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionConditionTargetResourceType">MonitorAlertProcessingRuleSuppressionConditionTargetResourceType</a>

---


### MonitorAlertProcessingRuleSuppressionScheduleOutputReference <a name="MonitorAlertProcessingRuleSuppressionScheduleOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.putRecurrence">PutRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetEffectiveFrom">ResetEffectiveFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetEffectiveUntil">ResetEffectiveUntil</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetRecurrence">ResetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecurrence` <a name="PutRecurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.putRecurrence"></a>

```csharp
private void PutRecurrence(MonitorAlertProcessingRuleSuppressionScheduleRecurrence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence">MonitorAlertProcessingRuleSuppressionScheduleRecurrence</a>

---

##### `ResetEffectiveFrom` <a name="ResetEffectiveFrom" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetEffectiveFrom"></a>

```csharp
private void ResetEffectiveFrom()
```

##### `ResetEffectiveUntil` <a name="ResetEffectiveUntil" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetEffectiveUntil"></a>

```csharp
private void ResetEffectiveUntil()
```

##### `ResetRecurrence` <a name="ResetRecurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetRecurrence"></a>

```csharp
private void ResetRecurrence()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveFromInput">EffectiveFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveUntilInput">EffectiveUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence">MonitorAlertProcessingRuleSuppressionScheduleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveFrom">EffectiveFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveUntil">EffectiveUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.recurrence"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference Recurrence { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference</a>

---

##### `EffectiveFromInput`<sup>Optional</sup> <a name="EffectiveFromInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveFromInput"></a>

```csharp
public string EffectiveFromInput { get; }
```

- *Type:* string

---

##### `EffectiveUntilInput`<sup>Optional</sup> <a name="EffectiveUntilInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveUntilInput"></a>

```csharp
public string EffectiveUntilInput { get; }
```

- *Type:* string

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.recurrenceInput"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionScheduleRecurrence RecurrenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence">MonitorAlertProcessingRuleSuppressionScheduleRecurrence</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `EffectiveFrom`<sup>Required</sup> <a name="EffectiveFrom" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveFrom"></a>

```csharp
public string EffectiveFrom { get; }
```

- *Type:* string

---

##### `EffectiveUntil`<sup>Required</sup> <a name="EffectiveUntil" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.effectiveUntil"></a>

```csharp
public string EffectiveUntil { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionSchedule">MonitorAlertProcessingRuleSuppressionSchedule</a>

---


### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.get"></a>

```csharp
private MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.get"></a>

```csharp
private MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.daysOfMonthInput">DaysOfMonthInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfMonthInput`<sup>Optional</sup> <a name="DaysOfMonthInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.daysOfMonthInput"></a>

```csharp
public double[] DaysOfMonthInput { get; }
```

- *Type:* double[]

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.daysOfMonth"></a>

```csharp
public double[] DaysOfMonth { get; }
```

- *Type:* double[]

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putDaily">PutDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putMonthly">PutMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putWeekly">PutWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resetDaily">ResetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resetMonthly">ResetMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resetWeekly">ResetWeekly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDaily` <a name="PutDaily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putDaily"></a>

```csharp
private void PutDaily(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putDaily.parameter.value"></a>

- *Type:* object

---

##### `PutMonthly` <a name="PutMonthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putMonthly"></a>

```csharp
private void PutMonthly(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putMonthly.parameter.value"></a>

- *Type:* object

---

##### `PutWeekly` <a name="PutWeekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putWeekly"></a>

```csharp
private void PutWeekly(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.putWeekly.parameter.value"></a>

- *Type:* object

---

##### `ResetDaily` <a name="ResetDaily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resetDaily"></a>

```csharp
private void ResetDaily()
```

##### `ResetMonthly` <a name="ResetMonthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resetMonthly"></a>

```csharp
private void ResetMonthly()
```

##### `ResetWeekly` <a name="ResetWeekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.resetWeekly"></a>

```csharp
private void ResetWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.daily">Daily</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.monthly">Monthly</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.weekly">Weekly</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.dailyInput">DailyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.monthlyInput">MonthlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.weeklyInput">WeeklyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence">MonitorAlertProcessingRuleSuppressionScheduleRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Daily`<sup>Required</sup> <a name="Daily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.daily"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList Daily { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceDailyList</a>

---

##### `Monthly`<sup>Required</sup> <a name="Monthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.monthly"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList Monthly { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceMonthlyList</a>

---

##### `Weekly`<sup>Required</sup> <a name="Weekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.weekly"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList Weekly { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList">MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList</a>

---

##### `DailyInput`<sup>Optional</sup> <a name="DailyInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.dailyInput"></a>

```csharp
public object DailyInput { get; }
```

- *Type:* object

---

##### `MonthlyInput`<sup>Optional</sup> <a name="MonthlyInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.monthlyInput"></a>

```csharp
public object MonthlyInput { get; }
```

- *Type:* object

---

##### `WeeklyInput`<sup>Optional</sup> <a name="WeeklyInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.weeklyInput"></a>

```csharp
public object WeeklyInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleSuppressionScheduleRecurrence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrence">MonitorAlertProcessingRuleSuppressionScheduleRecurrence</a>

---


### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.get"></a>

```csharp
private MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference <a name="MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionScheduleRecurrenceWeeklyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference <a name="MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleSuppression.MonitorAlertProcessingRuleSuppressionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



