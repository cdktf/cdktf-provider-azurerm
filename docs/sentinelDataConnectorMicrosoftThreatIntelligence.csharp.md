# `sentinelDataConnectorMicrosoftThreatIntelligence` Submodule <a name="`sentinelDataConnectorMicrosoftThreatIntelligence` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorMicrosoftThreatIntelligence <a name="SentinelDataConnectorMicrosoftThreatIntelligence" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence azurerm_sentinel_data_connector_microsoft_threat_intelligence}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftThreatIntelligence(Construct Scope, string Id, SentinelDataConnectorMicrosoftThreatIntelligenceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig">SentinelDataConnectorMicrosoftThreatIntelligenceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig">SentinelDataConnectorMicrosoftThreatIntelligenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetBingSafetyPhishingUrlLookbackDate">ResetBingSafetyPhishingUrlLookbackDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetMicrosoftEmergingThreatFeedLookbackDate">ResetMicrosoftEmergingThreatFeedLookbackDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.putTimeouts"></a>

```csharp
private void PutTimeouts(SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a>

---

##### `ResetBingSafetyPhishingUrlLookbackDate` <a name="ResetBingSafetyPhishingUrlLookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetBingSafetyPhishingUrlLookbackDate"></a>

```csharp
private void ResetBingSafetyPhishingUrlLookbackDate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMicrosoftEmergingThreatFeedLookbackDate` <a name="ResetMicrosoftEmergingThreatFeedLookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetMicrosoftEmergingThreatFeedLookbackDate"></a>

```csharp
private void ResetMicrosoftEmergingThreatFeedLookbackDate()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelDataConnectorMicrosoftThreatIntelligence resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftThreatIntelligence.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftThreatIntelligence.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftThreatIntelligence.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftThreatIntelligence.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SentinelDataConnectorMicrosoftThreatIntelligence resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelDataConnectorMicrosoftThreatIntelligence to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelDataConnectorMicrosoftThreatIntelligence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorMicrosoftThreatIntelligence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference">SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.bingSafetyPhishingUrlLookbackDateInput">BingSafetyPhishingUrlLookbackDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDateInput">MicrosoftEmergingThreatFeedLookbackDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.bingSafetyPhishingUrlLookbackDate">BingSafetyPhishingUrlLookbackDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDate">MicrosoftEmergingThreatFeedLookbackDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeouts"></a>

```csharp
public SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference">SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference</a>

---

##### `BingSafetyPhishingUrlLookbackDateInput`<sup>Optional</sup> <a name="BingSafetyPhishingUrlLookbackDateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.bingSafetyPhishingUrlLookbackDateInput"></a>

```csharp
public string BingSafetyPhishingUrlLookbackDateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `MicrosoftEmergingThreatFeedLookbackDateInput`<sup>Optional</sup> <a name="MicrosoftEmergingThreatFeedLookbackDateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDateInput"></a>

```csharp
public string MicrosoftEmergingThreatFeedLookbackDateInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BingSafetyPhishingUrlLookbackDate`<sup>Required</sup> <a name="BingSafetyPhishingUrlLookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.bingSafetyPhishingUrlLookbackDate"></a>

```csharp
public string BingSafetyPhishingUrlLookbackDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `MicrosoftEmergingThreatFeedLookbackDate`<sup>Required</sup> <a name="MicrosoftEmergingThreatFeedLookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDate"></a>

```csharp
public string MicrosoftEmergingThreatFeedLookbackDate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorMicrosoftThreatIntelligenceConfig <a name="SentinelDataConnectorMicrosoftThreatIntelligenceConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftThreatIntelligenceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LogAnalyticsWorkspaceId,
    string Name,
    string BingSafetyPhishingUrlLookbackDate = null,
    string Id = null,
    string MicrosoftEmergingThreatFeedLookbackDate = null,
    string TenantId = null,
    SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatIntelligence#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#name SentinelDataConnectorMicrosoftThreatIntelligence#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.bingSafetyPhishingUrlLookbackDate">BingSafetyPhishingUrlLookbackDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#bing_safety_phishing_url_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#bing_safety_phishing_url_lookback_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#id SentinelDataConnectorMicrosoftThreatIntelligence#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.microsoftEmergingThreatFeedLookbackDate">MicrosoftEmergingThreatFeedLookbackDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#microsoft_emerging_threat_feed_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#microsoft_emerging_threat_feed_lookback_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#tenant_id SentinelDataConnectorMicrosoftThreatIntelligence#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatIntelligence#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#name SentinelDataConnectorMicrosoftThreatIntelligence#name}.

---

##### `BingSafetyPhishingUrlLookbackDate`<sup>Optional</sup> <a name="BingSafetyPhishingUrlLookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.bingSafetyPhishingUrlLookbackDate"></a>

```csharp
public string BingSafetyPhishingUrlLookbackDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#bing_safety_phishing_url_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#bing_safety_phishing_url_lookback_date}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#id SentinelDataConnectorMicrosoftThreatIntelligence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MicrosoftEmergingThreatFeedLookbackDate`<sup>Optional</sup> <a name="MicrosoftEmergingThreatFeedLookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.microsoftEmergingThreatFeedLookbackDate"></a>

```csharp
public string MicrosoftEmergingThreatFeedLookbackDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#microsoft_emerging_threat_feed_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#microsoft_emerging_threat_feed_lookback_date}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#tenant_id SentinelDataConnectorMicrosoftThreatIntelligence#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.timeouts"></a>

```csharp
public SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#timeouts SentinelDataConnectorMicrosoftThreatIntelligence#timeouts}

---

### SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts <a name="SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#create SentinelDataConnectorMicrosoftThreatIntelligence#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#delete SentinelDataConnectorMicrosoftThreatIntelligence#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#read SentinelDataConnectorMicrosoftThreatIntelligence#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#create SentinelDataConnectorMicrosoftThreatIntelligence#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#delete SentinelDataConnectorMicrosoftThreatIntelligence#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#read SentinelDataConnectorMicrosoftThreatIntelligence#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference <a name="SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



