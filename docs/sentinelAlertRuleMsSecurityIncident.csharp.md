# `sentinelAlertRuleMsSecurityIncident` Submodule <a name="`sentinelAlertRuleMsSecurityIncident` Submodule" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleMsSecurityIncident <a name="SentinelAlertRuleMsSecurityIncident" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident azurerm_sentinel_alert_rule_ms_security_incident}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelAlertRuleMsSecurityIncident(Construct Scope, string Id, SentinelAlertRuleMsSecurityIncidentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig">SentinelAlertRuleMsSecurityIncidentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig">SentinelAlertRuleMsSecurityIncidentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetAlertRuleTemplateGuid">ResetAlertRuleTemplateGuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetDisplayNameExcludeFilter">ResetDisplayNameExcludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetDisplayNameFilter">ResetDisplayNameFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.putTimeouts"></a>

```csharp
private void PutTimeouts(SentinelAlertRuleMsSecurityIncidentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts">SentinelAlertRuleMsSecurityIncidentTimeouts</a>

---

##### `ResetAlertRuleTemplateGuid` <a name="ResetAlertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetAlertRuleTemplateGuid"></a>

```csharp
private void ResetAlertRuleTemplateGuid()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayNameExcludeFilter` <a name="ResetDisplayNameExcludeFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetDisplayNameExcludeFilter"></a>

```csharp
private void ResetDisplayNameExcludeFilter()
```

##### `ResetDisplayNameFilter` <a name="ResetDisplayNameFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetDisplayNameFilter"></a>

```csharp
private void ResetDisplayNameFilter()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelAlertRuleMsSecurityIncident resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelAlertRuleMsSecurityIncident.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelAlertRuleMsSecurityIncident.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelAlertRuleMsSecurityIncident.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelAlertRuleMsSecurityIncident.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SentinelAlertRuleMsSecurityIncident resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelAlertRuleMsSecurityIncident to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelAlertRuleMsSecurityIncident that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SentinelAlertRuleMsSecurityIncident to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference">SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.alertRuleTemplateGuidInput">AlertRuleTemplateGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameExcludeFilterInput">DisplayNameExcludeFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameFilterInput">DisplayNameFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.productFilterInput">ProductFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.severityFilterInput">SeverityFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.alertRuleTemplateGuid">AlertRuleTemplateGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameExcludeFilter">DisplayNameExcludeFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameFilter">DisplayNameFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.productFilter">ProductFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.severityFilter">SeverityFilter</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.timeouts"></a>

