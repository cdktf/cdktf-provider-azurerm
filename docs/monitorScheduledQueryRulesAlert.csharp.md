# `monitorScheduledQueryRulesAlert` Submodule <a name="`monitorScheduledQueryRulesAlert` Submodule" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorScheduledQueryRulesAlert <a name="MonitorScheduledQueryRulesAlert" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert azurerm_monitor_scheduled_query_rules_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlert(Construct Scope, string Id, MonitorScheduledQueryRulesAlertConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig">MonitorScheduledQueryRulesAlertConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig">MonitorScheduledQueryRulesAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putTrigger">PutTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetAuthorizedResourceIds">ResetAuthorizedResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetAutoMitigationEnabled">ResetAutoMitigationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetQueryType">ResetQueryType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetThrottling">ResetThrottling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putAction"></a>

```csharp
private void PutAction(MonitorScheduledQueryRulesAlertAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitorScheduledQueryRulesAlertTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a>

---

##### `PutTrigger` <a name="PutTrigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putTrigger"></a>

```csharp
private void PutTrigger(MonitorScheduledQueryRulesAlertTrigger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a>

---

##### `ResetAuthorizedResourceIds` <a name="ResetAuthorizedResourceIds" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetAuthorizedResourceIds"></a>

```csharp
private void ResetAuthorizedResourceIds()
```

##### `ResetAutoMitigationEnabled` <a name="ResetAutoMitigationEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetAutoMitigationEnabled"></a>

```csharp
private void ResetAutoMitigationEnabled()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetQueryType` <a name="ResetQueryType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetQueryType"></a>

```csharp
private void ResetQueryType()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetSeverity"></a>

```csharp
private void ResetSeverity()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThrottling` <a name="ResetThrottling" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetThrottling"></a>

```csharp
private void ResetThrottling()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorScheduledQueryRulesAlert resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorScheduledQueryRulesAlert.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorScheduledQueryRulesAlert.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorScheduledQueryRulesAlert.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorScheduledQueryRulesAlert.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MonitorScheduledQueryRulesAlert resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorScheduledQueryRulesAlert to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorScheduledQueryRulesAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MonitorScheduledQueryRulesAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference">MonitorScheduledQueryRulesAlertActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference">MonitorScheduledQueryRulesAlertTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference">MonitorScheduledQueryRulesAlertTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.authorizedResourceIdsInput">AuthorizedResourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.autoMitigationEnabledInput">AutoMitigationEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.dataSourceIdInput">DataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.frequencyInput">FrequencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.queryTypeInput">QueryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.severityInput">SeverityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.throttlingInput">ThrottlingInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeWindowInput">TimeWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.triggerInput">TriggerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.authorizedResourceIds">AuthorizedResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.autoMitigationEnabled">AutoMitigationEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.frequency">Frequency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.queryType">QueryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.severity">Severity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.throttling">Throttling</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeWindow">TimeWindow</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.action"></a>

```csharp
public MonitorScheduledQueryRulesAlertActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference">MonitorScheduledQueryRulesAlertActionOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeouts"></a>

```csharp
public MonitorScheduledQueryRulesAlertTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference">MonitorScheduledQueryRulesAlertTimeoutsOutputReference</a>

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.trigger"></a>

```csharp
public MonitorScheduledQueryRulesAlertTriggerOutputReference Trigger { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference">MonitorScheduledQueryRulesAlertTriggerOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.actionInput"></a>

```csharp
public MonitorScheduledQueryRulesAlertAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a>

---

##### `AuthorizedResourceIdsInput`<sup>Optional</sup> <a name="AuthorizedResourceIdsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.authorizedResourceIdsInput"></a>

```csharp
public string[] AuthorizedResourceIdsInput { get; }
```

- *Type:* string[]

---

##### `AutoMitigationEnabledInput`<sup>Optional</sup> <a name="AutoMitigationEnabledInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.autoMitigationEnabledInput"></a>

```csharp
public bool|IResolvable AutoMitigationEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DataSourceIdInput`<sup>Optional</sup> <a name="DataSourceIdInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.dataSourceIdInput"></a>

```csharp
public string DataSourceIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.frequencyInput"></a>

```csharp
public double FrequencyInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `QueryTypeInput`<sup>Optional</sup> <a name="QueryTypeInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.queryTypeInput"></a>

```csharp
public string QueryTypeInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.severityInput"></a>

```csharp
public double SeverityInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThrottlingInput`<sup>Optional</sup> <a name="ThrottlingInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.throttlingInput"></a>

```csharp
public double ThrottlingInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeoutsInput"></a>

```csharp
public IResolvable|MonitorScheduledQueryRulesAlertTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a>

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeWindowInput"></a>

```csharp
public double TimeWindowInput { get; }
```

- *Type:* double

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.triggerInput"></a>

```csharp
public MonitorScheduledQueryRulesAlertTrigger TriggerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a>

---

##### `AuthorizedResourceIds`<sup>Required</sup> <a name="AuthorizedResourceIds" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.authorizedResourceIds"></a>

```csharp
public string[] AuthorizedResourceIds { get; }
```

- *Type:* string[]

---

##### `AutoMitigationEnabled`<sup>Required</sup> <a name="AutoMitigationEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.autoMitigationEnabled"></a>

```csharp
public bool|IResolvable AutoMitigationEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.frequency"></a>

```csharp
public double Frequency { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `QueryType`<sup>Required</sup> <a name="QueryType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.queryType"></a>

```csharp
public string QueryType { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.severity"></a>

```csharp
public double Severity { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Throttling`<sup>Required</sup> <a name="Throttling" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.throttling"></a>

```csharp
public double Throttling { get; }
```

- *Type:* double

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.timeWindow"></a>

```csharp
public double TimeWindow { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlert.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorScheduledQueryRulesAlertAction <a name="MonitorScheduledQueryRulesAlertAction" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertAction {
    string[] ActionGroup,
    string CustomWebhookPayload = null,
    string EmailSubject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction.property.actionGroup">ActionGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#action_group MonitorScheduledQueryRulesAlert#action_group}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction.property.customWebhookPayload">CustomWebhookPayload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#custom_webhook_payload MonitorScheduledQueryRulesAlert#custom_webhook_payload}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction.property.emailSubject">EmailSubject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#email_subject MonitorScheduledQueryRulesAlert#email_subject}. |

---

##### `ActionGroup`<sup>Required</sup> <a name="ActionGroup" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction.property.actionGroup"></a>

```csharp
public string[] ActionGroup { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#action_group MonitorScheduledQueryRulesAlert#action_group}.

---

##### `CustomWebhookPayload`<sup>Optional</sup> <a name="CustomWebhookPayload" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction.property.customWebhookPayload"></a>

```csharp
public string CustomWebhookPayload { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#custom_webhook_payload MonitorScheduledQueryRulesAlert#custom_webhook_payload}.

---

##### `EmailSubject`<sup>Optional</sup> <a name="EmailSubject" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction.property.emailSubject"></a>

```csharp
public string EmailSubject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#email_subject MonitorScheduledQueryRulesAlert#email_subject}.

---

### MonitorScheduledQueryRulesAlertConfig <a name="MonitorScheduledQueryRulesAlertConfig" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    MonitorScheduledQueryRulesAlertAction Action,
    string DataSourceId,
    double Frequency,
    string Location,
    string Name,
    string Query,
    string ResourceGroupName,
    double TimeWindow,
    MonitorScheduledQueryRulesAlertTrigger Trigger,
    string[] AuthorizedResourceIds = null,
    bool|IResolvable AutoMitigationEnabled = null,
    string Description = null,
    bool|IResolvable Enabled = null,
    string Id = null,
    string QueryType = null,
    double Severity = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    double Throttling = null,
    MonitorScheduledQueryRulesAlertTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#data_source_id MonitorScheduledQueryRulesAlert#data_source_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.frequency">Frequency</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#frequency MonitorScheduledQueryRulesAlert#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#location MonitorScheduledQueryRulesAlert#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#name MonitorScheduledQueryRulesAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#query MonitorScheduledQueryRulesAlert#query}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#resource_group_name MonitorScheduledQueryRulesAlert#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.timeWindow">TimeWindow</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#time_window MonitorScheduledQueryRulesAlert#time_window}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a></code> | trigger block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.authorizedResourceIds">AuthorizedResourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#authorized_resource_ids MonitorScheduledQueryRulesAlert#authorized_resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.autoMitigationEnabled">AutoMitigationEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#auto_mitigation_enabled MonitorScheduledQueryRulesAlert#auto_mitigation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#description MonitorScheduledQueryRulesAlert#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#enabled MonitorScheduledQueryRulesAlert#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#id MonitorScheduledQueryRulesAlert#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.queryType">QueryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#query_type MonitorScheduledQueryRulesAlert#query_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.severity">Severity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#severity MonitorScheduledQueryRulesAlert#severity}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#tags MonitorScheduledQueryRulesAlert#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.throttling">Throttling</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#throttling MonitorScheduledQueryRulesAlert#throttling}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.action"></a>

```csharp
public MonitorScheduledQueryRulesAlertAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#action MonitorScheduledQueryRulesAlert#action}

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#data_source_id MonitorScheduledQueryRulesAlert#data_source_id}.

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.frequency"></a>

```csharp
public double Frequency { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#frequency MonitorScheduledQueryRulesAlert#frequency}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#location MonitorScheduledQueryRulesAlert#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#name MonitorScheduledQueryRulesAlert#name}.

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#query MonitorScheduledQueryRulesAlert#query}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#resource_group_name MonitorScheduledQueryRulesAlert#resource_group_name}.

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.timeWindow"></a>

```csharp
public double TimeWindow { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#time_window MonitorScheduledQueryRulesAlert#time_window}.

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.trigger"></a>

```csharp
public MonitorScheduledQueryRulesAlertTrigger Trigger { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#trigger MonitorScheduledQueryRulesAlert#trigger}

---

##### `AuthorizedResourceIds`<sup>Optional</sup> <a name="AuthorizedResourceIds" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.authorizedResourceIds"></a>

```csharp
public string[] AuthorizedResourceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#authorized_resource_ids MonitorScheduledQueryRulesAlert#authorized_resource_ids}.

---

##### `AutoMitigationEnabled`<sup>Optional</sup> <a name="AutoMitigationEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.autoMitigationEnabled"></a>

```csharp
public bool|IResolvable AutoMitigationEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#auto_mitigation_enabled MonitorScheduledQueryRulesAlert#auto_mitigation_enabled}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#description MonitorScheduledQueryRulesAlert#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#enabled MonitorScheduledQueryRulesAlert#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#id MonitorScheduledQueryRulesAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `QueryType`<sup>Optional</sup> <a name="QueryType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.queryType"></a>

```csharp
public string QueryType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#query_type MonitorScheduledQueryRulesAlert#query_type}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.severity"></a>

```csharp
public double Severity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#severity MonitorScheduledQueryRulesAlert#severity}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#tags MonitorScheduledQueryRulesAlert#tags}.

---

##### `Throttling`<sup>Optional</sup> <a name="Throttling" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.throttling"></a>

```csharp
public double Throttling { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#throttling MonitorScheduledQueryRulesAlert#throttling}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertConfig.property.timeouts"></a>

```csharp
public MonitorScheduledQueryRulesAlertTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#timeouts MonitorScheduledQueryRulesAlert#timeouts}

---

### MonitorScheduledQueryRulesAlertTimeouts <a name="MonitorScheduledQueryRulesAlertTimeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#create MonitorScheduledQueryRulesAlert#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#delete MonitorScheduledQueryRulesAlert#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#read MonitorScheduledQueryRulesAlert#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#update MonitorScheduledQueryRulesAlert#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#create MonitorScheduledQueryRulesAlert#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#delete MonitorScheduledQueryRulesAlert#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#read MonitorScheduledQueryRulesAlert#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#update MonitorScheduledQueryRulesAlert#update}.

---

### MonitorScheduledQueryRulesAlertTrigger <a name="MonitorScheduledQueryRulesAlertTrigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertTrigger {
    string Operator,
    double Threshold,
    MonitorScheduledQueryRulesAlertTriggerMetricTrigger MetricTrigger = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#operator MonitorScheduledQueryRulesAlert#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#threshold MonitorScheduledQueryRulesAlert#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger.property.metricTrigger">MetricTrigger</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger">MonitorScheduledQueryRulesAlertTriggerMetricTrigger</a></code> | metric_trigger block. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#operator MonitorScheduledQueryRulesAlert#operator}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#threshold MonitorScheduledQueryRulesAlert#threshold}.

---

##### `MetricTrigger`<sup>Optional</sup> <a name="MetricTrigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger.property.metricTrigger"></a>

```csharp
public MonitorScheduledQueryRulesAlertTriggerMetricTrigger MetricTrigger { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger">MonitorScheduledQueryRulesAlertTriggerMetricTrigger</a>

metric_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#metric_trigger MonitorScheduledQueryRulesAlert#metric_trigger}

---

### MonitorScheduledQueryRulesAlertTriggerMetricTrigger <a name="MonitorScheduledQueryRulesAlertTriggerMetricTrigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertTriggerMetricTrigger {
    string MetricTriggerType,
    string Operator,
    double Threshold,
    string MetricColumn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.metricTriggerType">MetricTriggerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#metric_trigger_type MonitorScheduledQueryRulesAlert#metric_trigger_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#operator MonitorScheduledQueryRulesAlert#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#threshold MonitorScheduledQueryRulesAlert#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.metricColumn">MetricColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#metric_column MonitorScheduledQueryRulesAlert#metric_column}. |

---

##### `MetricTriggerType`<sup>Required</sup> <a name="MetricTriggerType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.metricTriggerType"></a>

```csharp
public string MetricTriggerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#metric_trigger_type MonitorScheduledQueryRulesAlert#metric_trigger_type}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#operator MonitorScheduledQueryRulesAlert#operator}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#threshold MonitorScheduledQueryRulesAlert#threshold}.

---

##### `MetricColumn`<sup>Optional</sup> <a name="MetricColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger.property.metricColumn"></a>

```csharp
public string MetricColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_scheduled_query_rules_alert#metric_column MonitorScheduledQueryRulesAlert#metric_column}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorScheduledQueryRulesAlertActionOutputReference <a name="MonitorScheduledQueryRulesAlertActionOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.resetCustomWebhookPayload">ResetCustomWebhookPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.resetEmailSubject">ResetEmailSubject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomWebhookPayload` <a name="ResetCustomWebhookPayload" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.resetCustomWebhookPayload"></a>

```csharp
private void ResetCustomWebhookPayload()
```

##### `ResetEmailSubject` <a name="ResetEmailSubject" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.resetEmailSubject"></a>

```csharp
private void ResetEmailSubject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.actionGroupInput">ActionGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.customWebhookPayloadInput">CustomWebhookPayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.emailSubjectInput">EmailSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.actionGroup">ActionGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.customWebhookPayload">CustomWebhookPayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.emailSubject">EmailSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionGroupInput`<sup>Optional</sup> <a name="ActionGroupInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.actionGroupInput"></a>

```csharp
public string[] ActionGroupInput { get; }
```

- *Type:* string[]

---

##### `CustomWebhookPayloadInput`<sup>Optional</sup> <a name="CustomWebhookPayloadInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.customWebhookPayloadInput"></a>

```csharp
public string CustomWebhookPayloadInput { get; }
```

- *Type:* string

---

##### `EmailSubjectInput`<sup>Optional</sup> <a name="EmailSubjectInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.emailSubjectInput"></a>

```csharp
public string EmailSubjectInput { get; }
```

- *Type:* string

---

##### `ActionGroup`<sup>Required</sup> <a name="ActionGroup" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.actionGroup"></a>

```csharp
public string[] ActionGroup { get; }
```

- *Type:* string[]

---

##### `CustomWebhookPayload`<sup>Required</sup> <a name="CustomWebhookPayload" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.customWebhookPayload"></a>

```csharp
public string CustomWebhookPayload { get; }
```

- *Type:* string

---

##### `EmailSubject`<sup>Required</sup> <a name="EmailSubject" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.emailSubject"></a>

```csharp
public string EmailSubject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertActionOutputReference.property.internalValue"></a>

```csharp
public MonitorScheduledQueryRulesAlertAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertAction">MonitorScheduledQueryRulesAlertAction</a>

---


### MonitorScheduledQueryRulesAlertTimeoutsOutputReference <a name="MonitorScheduledQueryRulesAlertTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MonitorScheduledQueryRulesAlertTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTimeouts">MonitorScheduledQueryRulesAlertTimeouts</a>

---


### MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference <a name="MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resetMetricColumn">ResetMetricColumn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricColumn` <a name="ResetMetricColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resetMetricColumn"></a>

```csharp
private void ResetMetricColumn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricColumnInput">MetricColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricTriggerTypeInput">MetricTriggerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricColumn">MetricColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricTriggerType">MetricTriggerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger">MonitorScheduledQueryRulesAlertTriggerMetricTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricColumnInput`<sup>Optional</sup> <a name="MetricColumnInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricColumnInput"></a>

```csharp
public string MetricColumnInput { get; }
```

- *Type:* string

---

##### `MetricTriggerTypeInput`<sup>Optional</sup> <a name="MetricTriggerTypeInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricTriggerTypeInput"></a>

```csharp
public string MetricTriggerTypeInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `MetricColumn`<sup>Required</sup> <a name="MetricColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricColumn"></a>

```csharp
public string MetricColumn { get; }
```

- *Type:* string

---

##### `MetricTriggerType`<sup>Required</sup> <a name="MetricTriggerType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricTriggerType"></a>

```csharp
public string MetricTriggerType { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.internalValue"></a>

```csharp
public MonitorScheduledQueryRulesAlertTriggerMetricTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger">MonitorScheduledQueryRulesAlertTriggerMetricTrigger</a>

---


### MonitorScheduledQueryRulesAlertTriggerOutputReference <a name="MonitorScheduledQueryRulesAlertTriggerOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorScheduledQueryRulesAlertTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.putMetricTrigger">PutMetricTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.resetMetricTrigger">ResetMetricTrigger</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricTrigger` <a name="PutMetricTrigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.putMetricTrigger"></a>

```csharp
private void PutMetricTrigger(MonitorScheduledQueryRulesAlertTriggerMetricTrigger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.putMetricTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger">MonitorScheduledQueryRulesAlertTriggerMetricTrigger</a>

---

##### `ResetMetricTrigger` <a name="ResetMetricTrigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.resetMetricTrigger"></a>

```csharp
private void ResetMetricTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.metricTrigger">MetricTrigger</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference">MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.metricTriggerInput">MetricTriggerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger">MonitorScheduledQueryRulesAlertTriggerMetricTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricTrigger`<sup>Required</sup> <a name="MetricTrigger" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.metricTrigger"></a>

```csharp
public MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference MetricTrigger { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference">MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference</a>

---

##### `MetricTriggerInput`<sup>Optional</sup> <a name="MetricTriggerInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.metricTriggerInput"></a>

```csharp
public MonitorScheduledQueryRulesAlertTriggerMetricTrigger MetricTriggerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerMetricTrigger">MonitorScheduledQueryRulesAlertTriggerMetricTrigger</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTriggerOutputReference.property.internalValue"></a>

```csharp
public MonitorScheduledQueryRulesAlertTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlert.MonitorScheduledQueryRulesAlertTrigger">MonitorScheduledQueryRulesAlertTrigger</a>

---



