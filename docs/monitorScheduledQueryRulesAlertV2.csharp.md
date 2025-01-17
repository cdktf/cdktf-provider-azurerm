# `monitorScheduledQueryRulesAlertV2` Submodule <a name="`monitorScheduledQueryRulesAlertV2` Submodule" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorScheduledQueryRulesAlertV2 <a name="MonitorScheduledQueryRulesAlertV2" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2 azurerm_monitor_scheduled_query_rules_alert_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2(Construct Scope, string Id, MonitorScheduledQueryRulesAlertV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config">MonitorScheduledQueryRulesAlertV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config">MonitorScheduledQueryRulesAlertV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetAutoMitigationEnabled">ResetAutoMitigationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetMuteActionsAfterAlertDuration">ResetMuteActionsAfterAlertDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetQueryTimeRangeOverride">ResetQueryTimeRangeOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetSkipQueryValidation">ResetSkipQueryValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetTargetResourceTypes">ResetTargetResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetWorkspaceAlertsStorageEnabled">ResetWorkspaceAlertsStorageEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putAction"></a>

```csharp
private void PutAction(MonitorScheduledQueryRulesAlertV2Action Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action">MonitorScheduledQueryRulesAlertV2Action</a>

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putCriteria"></a>

```csharp
private void PutCriteria(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putCriteria.parameter.value"></a>

- *Type:* object

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putIdentity"></a>

```csharp
private void PutIdentity(MonitorScheduledQueryRulesAlertV2Identity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity">MonitorScheduledQueryRulesAlertV2Identity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitorScheduledQueryRulesAlertV2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts">MonitorScheduledQueryRulesAlertV2Timeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetAutoMitigationEnabled` <a name="ResetAutoMitigationEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetAutoMitigationEnabled"></a>

```csharp
private void ResetAutoMitigationEnabled()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetMuteActionsAfterAlertDuration` <a name="ResetMuteActionsAfterAlertDuration" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetMuteActionsAfterAlertDuration"></a>

```csharp
private void ResetMuteActionsAfterAlertDuration()
```

##### `ResetQueryTimeRangeOverride` <a name="ResetQueryTimeRangeOverride" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetQueryTimeRangeOverride"></a>

```csharp
private void ResetQueryTimeRangeOverride()
```

##### `ResetSkipQueryValidation` <a name="ResetSkipQueryValidation" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetSkipQueryValidation"></a>

```csharp
private void ResetSkipQueryValidation()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTargetResourceTypes` <a name="ResetTargetResourceTypes" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetTargetResourceTypes"></a>

```csharp
private void ResetTargetResourceTypes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkspaceAlertsStorageEnabled` <a name="ResetWorkspaceAlertsStorageEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetWorkspaceAlertsStorageEnabled"></a>

```csharp
private void ResetWorkspaceAlertsStorageEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorScheduledQueryRulesAlertV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorScheduledQueryRulesAlertV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorScheduledQueryRulesAlertV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorScheduledQueryRulesAlertV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorScheduledQueryRulesAlertV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MonitorScheduledQueryRulesAlertV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorScheduledQueryRulesAlertV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorScheduledQueryRulesAlertV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MonitorScheduledQueryRulesAlertV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference">MonitorScheduledQueryRulesAlertV2ActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.createdWithApiVersion">CreatedWithApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList">MonitorScheduledQueryRulesAlertV2CriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference">MonitorScheduledQueryRulesAlertV2IdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.isALegacyLogAnalyticsRule">IsALegacyLogAnalyticsRule</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.isWorkspaceAlertsStorageConfigured">IsWorkspaceAlertsStorageConfigured</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference">MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action">MonitorScheduledQueryRulesAlertV2Action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.autoMitigationEnabledInput">AutoMitigationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.criteriaInput">CriteriaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.evaluationFrequencyInput">EvaluationFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity">MonitorScheduledQueryRulesAlertV2Identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.muteActionsAfterAlertDurationInput">MuteActionsAfterAlertDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.queryTimeRangeOverrideInput">QueryTimeRangeOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.severityInput">SeverityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.skipQueryValidationInput">SkipQueryValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.targetResourceTypesInput">TargetResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.windowDurationInput">WindowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.workspaceAlertsStorageEnabledInput">WorkspaceAlertsStorageEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.autoMitigationEnabled">AutoMitigationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.evaluationFrequency">EvaluationFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.muteActionsAfterAlertDuration">MuteActionsAfterAlertDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.queryTimeRangeOverride">QueryTimeRangeOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.severity">Severity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.skipQueryValidation">SkipQueryValidation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.targetResourceTypes">TargetResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.windowDuration">WindowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.workspaceAlertsStorageEnabled">WorkspaceAlertsStorageEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.action"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2ActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference">MonitorScheduledQueryRulesAlertV2ActionOutputReference</a>

---

##### `CreatedWithApiVersion`<sup>Required</sup> <a name="CreatedWithApiVersion" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.createdWithApiVersion"></a>

```csharp
public string CreatedWithApiVersion { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.criteria"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2CriteriaList Criteria { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList">MonitorScheduledQueryRulesAlertV2CriteriaList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.identity"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2IdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference">MonitorScheduledQueryRulesAlertV2IdentityOutputReference</a>

---

##### `IsALegacyLogAnalyticsRule`<sup>Required</sup> <a name="IsALegacyLogAnalyticsRule" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.isALegacyLogAnalyticsRule"></a>

```csharp
public IResolvable IsALegacyLogAnalyticsRule { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsWorkspaceAlertsStorageConfigured`<sup>Required</sup> <a name="IsWorkspaceAlertsStorageConfigured" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.isWorkspaceAlertsStorageConfigured"></a>

```csharp
public IResolvable IsWorkspaceAlertsStorageConfigured { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.timeouts"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference">MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.actionInput"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2Action ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action">MonitorScheduledQueryRulesAlertV2Action</a>

---

##### `AutoMitigationEnabledInput`<sup>Optional</sup> <a name="AutoMitigationEnabledInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.autoMitigationEnabledInput"></a>

```csharp
public object AutoMitigationEnabledInput { get; }
```

- *Type:* object

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.criteriaInput"></a>

```csharp
public object CriteriaInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EvaluationFrequencyInput`<sup>Optional</sup> <a name="EvaluationFrequencyInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.evaluationFrequencyInput"></a>

```csharp
public string EvaluationFrequencyInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.identityInput"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2Identity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity">MonitorScheduledQueryRulesAlertV2Identity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MuteActionsAfterAlertDurationInput`<sup>Optional</sup> <a name="MuteActionsAfterAlertDurationInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.muteActionsAfterAlertDurationInput"></a>

```csharp
public string MuteActionsAfterAlertDurationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QueryTimeRangeOverrideInput`<sup>Optional</sup> <a name="QueryTimeRangeOverrideInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.queryTimeRangeOverrideInput"></a>

```csharp
public string QueryTimeRangeOverrideInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.severityInput"></a>

```csharp
public double SeverityInput { get; }
```

- *Type:* double

---

##### `SkipQueryValidationInput`<sup>Optional</sup> <a name="SkipQueryValidationInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.skipQueryValidationInput"></a>

```csharp
public object SkipQueryValidationInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetResourceTypesInput`<sup>Optional</sup> <a name="TargetResourceTypesInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.targetResourceTypesInput"></a>

```csharp
public string[] TargetResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WindowDurationInput`<sup>Optional</sup> <a name="WindowDurationInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.windowDurationInput"></a>

```csharp
public string WindowDurationInput { get; }
```

- *Type:* string

---

##### `WorkspaceAlertsStorageEnabledInput`<sup>Optional</sup> <a name="WorkspaceAlertsStorageEnabledInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.workspaceAlertsStorageEnabledInput"></a>

```csharp
public object WorkspaceAlertsStorageEnabledInput { get; }
```

- *Type:* object

---

##### `AutoMitigationEnabled`<sup>Required</sup> <a name="AutoMitigationEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.autoMitigationEnabled"></a>

```csharp
public object AutoMitigationEnabled { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `EvaluationFrequency`<sup>Required</sup> <a name="EvaluationFrequency" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.evaluationFrequency"></a>

```csharp
public string EvaluationFrequency { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MuteActionsAfterAlertDuration`<sup>Required</sup> <a name="MuteActionsAfterAlertDuration" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.muteActionsAfterAlertDuration"></a>

```csharp
public string MuteActionsAfterAlertDuration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `QueryTimeRangeOverride`<sup>Required</sup> <a name="QueryTimeRangeOverride" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.queryTimeRangeOverride"></a>

```csharp
public string QueryTimeRangeOverride { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.severity"></a>

```csharp
public double Severity { get; }
```

- *Type:* double

---

##### `SkipQueryValidation`<sup>Required</sup> <a name="SkipQueryValidation" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.skipQueryValidation"></a>

```csharp
public object SkipQueryValidation { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetResourceTypes`<sup>Required</sup> <a name="TargetResourceTypes" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.targetResourceTypes"></a>

```csharp
public string[] TargetResourceTypes { get; }
```

- *Type:* string[]

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.windowDuration"></a>

```csharp
public string WindowDuration { get; }
```

- *Type:* string

---

##### `WorkspaceAlertsStorageEnabled`<sup>Required</sup> <a name="WorkspaceAlertsStorageEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.workspaceAlertsStorageEnabled"></a>

```csharp
public object WorkspaceAlertsStorageEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorScheduledQueryRulesAlertV2Action <a name="MonitorScheduledQueryRulesAlertV2Action" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2Action {
    string[] ActionGroups = null,
    System.Collections.Generic.IDictionary<string, string> CustomProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action.property.actionGroups">ActionGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#action_groups MonitorScheduledQueryRulesAlertV2#action_groups}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action.property.customProperties">CustomProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#custom_properties MonitorScheduledQueryRulesAlertV2#custom_properties}. |

---

##### `ActionGroups`<sup>Optional</sup> <a name="ActionGroups" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action.property.actionGroups"></a>

```csharp
public string[] ActionGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#action_groups MonitorScheduledQueryRulesAlertV2#action_groups}.

---

##### `CustomProperties`<sup>Optional</sup> <a name="CustomProperties" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action.property.customProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#custom_properties MonitorScheduledQueryRulesAlertV2#custom_properties}.

---

### MonitorScheduledQueryRulesAlertV2Config <a name="MonitorScheduledQueryRulesAlertV2Config" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Criteria,
    string EvaluationFrequency,
    string Location,
    string Name,
    string ResourceGroupName,
    string[] Scopes,
    double Severity,
    string WindowDuration,
    MonitorScheduledQueryRulesAlertV2Action Action = null,
    object AutoMitigationEnabled = null,
    string Description = null,
    string DisplayName = null,
    object Enabled = null,
    string Id = null,
    MonitorScheduledQueryRulesAlertV2Identity Identity = null,
    string MuteActionsAfterAlertDuration = null,
    string QueryTimeRangeOverride = null,
    object SkipQueryValidation = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string[] TargetResourceTypes = null,
    MonitorScheduledQueryRulesAlertV2Timeouts Timeouts = null,
    object WorkspaceAlertsStorageEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.criteria">Criteria</a></code> | <code>object</code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.evaluationFrequency">EvaluationFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#evaluation_frequency MonitorScheduledQueryRulesAlertV2#evaluation_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#location MonitorScheduledQueryRulesAlertV2#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#name MonitorScheduledQueryRulesAlertV2#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#resource_group_name MonitorScheduledQueryRulesAlertV2#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.scopes">Scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#scopes MonitorScheduledQueryRulesAlertV2#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.severity">Severity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#severity MonitorScheduledQueryRulesAlertV2#severity}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.windowDuration">WindowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#window_duration MonitorScheduledQueryRulesAlertV2#window_duration}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action">MonitorScheduledQueryRulesAlertV2Action</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.autoMitigationEnabled">AutoMitigationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#auto_mitigation_enabled MonitorScheduledQueryRulesAlertV2#auto_mitigation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#description MonitorScheduledQueryRulesAlertV2#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#display_name MonitorScheduledQueryRulesAlertV2#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#enabled MonitorScheduledQueryRulesAlertV2#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#id MonitorScheduledQueryRulesAlertV2#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity">MonitorScheduledQueryRulesAlertV2Identity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.muteActionsAfterAlertDuration">MuteActionsAfterAlertDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#mute_actions_after_alert_duration MonitorScheduledQueryRulesAlertV2#mute_actions_after_alert_duration}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.queryTimeRangeOverride">QueryTimeRangeOverride</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#query_time_range_override MonitorScheduledQueryRulesAlertV2#query_time_range_override}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.skipQueryValidation">SkipQueryValidation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#skip_query_validation MonitorScheduledQueryRulesAlertV2#skip_query_validation}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#tags MonitorScheduledQueryRulesAlertV2#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.targetResourceTypes">TargetResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#target_resource_types MonitorScheduledQueryRulesAlertV2#target_resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts">MonitorScheduledQueryRulesAlertV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.workspaceAlertsStorageEnabled">WorkspaceAlertsStorageEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#workspace_alerts_storage_enabled MonitorScheduledQueryRulesAlertV2#workspace_alerts_storage_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.criteria"></a>

```csharp
public object Criteria { get; set; }
```

- *Type:* object

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#criteria MonitorScheduledQueryRulesAlertV2#criteria}

---

##### `EvaluationFrequency`<sup>Required</sup> <a name="EvaluationFrequency" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.evaluationFrequency"></a>

```csharp
public string EvaluationFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#evaluation_frequency MonitorScheduledQueryRulesAlertV2#evaluation_frequency}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#location MonitorScheduledQueryRulesAlertV2#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#name MonitorScheduledQueryRulesAlertV2#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#resource_group_name MonitorScheduledQueryRulesAlertV2#resource_group_name}.

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#scopes MonitorScheduledQueryRulesAlertV2#scopes}.

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.severity"></a>

```csharp
public double Severity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#severity MonitorScheduledQueryRulesAlertV2#severity}.

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.windowDuration"></a>

```csharp
public string WindowDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#window_duration MonitorScheduledQueryRulesAlertV2#window_duration}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.action"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2Action Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action">MonitorScheduledQueryRulesAlertV2Action</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#action MonitorScheduledQueryRulesAlertV2#action}

---

##### `AutoMitigationEnabled`<sup>Optional</sup> <a name="AutoMitigationEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.autoMitigationEnabled"></a>

```csharp
public object AutoMitigationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#auto_mitigation_enabled MonitorScheduledQueryRulesAlertV2#auto_mitigation_enabled}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#description MonitorScheduledQueryRulesAlertV2#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#display_name MonitorScheduledQueryRulesAlertV2#display_name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#enabled MonitorScheduledQueryRulesAlertV2#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#id MonitorScheduledQueryRulesAlertV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.identity"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2Identity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity">MonitorScheduledQueryRulesAlertV2Identity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#identity MonitorScheduledQueryRulesAlertV2#identity}

---

##### `MuteActionsAfterAlertDuration`<sup>Optional</sup> <a name="MuteActionsAfterAlertDuration" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.muteActionsAfterAlertDuration"></a>

```csharp
public string MuteActionsAfterAlertDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#mute_actions_after_alert_duration MonitorScheduledQueryRulesAlertV2#mute_actions_after_alert_duration}.

---

##### `QueryTimeRangeOverride`<sup>Optional</sup> <a name="QueryTimeRangeOverride" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.queryTimeRangeOverride"></a>

```csharp
public string QueryTimeRangeOverride { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#query_time_range_override MonitorScheduledQueryRulesAlertV2#query_time_range_override}.

---

##### `SkipQueryValidation`<sup>Optional</sup> <a name="SkipQueryValidation" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.skipQueryValidation"></a>

```csharp
public object SkipQueryValidation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#skip_query_validation MonitorScheduledQueryRulesAlertV2#skip_query_validation}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#tags MonitorScheduledQueryRulesAlertV2#tags}.

---

##### `TargetResourceTypes`<sup>Optional</sup> <a name="TargetResourceTypes" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.targetResourceTypes"></a>

```csharp
public string[] TargetResourceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#target_resource_types MonitorScheduledQueryRulesAlertV2#target_resource_types}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.timeouts"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts">MonitorScheduledQueryRulesAlertV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#timeouts MonitorScheduledQueryRulesAlertV2#timeouts}

---

##### `WorkspaceAlertsStorageEnabled`<sup>Optional</sup> <a name="WorkspaceAlertsStorageEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.workspaceAlertsStorageEnabled"></a>

```csharp
public object WorkspaceAlertsStorageEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#workspace_alerts_storage_enabled MonitorScheduledQueryRulesAlertV2#workspace_alerts_storage_enabled}.

---

### MonitorScheduledQueryRulesAlertV2Criteria <a name="MonitorScheduledQueryRulesAlertV2Criteria" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2Criteria {
    string Operator,
    string Query,
    double Threshold,
    string TimeAggregationMethod,
    object Dimension = null,
    MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods FailingPeriods = null,
    string MetricMeasureColumn = null,
    string ResourceIdColumn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#operator MonitorScheduledQueryRulesAlertV2#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#query MonitorScheduledQueryRulesAlertV2#query}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#threshold MonitorScheduledQueryRulesAlertV2#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.timeAggregationMethod">TimeAggregationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#time_aggregation_method MonitorScheduledQueryRulesAlertV2#time_aggregation_method}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.dimension">Dimension</a></code> | <code>object</code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.failingPeriods">FailingPeriods</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods</a></code> | failing_periods block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.metricMeasureColumn">MetricMeasureColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#metric_measure_column MonitorScheduledQueryRulesAlertV2#metric_measure_column}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.resourceIdColumn">ResourceIdColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#resource_id_column MonitorScheduledQueryRulesAlertV2#resource_id_column}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#operator MonitorScheduledQueryRulesAlertV2#operator}.

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#query MonitorScheduledQueryRulesAlertV2#query}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#threshold MonitorScheduledQueryRulesAlertV2#threshold}.

---

##### `TimeAggregationMethod`<sup>Required</sup> <a name="TimeAggregationMethod" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.timeAggregationMethod"></a>

```csharp
public string TimeAggregationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#time_aggregation_method MonitorScheduledQueryRulesAlertV2#time_aggregation_method}.

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.dimension"></a>

```csharp
public object Dimension { get; set; }
```

- *Type:* object

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#dimension MonitorScheduledQueryRulesAlertV2#dimension}

---

##### `FailingPeriods`<sup>Optional</sup> <a name="FailingPeriods" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.failingPeriods"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods FailingPeriods { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods</a>

failing_periods block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#failing_periods MonitorScheduledQueryRulesAlertV2#failing_periods}

---

##### `MetricMeasureColumn`<sup>Optional</sup> <a name="MetricMeasureColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.metricMeasureColumn"></a>

```csharp
public string MetricMeasureColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#metric_measure_column MonitorScheduledQueryRulesAlertV2#metric_measure_column}.

---

##### `ResourceIdColumn`<sup>Optional</sup> <a name="ResourceIdColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.resourceIdColumn"></a>

```csharp
public string ResourceIdColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#resource_id_column MonitorScheduledQueryRulesAlertV2#resource_id_column}.

---

### MonitorScheduledQueryRulesAlertV2CriteriaDimension <a name="MonitorScheduledQueryRulesAlertV2CriteriaDimension" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2CriteriaDimension {
    string Name,
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#name MonitorScheduledQueryRulesAlertV2#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#operator MonitorScheduledQueryRulesAlertV2#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#values MonitorScheduledQueryRulesAlertV2#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#name MonitorScheduledQueryRulesAlertV2#name}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#operator MonitorScheduledQueryRulesAlertV2#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#values MonitorScheduledQueryRulesAlertV2#values}.

---

### MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods <a name="MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods {
    double MinimumFailingPeriodsToTriggerAlert,
    double NumberOfEvaluationPeriods
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods.property.minimumFailingPeriodsToTriggerAlert">MinimumFailingPeriodsToTriggerAlert</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#minimum_failing_periods_to_trigger_alert MonitorScheduledQueryRulesAlertV2#minimum_failing_periods_to_trigger_alert}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods.property.numberOfEvaluationPeriods">NumberOfEvaluationPeriods</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#number_of_evaluation_periods MonitorScheduledQueryRulesAlertV2#number_of_evaluation_periods}. |

---

##### `MinimumFailingPeriodsToTriggerAlert`<sup>Required</sup> <a name="MinimumFailingPeriodsToTriggerAlert" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods.property.minimumFailingPeriodsToTriggerAlert"></a>

```csharp
public double MinimumFailingPeriodsToTriggerAlert { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#minimum_failing_periods_to_trigger_alert MonitorScheduledQueryRulesAlertV2#minimum_failing_periods_to_trigger_alert}.

---

##### `NumberOfEvaluationPeriods`<sup>Required</sup> <a name="NumberOfEvaluationPeriods" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods.property.numberOfEvaluationPeriods"></a>

```csharp
public double NumberOfEvaluationPeriods { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#number_of_evaluation_periods MonitorScheduledQueryRulesAlertV2#number_of_evaluation_periods}.

---

### MonitorScheduledQueryRulesAlertV2Identity <a name="MonitorScheduledQueryRulesAlertV2Identity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2Identity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#type MonitorScheduledQueryRulesAlertV2#type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#identity_ids MonitorScheduledQueryRulesAlertV2#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#type MonitorScheduledQueryRulesAlertV2#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#identity_ids MonitorScheduledQueryRulesAlertV2#identity_ids}.

---

### MonitorScheduledQueryRulesAlertV2Timeouts <a name="MonitorScheduledQueryRulesAlertV2Timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2Timeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#create MonitorScheduledQueryRulesAlertV2#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#delete MonitorScheduledQueryRulesAlertV2#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#read MonitorScheduledQueryRulesAlertV2#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#update MonitorScheduledQueryRulesAlertV2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#create MonitorScheduledQueryRulesAlertV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#delete MonitorScheduledQueryRulesAlertV2#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#read MonitorScheduledQueryRulesAlertV2#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/monitor_scheduled_query_rules_alert_v2#update MonitorScheduledQueryRulesAlertV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorScheduledQueryRulesAlertV2ActionOutputReference <a name="MonitorScheduledQueryRulesAlertV2ActionOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2ActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.resetActionGroups">ResetActionGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.resetCustomProperties">ResetCustomProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionGroups` <a name="ResetActionGroups" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.resetActionGroups"></a>

```csharp
private void ResetActionGroups()
```

##### `ResetCustomProperties` <a name="ResetCustomProperties" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.resetCustomProperties"></a>

```csharp
private void ResetCustomProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.actionGroupsInput">ActionGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.customPropertiesInput">CustomPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.actionGroups">ActionGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.customProperties">CustomProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action">MonitorScheduledQueryRulesAlertV2Action</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionGroupsInput`<sup>Optional</sup> <a name="ActionGroupsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.actionGroupsInput"></a>

```csharp
public string[] ActionGroupsInput { get; }
```

- *Type:* string[]

---

##### `CustomPropertiesInput`<sup>Optional</sup> <a name="CustomPropertiesInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.customPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ActionGroups`<sup>Required</sup> <a name="ActionGroups" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.actionGroups"></a>

```csharp
public string[] ActionGroups { get; }
```

- *Type:* string[]

---

##### `CustomProperties`<sup>Required</sup> <a name="CustomProperties" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.customProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.internalValue"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2Action InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action">MonitorScheduledQueryRulesAlertV2Action</a>

---


### MonitorScheduledQueryRulesAlertV2CriteriaDimensionList <a name="MonitorScheduledQueryRulesAlertV2CriteriaDimensionList" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2CriteriaDimensionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.get"></a>

```csharp
private MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference <a name="MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference <a name="MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.minimumFailingPeriodsToTriggerAlertInput">MinimumFailingPeriodsToTriggerAlertInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.numberOfEvaluationPeriodsInput">NumberOfEvaluationPeriodsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.minimumFailingPeriodsToTriggerAlert">MinimumFailingPeriodsToTriggerAlert</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.numberOfEvaluationPeriods">NumberOfEvaluationPeriods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinimumFailingPeriodsToTriggerAlertInput`<sup>Optional</sup> <a name="MinimumFailingPeriodsToTriggerAlertInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.minimumFailingPeriodsToTriggerAlertInput"></a>

```csharp
public double MinimumFailingPeriodsToTriggerAlertInput { get; }
```

- *Type:* double

---

##### `NumberOfEvaluationPeriodsInput`<sup>Optional</sup> <a name="NumberOfEvaluationPeriodsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.numberOfEvaluationPeriodsInput"></a>

```csharp
public double NumberOfEvaluationPeriodsInput { get; }
```

- *Type:* double

---

##### `MinimumFailingPeriodsToTriggerAlert`<sup>Required</sup> <a name="MinimumFailingPeriodsToTriggerAlert" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.minimumFailingPeriodsToTriggerAlert"></a>

```csharp
public double MinimumFailingPeriodsToTriggerAlert { get; }
```

- *Type:* double

---

##### `NumberOfEvaluationPeriods`<sup>Required</sup> <a name="NumberOfEvaluationPeriods" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.numberOfEvaluationPeriods"></a>

```csharp
public double NumberOfEvaluationPeriods { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.internalValue"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods</a>

---


### MonitorScheduledQueryRulesAlertV2CriteriaList <a name="MonitorScheduledQueryRulesAlertV2CriteriaList" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2CriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.get"></a>

```csharp
private MonitorScheduledQueryRulesAlertV2CriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorScheduledQueryRulesAlertV2CriteriaOutputReference <a name="MonitorScheduledQueryRulesAlertV2CriteriaOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2CriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.putFailingPeriods">PutFailingPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetFailingPeriods">ResetFailingPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetMetricMeasureColumn">ResetMetricMeasureColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetResourceIdColumn">ResetResourceIdColumn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.putDimension"></a>

```csharp
private void PutDimension(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.putDimension.parameter.value"></a>

- *Type:* object

---

##### `PutFailingPeriods` <a name="PutFailingPeriods" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.putFailingPeriods"></a>

```csharp
private void PutFailingPeriods(MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.putFailingPeriods.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods</a>

---

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetDimension"></a>

```csharp
private void ResetDimension()
```

##### `ResetFailingPeriods` <a name="ResetFailingPeriods" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetFailingPeriods"></a>

```csharp
private void ResetFailingPeriods()
```

##### `ResetMetricMeasureColumn` <a name="ResetMetricMeasureColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetMetricMeasureColumn"></a>

```csharp
private void ResetMetricMeasureColumn()
```

##### `ResetResourceIdColumn` <a name="ResetResourceIdColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetResourceIdColumn"></a>

```csharp
private void ResetResourceIdColumn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList">MonitorScheduledQueryRulesAlertV2CriteriaDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.failingPeriods">FailingPeriods</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.failingPeriodsInput">FailingPeriodsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.metricMeasureColumnInput">MetricMeasureColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.resourceIdColumnInput">ResourceIdColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.timeAggregationMethodInput">TimeAggregationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.metricMeasureColumn">MetricMeasureColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.resourceIdColumn">ResourceIdColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.timeAggregationMethod">TimeAggregationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.dimension"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2CriteriaDimensionList Dimension { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList">MonitorScheduledQueryRulesAlertV2CriteriaDimensionList</a>

---

##### `FailingPeriods`<sup>Required</sup> <a name="FailingPeriods" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.failingPeriods"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference FailingPeriods { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.dimensionInput"></a>

```csharp
public object DimensionInput { get; }
```

- *Type:* object

---

##### `FailingPeriodsInput`<sup>Optional</sup> <a name="FailingPeriodsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.failingPeriodsInput"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods FailingPeriodsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods</a>

---

##### `MetricMeasureColumnInput`<sup>Optional</sup> <a name="MetricMeasureColumnInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.metricMeasureColumnInput"></a>

```csharp
public string MetricMeasureColumnInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `ResourceIdColumnInput`<sup>Optional</sup> <a name="ResourceIdColumnInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.resourceIdColumnInput"></a>

```csharp
public string ResourceIdColumnInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `TimeAggregationMethodInput`<sup>Optional</sup> <a name="TimeAggregationMethodInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.timeAggregationMethodInput"></a>

```csharp
public string TimeAggregationMethodInput { get; }
```

- *Type:* string

---

##### `MetricMeasureColumn`<sup>Required</sup> <a name="MetricMeasureColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.metricMeasureColumn"></a>

```csharp
public string MetricMeasureColumn { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `ResourceIdColumn`<sup>Required</sup> <a name="ResourceIdColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.resourceIdColumn"></a>

```csharp
public string ResourceIdColumn { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `TimeAggregationMethod`<sup>Required</sup> <a name="TimeAggregationMethod" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.timeAggregationMethod"></a>

```csharp
public string TimeAggregationMethod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorScheduledQueryRulesAlertV2IdentityOutputReference <a name="MonitorScheduledQueryRulesAlertV2IdentityOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2IdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity">MonitorScheduledQueryRulesAlertV2Identity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.internalValue"></a>

```csharp
public MonitorScheduledQueryRulesAlertV2Identity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity">MonitorScheduledQueryRulesAlertV2Identity</a>

---


### MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference <a name="MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