```csharp
public SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference">SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference</a>

---

##### `AlertRuleTemplateGuidInput`<sup>Optional</sup> <a name="AlertRuleTemplateGuidInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.alertRuleTemplateGuidInput"></a>

```csharp
public string AlertRuleTemplateGuidInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameExcludeFilterInput`<sup>Optional</sup> <a name="DisplayNameExcludeFilterInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameExcludeFilterInput"></a>

```csharp
public string[] DisplayNameExcludeFilterInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameFilterInput`<sup>Optional</sup> <a name="DisplayNameFilterInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameFilterInput"></a>

```csharp
public string[] DisplayNameFilterInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProductFilterInput`<sup>Optional</sup> <a name="ProductFilterInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.productFilterInput"></a>

```csharp
public string ProductFilterInput { get; }
```

- *Type:* string

---

##### `SeverityFilterInput`<sup>Optional</sup> <a name="SeverityFilterInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.severityFilterInput"></a>

```csharp
public string[] SeverityFilterInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AlertRuleTemplateGuid`<sup>Required</sup> <a name="AlertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.alertRuleTemplateGuid"></a>

```csharp
public string AlertRuleTemplateGuid { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DisplayNameExcludeFilter`<sup>Required</sup> <a name="DisplayNameExcludeFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameExcludeFilter"></a>

```csharp
public string[] DisplayNameExcludeFilter { get; }
```

- *Type:* string[]

---

##### `DisplayNameFilter`<sup>Required</sup> <a name="DisplayNameFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.displayNameFilter"></a>

```csharp
public string[] DisplayNameFilter { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProductFilter`<sup>Required</sup> <a name="ProductFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.productFilter"></a>

```csharp
public string ProductFilter { get; }
```

- *Type:* string

---

##### `SeverityFilter`<sup>Required</sup> <a name="SeverityFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.severityFilter"></a>

```csharp
public string[] SeverityFilter { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncident.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleMsSecurityIncidentConfig <a name="SentinelAlertRuleMsSecurityIncidentConfig" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelAlertRuleMsSecurityIncidentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string LogAnalyticsWorkspaceId,
    string Name,
    string ProductFilter,
    string[] SeverityFilter,
    string AlertRuleTemplateGuid = null,
    string Description = null,
    string[] DisplayNameExcludeFilter = null,
    string[] DisplayNameFilter = null,
    object Enabled = null,
    string Id = null,
    SentinelAlertRuleMsSecurityIncidentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name SentinelAlertRuleMsSecurityIncident#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#log_analytics_workspace_id SentinelAlertRuleMsSecurityIncident#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#name SentinelAlertRuleMsSecurityIncident#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.productFilter">ProductFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#product_filter SentinelAlertRuleMsSecurityIncident#product_filter}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.severityFilter">SeverityFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#severity_filter SentinelAlertRuleMsSecurityIncident#severity_filter}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.alertRuleTemplateGuid">AlertRuleTemplateGuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#alert_rule_template_guid SentinelAlertRuleMsSecurityIncident#alert_rule_template_guid}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#description SentinelAlertRuleMsSecurityIncident#description}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.displayNameExcludeFilter">DisplayNameExcludeFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name_exclude_filter SentinelAlertRuleMsSecurityIncident#display_name_exclude_filter}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.displayNameFilter">DisplayNameFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name_filter SentinelAlertRuleMsSecurityIncident#display_name_filter}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#enabled SentinelAlertRuleMsSecurityIncident#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#id SentinelAlertRuleMsSecurityIncident#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts">SentinelAlertRuleMsSecurityIncidentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name SentinelAlertRuleMsSecurityIncident#display_name}.

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#log_analytics_workspace_id SentinelAlertRuleMsSecurityIncident#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#name SentinelAlertRuleMsSecurityIncident#name}.

---

##### `ProductFilter`<sup>Required</sup> <a name="ProductFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.productFilter"></a>

```csharp
public string ProductFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#product_filter SentinelAlertRuleMsSecurityIncident#product_filter}.

---

##### `SeverityFilter`<sup>Required</sup> <a name="SeverityFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.severityFilter"></a>

```csharp
public string[] SeverityFilter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#severity_filter SentinelAlertRuleMsSecurityIncident#severity_filter}.

---

##### `AlertRuleTemplateGuid`<sup>Optional</sup> <a name="AlertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.alertRuleTemplateGuid"></a>

```csharp
public string AlertRuleTemplateGuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#alert_rule_template_guid SentinelAlertRuleMsSecurityIncident#alert_rule_template_guid}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#description SentinelAlertRuleMsSecurityIncident#description}.

---

##### `DisplayNameExcludeFilter`<sup>Optional</sup> <a name="DisplayNameExcludeFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.displayNameExcludeFilter"></a>

```csharp
public string[] DisplayNameExcludeFilter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name_exclude_filter SentinelAlertRuleMsSecurityIncident#display_name_exclude_filter}.

---

##### `DisplayNameFilter`<sup>Optional</sup> <a name="DisplayNameFilter" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.displayNameFilter"></a>

```csharp
public string[] DisplayNameFilter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#display_name_filter SentinelAlertRuleMsSecurityIncident#display_name_filter}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#enabled SentinelAlertRuleMsSecurityIncident#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#id SentinelAlertRuleMsSecurityIncident#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentConfig.property.timeouts"></a>

```csharp
public SentinelAlertRuleMsSecurityIncidentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts">SentinelAlertRuleMsSecurityIncidentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#timeouts SentinelAlertRuleMsSecurityIncident#timeouts}

---

### SentinelAlertRuleMsSecurityIncidentTimeouts <a name="SentinelAlertRuleMsSecurityIncidentTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelAlertRuleMsSecurityIncidentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#create SentinelAlertRuleMsSecurityIncident#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#delete SentinelAlertRuleMsSecurityIncident#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#read SentinelAlertRuleMsSecurityIncident#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#update SentinelAlertRuleMsSecurityIncident#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#create SentinelAlertRuleMsSecurityIncident#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#delete SentinelAlertRuleMsSecurityIncident#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#read SentinelAlertRuleMsSecurityIncident#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_alert_rule_ms_security_incident#update SentinelAlertRuleMsSecurityIncident#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference <a name="SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleMsSecurityIncident.SentinelAlertRuleMsSecurityIncidentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



