# `monitorDiagnosticSetting` Submodule <a name="`monitorDiagnosticSetting` Submodule" id="@cdktf/provider-azurerm.monitorDiagnosticSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorDiagnosticSetting <a name="MonitorDiagnosticSetting" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting azurerm_monitor_diagnostic_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSetting(Construct Scope, string Id, MonitorDiagnosticSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig">MonitorDiagnosticSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig">MonitorDiagnosticSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledLog">PutEnabledLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledMetric">PutEnabledMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEnabledLog">ResetEnabledLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEnabledMetric">ResetEnabledMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubAuthorizationRuleId">ResetEventhubAuthorizationRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubName">ResetEventhubName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsDestinationType">ResetLogAnalyticsDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsWorkspaceId">ResetLogAnalyticsWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetPartnerSolutionId">ResetPartnerSolutionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetStorageAccountId">ResetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnabledLog` <a name="PutEnabledLog" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledLog"></a>

```csharp
private void PutEnabledLog(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledLog.parameter.value"></a>

- *Type:* object

---

##### `PutEnabledMetric` <a name="PutEnabledMetric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledMetric"></a>

```csharp
private void PutEnabledMetric(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledMetric.parameter.value"></a>

- *Type:* object

---

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putMetric"></a>

```csharp
private void PutMetric(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putMetric.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitorDiagnosticSettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a>

---

##### `ResetEnabledLog` <a name="ResetEnabledLog" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEnabledLog"></a>

```csharp
private void ResetEnabledLog()
```

##### `ResetEnabledMetric` <a name="ResetEnabledMetric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEnabledMetric"></a>

```csharp
private void ResetEnabledMetric()
```

##### `ResetEventhubAuthorizationRuleId` <a name="ResetEventhubAuthorizationRuleId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubAuthorizationRuleId"></a>

```csharp
private void ResetEventhubAuthorizationRuleId()
```

##### `ResetEventhubName` <a name="ResetEventhubName" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubName"></a>

```csharp
private void ResetEventhubName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogAnalyticsDestinationType` <a name="ResetLogAnalyticsDestinationType" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsDestinationType"></a>

```csharp
private void ResetLogAnalyticsDestinationType()
```

##### `ResetLogAnalyticsWorkspaceId` <a name="ResetLogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsWorkspaceId"></a>

```csharp
private void ResetLogAnalyticsWorkspaceId()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetMetric"></a>

```csharp
private void ResetMetric()
```

##### `ResetPartnerSolutionId` <a name="ResetPartnerSolutionId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetPartnerSolutionId"></a>

```csharp
private void ResetPartnerSolutionId()
```

##### `ResetStorageAccountId` <a name="ResetStorageAccountId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetStorageAccountId"></a>

```csharp
private void ResetStorageAccountId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorDiagnosticSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorDiagnosticSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorDiagnosticSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorDiagnosticSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorDiagnosticSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MonitorDiagnosticSetting resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorDiagnosticSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorDiagnosticSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MonitorDiagnosticSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLog">EnabledLog</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList">MonitorDiagnosticSettingEnabledLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledMetric">EnabledMetric</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList">MonitorDiagnosticSettingEnabledMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList">MonitorDiagnosticSettingMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference">MonitorDiagnosticSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLogInput">EnabledLogInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledMetricInput">EnabledMetricInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleIdInput">EventhubAuthorizationRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubNameInput">EventhubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationTypeInput">LogAnalyticsDestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.metricInput">MetricInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionIdInput">PartnerSolutionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleId">EventhubAuthorizationRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubName">EventhubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationType">LogAnalyticsDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionId">PartnerSolutionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EnabledLog`<sup>Required</sup> <a name="EnabledLog" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLog"></a>

```csharp
public MonitorDiagnosticSettingEnabledLogList EnabledLog { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList">MonitorDiagnosticSettingEnabledLogList</a>

---

##### `EnabledMetric`<sup>Required</sup> <a name="EnabledMetric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledMetric"></a>

```csharp
public MonitorDiagnosticSettingEnabledMetricList EnabledMetric { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList">MonitorDiagnosticSettingEnabledMetricList</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.metric"></a>

```csharp
public MonitorDiagnosticSettingMetricList Metric { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList">MonitorDiagnosticSettingMetricList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeouts"></a>

```csharp
public MonitorDiagnosticSettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference">MonitorDiagnosticSettingTimeoutsOutputReference</a>

---

##### `EnabledLogInput`<sup>Optional</sup> <a name="EnabledLogInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLogInput"></a>

```csharp
public object EnabledLogInput { get; }
```

- *Type:* object

---

##### `EnabledMetricInput`<sup>Optional</sup> <a name="EnabledMetricInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledMetricInput"></a>

```csharp
public object EnabledMetricInput { get; }
```

- *Type:* object

---

##### `EventhubAuthorizationRuleIdInput`<sup>Optional</sup> <a name="EventhubAuthorizationRuleIdInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleIdInput"></a>

```csharp
public string EventhubAuthorizationRuleIdInput { get; }
```

- *Type:* string

---

##### `EventhubNameInput`<sup>Optional</sup> <a name="EventhubNameInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubNameInput"></a>

```csharp
public string EventhubNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsDestinationTypeInput`<sup>Optional</sup> <a name="LogAnalyticsDestinationTypeInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationTypeInput"></a>

```csharp
public string LogAnalyticsDestinationTypeInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.metricInput"></a>

```csharp
public object MetricInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartnerSolutionIdInput`<sup>Optional</sup> <a name="PartnerSolutionIdInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionIdInput"></a>

```csharp
public string PartnerSolutionIdInput { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceIdInput"></a>

```csharp
public string TargetResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `EventhubAuthorizationRuleId`<sup>Required</sup> <a name="EventhubAuthorizationRuleId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleId"></a>

```csharp
public string EventhubAuthorizationRuleId { get; }
```

- *Type:* string

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubName"></a>

```csharp
public string EventhubName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsDestinationType`<sup>Required</sup> <a name="LogAnalyticsDestinationType" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationType"></a>

```csharp
public string LogAnalyticsDestinationType { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartnerSolutionId`<sup>Required</sup> <a name="PartnerSolutionId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionId"></a>

```csharp
public string PartnerSolutionId { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorDiagnosticSettingConfig <a name="MonitorDiagnosticSettingConfig" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string TargetResourceId,
    object EnabledLog = null,
    object EnabledMetric = null,
    string EventhubAuthorizationRuleId = null,
    string EventhubName = null,
    string Id = null,
    string LogAnalyticsDestinationType = null,
    string LogAnalyticsWorkspaceId = null,
    object Metric = null,
    string PartnerSolutionId = null,
    string StorageAccountId = null,
    MonitorDiagnosticSettingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#name MonitorDiagnosticSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#target_resource_id MonitorDiagnosticSetting#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.enabledLog">EnabledLog</a></code> | <code>object</code> | enabled_log block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.enabledMetric">EnabledMetric</a></code> | <code>object</code> | enabled_metric block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubAuthorizationRuleId">EventhubAuthorizationRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#eventhub_authorization_rule_id MonitorDiagnosticSetting#eventhub_authorization_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubName">EventhubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#eventhub_name MonitorDiagnosticSetting#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#id MonitorDiagnosticSetting#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsDestinationType">LogAnalyticsDestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#log_analytics_destination_type MonitorDiagnosticSetting#log_analytics_destination_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#log_analytics_workspace_id MonitorDiagnosticSetting#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.metric">Metric</a></code> | <code>object</code> | metric block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.partnerSolutionId">PartnerSolutionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#partner_solution_id MonitorDiagnosticSetting#partner_solution_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#storage_account_id MonitorDiagnosticSetting#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#name MonitorDiagnosticSetting#name}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#target_resource_id MonitorDiagnosticSetting#target_resource_id}.

---

##### `EnabledLog`<sup>Optional</sup> <a name="EnabledLog" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.enabledLog"></a>

```csharp
public object EnabledLog { get; set; }
```

- *Type:* object

enabled_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#enabled_log MonitorDiagnosticSetting#enabled_log}

---

##### `EnabledMetric`<sup>Optional</sup> <a name="EnabledMetric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.enabledMetric"></a>

```csharp
public object EnabledMetric { get; set; }
```

- *Type:* object

enabled_metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#enabled_metric MonitorDiagnosticSetting#enabled_metric}

---

##### `EventhubAuthorizationRuleId`<sup>Optional</sup> <a name="EventhubAuthorizationRuleId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubAuthorizationRuleId"></a>

```csharp
public string EventhubAuthorizationRuleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#eventhub_authorization_rule_id MonitorDiagnosticSetting#eventhub_authorization_rule_id}.

---

##### `EventhubName`<sup>Optional</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubName"></a>

```csharp
public string EventhubName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#eventhub_name MonitorDiagnosticSetting#eventhub_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#id MonitorDiagnosticSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogAnalyticsDestinationType`<sup>Optional</sup> <a name="LogAnalyticsDestinationType" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsDestinationType"></a>

```csharp
public string LogAnalyticsDestinationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#log_analytics_destination_type MonitorDiagnosticSetting#log_analytics_destination_type}.

---

##### `LogAnalyticsWorkspaceId`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#log_analytics_workspace_id MonitorDiagnosticSetting#log_analytics_workspace_id}.

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.metric"></a>

```csharp
public object Metric { get; set; }
```

- *Type:* object

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#metric MonitorDiagnosticSetting#metric}

---

##### `PartnerSolutionId`<sup>Optional</sup> <a name="PartnerSolutionId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.partnerSolutionId"></a>

```csharp
public string PartnerSolutionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#partner_solution_id MonitorDiagnosticSetting#partner_solution_id}.

---

##### `StorageAccountId`<sup>Optional</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#storage_account_id MonitorDiagnosticSetting#storage_account_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.timeouts"></a>

```csharp
public MonitorDiagnosticSettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#timeouts MonitorDiagnosticSetting#timeouts}

---

### MonitorDiagnosticSettingEnabledLog <a name="MonitorDiagnosticSettingEnabledLog" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingEnabledLog {
    string Category = null,
    string CategoryGroup = null,
    MonitorDiagnosticSettingEnabledLogRetentionPolicy RetentionPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.categoryGroup">CategoryGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#category_group MonitorDiagnosticSetting#category_group}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a></code> | retention_policy block. |

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}.

---

##### `CategoryGroup`<sup>Optional</sup> <a name="CategoryGroup" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.categoryGroup"></a>

```csharp
public string CategoryGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#category_group MonitorDiagnosticSetting#category_group}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.retentionPolicy"></a>

```csharp
public MonitorDiagnosticSettingEnabledLogRetentionPolicy RetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#retention_policy MonitorDiagnosticSetting#retention_policy}

---

### MonitorDiagnosticSettingEnabledLogRetentionPolicy <a name="MonitorDiagnosticSettingEnabledLogRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingEnabledLogRetentionPolicy {
    object Enabled,
    double Days = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}.

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}.

---

### MonitorDiagnosticSettingEnabledMetric <a name="MonitorDiagnosticSettingEnabledMetric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingEnabledMetric {
    string Category
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetric.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}.

---

### MonitorDiagnosticSettingMetric <a name="MonitorDiagnosticSettingMetric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingMetric {
    string Category,
    object Enabled = null,
    MonitorDiagnosticSettingMetricRetentionPolicy RetentionPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a></code> | retention_policy block. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.retentionPolicy"></a>

```csharp
public MonitorDiagnosticSettingMetricRetentionPolicy RetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#retention_policy MonitorDiagnosticSetting#retention_policy}

---

### MonitorDiagnosticSettingMetricRetentionPolicy <a name="MonitorDiagnosticSettingMetricRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingMetricRetentionPolicy {
    object Enabled,
    double Days = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}.

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}.

---

### MonitorDiagnosticSettingTimeouts <a name="MonitorDiagnosticSettingTimeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#create MonitorDiagnosticSetting#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#delete MonitorDiagnosticSetting#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#read MonitorDiagnosticSetting#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#update MonitorDiagnosticSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#create MonitorDiagnosticSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#delete MonitorDiagnosticSetting#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#read MonitorDiagnosticSetting#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/monitor_diagnostic_setting#update MonitorDiagnosticSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorDiagnosticSettingEnabledLogList <a name="MonitorDiagnosticSettingEnabledLogList" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingEnabledLogList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.get"></a>

```csharp
private MonitorDiagnosticSettingEnabledLogOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorDiagnosticSettingEnabledLogOutputReference <a name="MonitorDiagnosticSettingEnabledLogOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingEnabledLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategoryGroup">ResetCategoryGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.putRetentionPolicy"></a>

```csharp
private void PutRetentionPolicy(MonitorDiagnosticSettingEnabledLogRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a>

---

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategory"></a>

```csharp
private void ResetCategory()
```

##### `ResetCategoryGroup` <a name="ResetCategoryGroup" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategoryGroup"></a>

```csharp
private void ResetCategoryGroup()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetRetentionPolicy"></a>

```csharp
private void ResetRetentionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference">MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroupInput">CategoryGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroup">CategoryGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.retentionPolicy"></a>

```csharp
public MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference RetentionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference">MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference</a>

---

##### `CategoryGroupInput`<sup>Optional</sup> <a name="CategoryGroupInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroupInput"></a>

```csharp
public string CategoryGroupInput { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.retentionPolicyInput"></a>

```csharp
public MonitorDiagnosticSettingEnabledLogRetentionPolicy RetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a>

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `CategoryGroup`<sup>Required</sup> <a name="CategoryGroup" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroup"></a>

```csharp
public string CategoryGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference <a name="MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resetDays">ResetDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public MonitorDiagnosticSettingEnabledLogRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a>

---


### MonitorDiagnosticSettingEnabledMetricList <a name="MonitorDiagnosticSettingEnabledMetricList" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingEnabledMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.get"></a>

```csharp
private MonitorDiagnosticSettingEnabledMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorDiagnosticSettingEnabledMetricOutputReference <a name="MonitorDiagnosticSettingEnabledMetricOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingEnabledMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledMetricOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorDiagnosticSettingMetricList <a name="MonitorDiagnosticSettingMetricList" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.get"></a>

```csharp
private MonitorDiagnosticSettingMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorDiagnosticSettingMetricOutputReference <a name="MonitorDiagnosticSettingMetricOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.putRetentionPolicy"></a>

```csharp
private void PutRetentionPolicy(MonitorDiagnosticSettingMetricRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resetRetentionPolicy"></a>

```csharp
private void ResetRetentionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference">MonitorDiagnosticSettingMetricRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.retentionPolicy"></a>

```csharp
public MonitorDiagnosticSettingMetricRetentionPolicyOutputReference RetentionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference">MonitorDiagnosticSettingMetricRetentionPolicyOutputReference</a>

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.retentionPolicyInput"></a>

```csharp
public MonitorDiagnosticSettingMetricRetentionPolicy RetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a>

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorDiagnosticSettingMetricRetentionPolicyOutputReference <a name="MonitorDiagnosticSettingMetricRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingMetricRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.resetDays">ResetDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public MonitorDiagnosticSettingMetricRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a>

---


### MonitorDiagnosticSettingTimeoutsOutputReference <a name="MonitorDiagnosticSettingTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorDiagnosticSettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



