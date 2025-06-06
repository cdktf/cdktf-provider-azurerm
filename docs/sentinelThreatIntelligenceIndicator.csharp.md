# `sentinelThreatIntelligenceIndicator` Submodule <a name="`sentinelThreatIntelligenceIndicator` Submodule" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelThreatIntelligenceIndicator <a name="SentinelThreatIntelligenceIndicator" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator azurerm_sentinel_threat_intelligence_indicator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicator(Construct Scope, string Id, SentinelThreatIntelligenceIndicatorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig">SentinelThreatIntelligenceIndicatorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig">SentinelThreatIntelligenceIndicatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putExternalReference">PutExternalReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putGranularMarking">PutGranularMarking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putKillChainPhase">PutKillChainPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetConfidence">ResetConfidence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetExtension">ResetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetExternalReference">ResetExternalReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetGranularMarking">ResetGranularMarking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetKillChainPhase">ResetKillChainPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetLanguage">ResetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetObjectMarkingRefs">ResetObjectMarkingRefs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetPatternVersion">ResetPatternVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetRevoked">ResetRevoked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetThreatTypes">ResetThreatTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetValidateUntilUtc">ResetValidateUntilUtc</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalReference` <a name="PutExternalReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putExternalReference"></a>

```csharp
private void PutExternalReference(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putExternalReference.parameter.value"></a>

- *Type:* object

---

##### `PutGranularMarking` <a name="PutGranularMarking" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putGranularMarking"></a>

```csharp
private void PutGranularMarking(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putGranularMarking.parameter.value"></a>

- *Type:* object

---

##### `PutKillChainPhase` <a name="PutKillChainPhase" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putKillChainPhase"></a>

```csharp
private void PutKillChainPhase(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putKillChainPhase.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putTimeouts"></a>

```csharp
private void PutTimeouts(SentinelThreatIntelligenceIndicatorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts">SentinelThreatIntelligenceIndicatorTimeouts</a>

---

##### `ResetConfidence` <a name="ResetConfidence" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetConfidence"></a>

```csharp
private void ResetConfidence()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetExtension"></a>

```csharp
private void ResetExtension()
```

##### `ResetExternalReference` <a name="ResetExternalReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetExternalReference"></a>

```csharp
private void ResetExternalReference()
```

##### `ResetGranularMarking` <a name="ResetGranularMarking" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetGranularMarking"></a>

```csharp
private void ResetGranularMarking()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKillChainPhase` <a name="ResetKillChainPhase" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetKillChainPhase"></a>

```csharp
private void ResetKillChainPhase()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetLanguage"></a>

```csharp
private void ResetLanguage()
```

##### `ResetObjectMarkingRefs` <a name="ResetObjectMarkingRefs" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetObjectMarkingRefs"></a>

```csharp
private void ResetObjectMarkingRefs()
```

##### `ResetPatternVersion` <a name="ResetPatternVersion" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetPatternVersion"></a>

```csharp
private void ResetPatternVersion()
```

##### `ResetRevoked` <a name="ResetRevoked" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetRevoked"></a>

```csharp
private void ResetRevoked()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThreatTypes` <a name="ResetThreatTypes" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetThreatTypes"></a>

```csharp
private void ResetThreatTypes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValidateUntilUtc` <a name="ResetValidateUntilUtc" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetValidateUntilUtc"></a>

```csharp
private void ResetValidateUntilUtc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelThreatIntelligenceIndicator resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelThreatIntelligenceIndicator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelThreatIntelligenceIndicator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelThreatIntelligenceIndicator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelThreatIntelligenceIndicator.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SentinelThreatIntelligenceIndicator resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelThreatIntelligenceIndicator to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelThreatIntelligenceIndicator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SentinelThreatIntelligenceIndicator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.defanged">Defanged</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalLastUpdatedTimeUtc">ExternalLastUpdatedTimeUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalReference">ExternalReference</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList">SentinelThreatIntelligenceIndicatorExternalReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.granularMarking">GranularMarking</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList">SentinelThreatIntelligenceIndicatorGranularMarkingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.guid">Guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.indicatorType">IndicatorType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.killChainPhase">KillChainPhase</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList">SentinelThreatIntelligenceIndicatorKillChainPhaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.lastUpdatedTimeUtc">LastUpdatedTimeUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.parsedPattern">ParsedPattern</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList">SentinelThreatIntelligenceIndicatorParsedPatternList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference">SentinelThreatIntelligenceIndicatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.confidenceInput">ConfidenceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdByInput">CreatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.extensionInput">ExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalReferenceInput">ExternalReferenceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.granularMarkingInput">GranularMarkingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.killChainPhaseInput">KillChainPhaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.objectMarkingRefsInput">ObjectMarkingRefsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternTypeInput">PatternTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternVersionInput">PatternVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.revokedInput">RevokedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.threatTypesInput">ThreatTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateFromUtcInput">ValidateFromUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateUntilUtcInput">ValidateUntilUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.confidence">Confidence</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.extension">Extension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.objectMarkingRefs">ObjectMarkingRefs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternType">PatternType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternVersion">PatternVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.revoked">Revoked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.threatTypes">ThreatTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateFromUtc">ValidateFromUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateUntilUtc">ValidateUntilUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Defanged`<sup>Required</sup> <a name="Defanged" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.defanged"></a>

```csharp
public IResolvable Defanged { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `ExternalLastUpdatedTimeUtc`<sup>Required</sup> <a name="ExternalLastUpdatedTimeUtc" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalLastUpdatedTimeUtc"></a>

```csharp
public string ExternalLastUpdatedTimeUtc { get; }
```

- *Type:* string

---

##### `ExternalReference`<sup>Required</sup> <a name="ExternalReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalReference"></a>

```csharp
public SentinelThreatIntelligenceIndicatorExternalReferenceList ExternalReference { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList">SentinelThreatIntelligenceIndicatorExternalReferenceList</a>

---

##### `GranularMarking`<sup>Required</sup> <a name="GranularMarking" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.granularMarking"></a>

```csharp
public SentinelThreatIntelligenceIndicatorGranularMarkingList GranularMarking { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList">SentinelThreatIntelligenceIndicatorGranularMarkingList</a>

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.guid"></a>

```csharp
public string Guid { get; }
```

- *Type:* string

---

##### `IndicatorType`<sup>Required</sup> <a name="IndicatorType" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.indicatorType"></a>

```csharp
public string[] IndicatorType { get; }
```

- *Type:* string[]

---

##### `KillChainPhase`<sup>Required</sup> <a name="KillChainPhase" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.killChainPhase"></a>

```csharp
public SentinelThreatIntelligenceIndicatorKillChainPhaseList KillChainPhase { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList">SentinelThreatIntelligenceIndicatorKillChainPhaseList</a>

---

##### `LastUpdatedTimeUtc`<sup>Required</sup> <a name="LastUpdatedTimeUtc" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.lastUpdatedTimeUtc"></a>

```csharp
public string LastUpdatedTimeUtc { get; }
```

- *Type:* string

---

##### `ParsedPattern`<sup>Required</sup> <a name="ParsedPattern" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.parsedPattern"></a>

```csharp
public SentinelThreatIntelligenceIndicatorParsedPatternList ParsedPattern { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList">SentinelThreatIntelligenceIndicatorParsedPatternList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.timeouts"></a>

```csharp
public SentinelThreatIntelligenceIndicatorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference">SentinelThreatIntelligenceIndicatorTimeoutsOutputReference</a>

---

##### `ConfidenceInput`<sup>Optional</sup> <a name="ConfidenceInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.confidenceInput"></a>

```csharp
public double ConfidenceInput { get; }
```

- *Type:* double

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdByInput"></a>

```csharp
public string CreatedByInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.extensionInput"></a>

```csharp
public string ExtensionInput { get; }
```

- *Type:* string

---

##### `ExternalReferenceInput`<sup>Optional</sup> <a name="ExternalReferenceInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalReferenceInput"></a>

```csharp
public object ExternalReferenceInput { get; }
```

- *Type:* object

---

##### `GranularMarkingInput`<sup>Optional</sup> <a name="GranularMarkingInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.granularMarkingInput"></a>

```csharp
public object GranularMarkingInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KillChainPhaseInput`<sup>Optional</sup> <a name="KillChainPhaseInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.killChainPhaseInput"></a>

```csharp
public object KillChainPhaseInput { get; }
```

- *Type:* object

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `ObjectMarkingRefsInput`<sup>Optional</sup> <a name="ObjectMarkingRefsInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.objectMarkingRefsInput"></a>

```csharp
public string[] ObjectMarkingRefsInput { get; }
```

- *Type:* string[]

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `PatternTypeInput`<sup>Optional</sup> <a name="PatternTypeInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternTypeInput"></a>

```csharp
public string PatternTypeInput { get; }
```

- *Type:* string

---

##### `PatternVersionInput`<sup>Optional</sup> <a name="PatternVersionInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternVersionInput"></a>

```csharp
public string PatternVersionInput { get; }
```

- *Type:* string

---

##### `RevokedInput`<sup>Optional</sup> <a name="RevokedInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.revokedInput"></a>

```csharp
public object RevokedInput { get; }
```

- *Type:* object

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `ThreatTypesInput`<sup>Optional</sup> <a name="ThreatTypesInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.threatTypesInput"></a>

```csharp
public string[] ThreatTypesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValidateFromUtcInput`<sup>Optional</sup> <a name="ValidateFromUtcInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateFromUtcInput"></a>

```csharp
public string ValidateFromUtcInput { get; }
```

- *Type:* string

---

##### `ValidateUntilUtcInput`<sup>Optional</sup> <a name="ValidateUntilUtcInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateUntilUtcInput"></a>

```csharp
public string ValidateUntilUtcInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Confidence`<sup>Required</sup> <a name="Confidence" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.confidence"></a>

```csharp
public double Confidence { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.extension"></a>

```csharp
public string Extension { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `ObjectMarkingRefs`<sup>Required</sup> <a name="ObjectMarkingRefs" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.objectMarkingRefs"></a>

```csharp
public string[] ObjectMarkingRefs { get; }
```

- *Type:* string[]

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternType"></a>

```csharp
public string PatternType { get; }
```

- *Type:* string

---

##### `PatternVersion`<sup>Required</sup> <a name="PatternVersion" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternVersion"></a>

```csharp
public string PatternVersion { get; }
```

- *Type:* string

---

##### `Revoked`<sup>Required</sup> <a name="Revoked" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.revoked"></a>

```csharp
public object Revoked { get; }
```

- *Type:* object

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `ThreatTypes`<sup>Required</sup> <a name="ThreatTypes" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.threatTypes"></a>

```csharp
public string[] ThreatTypes { get; }
```

- *Type:* string[]

---

##### `ValidateFromUtc`<sup>Required</sup> <a name="ValidateFromUtc" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateFromUtc"></a>

```csharp
public string ValidateFromUtc { get; }
```

- *Type:* string

---

##### `ValidateUntilUtc`<sup>Required</sup> <a name="ValidateUntilUtc" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateUntilUtc"></a>

```csharp
public string ValidateUntilUtc { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelThreatIntelligenceIndicatorConfig <a name="SentinelThreatIntelligenceIndicatorConfig" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Pattern,
    string PatternType,
    string Source,
    string ValidateFromUtc,
    string WorkspaceId,
    double Confidence = null,
    string CreatedBy = null,
    string Description = null,
    string Extension = null,
    object ExternalReference = null,
    object GranularMarking = null,
    string Id = null,
    object KillChainPhase = null,
    string Language = null,
    string[] ObjectMarkingRefs = null,
    string PatternVersion = null,
    object Revoked = null,
    string[] Tags = null,
    string[] ThreatTypes = null,
    SentinelThreatIntelligenceIndicatorTimeouts Timeouts = null,
    string ValidateUntilUtc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#display_name SentinelThreatIntelligenceIndicator#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.pattern">Pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#pattern SentinelThreatIntelligenceIndicator#pattern}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.patternType">PatternType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#pattern_type SentinelThreatIntelligenceIndicator#pattern_type}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#source SentinelThreatIntelligenceIndicator#source}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.validateFromUtc">ValidateFromUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#validate_from_utc SentinelThreatIntelligenceIndicator#validate_from_utc}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#workspace_id SentinelThreatIntelligenceIndicator#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.confidence">Confidence</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#confidence SentinelThreatIntelligenceIndicator#confidence}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.createdBy">CreatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#created_by SentinelThreatIntelligenceIndicator#created_by}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#description SentinelThreatIntelligenceIndicator#description}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.extension">Extension</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#extension SentinelThreatIntelligenceIndicator#extension}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.externalReference">ExternalReference</a></code> | <code>object</code> | external_reference block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.granularMarking">GranularMarking</a></code> | <code>object</code> | granular_marking block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#id SentinelThreatIntelligenceIndicator#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.killChainPhase">KillChainPhase</a></code> | <code>object</code> | kill_chain_phase block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.language">Language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#language SentinelThreatIntelligenceIndicator#language}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.objectMarkingRefs">ObjectMarkingRefs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#object_marking_refs SentinelThreatIntelligenceIndicator#object_marking_refs}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.patternVersion">PatternVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#pattern_version SentinelThreatIntelligenceIndicator#pattern_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.revoked">Revoked</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#revoked SentinelThreatIntelligenceIndicator#revoked}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#tags SentinelThreatIntelligenceIndicator#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.threatTypes">ThreatTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#threat_types SentinelThreatIntelligenceIndicator#threat_types}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts">SentinelThreatIntelligenceIndicatorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.validateUntilUtc">ValidateUntilUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#validate_until_utc SentinelThreatIntelligenceIndicator#validate_until_utc}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#display_name SentinelThreatIntelligenceIndicator#display_name}.

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#pattern SentinelThreatIntelligenceIndicator#pattern}.

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.patternType"></a>

```csharp
public string PatternType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#pattern_type SentinelThreatIntelligenceIndicator#pattern_type}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#source SentinelThreatIntelligenceIndicator#source}.

---

##### `ValidateFromUtc`<sup>Required</sup> <a name="ValidateFromUtc" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.validateFromUtc"></a>

```csharp
public string ValidateFromUtc { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#validate_from_utc SentinelThreatIntelligenceIndicator#validate_from_utc}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#workspace_id SentinelThreatIntelligenceIndicator#workspace_id}.

---

##### `Confidence`<sup>Optional</sup> <a name="Confidence" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.confidence"></a>

```csharp
public double Confidence { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#confidence SentinelThreatIntelligenceIndicator#confidence}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.createdBy"></a>

```csharp
public string CreatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#created_by SentinelThreatIntelligenceIndicator#created_by}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#description SentinelThreatIntelligenceIndicator#description}.

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.extension"></a>

```csharp
public string Extension { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#extension SentinelThreatIntelligenceIndicator#extension}.

---

##### `ExternalReference`<sup>Optional</sup> <a name="ExternalReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.externalReference"></a>

```csharp
public object ExternalReference { get; set; }
```

- *Type:* object

external_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#external_reference SentinelThreatIntelligenceIndicator#external_reference}

---

##### `GranularMarking`<sup>Optional</sup> <a name="GranularMarking" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.granularMarking"></a>

```csharp
public object GranularMarking { get; set; }
```

- *Type:* object

granular_marking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#granular_marking SentinelThreatIntelligenceIndicator#granular_marking}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#id SentinelThreatIntelligenceIndicator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KillChainPhase`<sup>Optional</sup> <a name="KillChainPhase" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.killChainPhase"></a>

```csharp
public object KillChainPhase { get; set; }
```

- *Type:* object

kill_chain_phase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#kill_chain_phase SentinelThreatIntelligenceIndicator#kill_chain_phase}

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#language SentinelThreatIntelligenceIndicator#language}.

---

##### `ObjectMarkingRefs`<sup>Optional</sup> <a name="ObjectMarkingRefs" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.objectMarkingRefs"></a>

```csharp
public string[] ObjectMarkingRefs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#object_marking_refs SentinelThreatIntelligenceIndicator#object_marking_refs}.

---

##### `PatternVersion`<sup>Optional</sup> <a name="PatternVersion" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.patternVersion"></a>

```csharp
public string PatternVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#pattern_version SentinelThreatIntelligenceIndicator#pattern_version}.

---

##### `Revoked`<sup>Optional</sup> <a name="Revoked" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.revoked"></a>

```csharp
public object Revoked { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#revoked SentinelThreatIntelligenceIndicator#revoked}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#tags SentinelThreatIntelligenceIndicator#tags}.

---

##### `ThreatTypes`<sup>Optional</sup> <a name="ThreatTypes" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.threatTypes"></a>

```csharp
public string[] ThreatTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#threat_types SentinelThreatIntelligenceIndicator#threat_types}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.timeouts"></a>

```csharp
public SentinelThreatIntelligenceIndicatorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts">SentinelThreatIntelligenceIndicatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#timeouts SentinelThreatIntelligenceIndicator#timeouts}

---

##### `ValidateUntilUtc`<sup>Optional</sup> <a name="ValidateUntilUtc" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.validateUntilUtc"></a>

```csharp
public string ValidateUntilUtc { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#validate_until_utc SentinelThreatIntelligenceIndicator#validate_until_utc}.

---

### SentinelThreatIntelligenceIndicatorExternalReference <a name="SentinelThreatIntelligenceIndicatorExternalReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorExternalReference {
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> Hashes = null,
    string SourceName = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#description SentinelThreatIntelligenceIndicator#description}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.hashes">Hashes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#hashes SentinelThreatIntelligenceIndicator#hashes}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.sourceName">SourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#source_name SentinelThreatIntelligenceIndicator#source_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#url SentinelThreatIntelligenceIndicator#url}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#description SentinelThreatIntelligenceIndicator#description}.

---

##### `Hashes`<sup>Optional</sup> <a name="Hashes" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.hashes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Hashes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#hashes SentinelThreatIntelligenceIndicator#hashes}.

---

##### `SourceName`<sup>Optional</sup> <a name="SourceName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.sourceName"></a>

```csharp
public string SourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#source_name SentinelThreatIntelligenceIndicator#source_name}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#url SentinelThreatIntelligenceIndicator#url}.

---

### SentinelThreatIntelligenceIndicatorGranularMarking <a name="SentinelThreatIntelligenceIndicatorGranularMarking" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorGranularMarking {
    string Language = null,
    string MarkingRef = null,
    string[] Selectors = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.language">Language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#language SentinelThreatIntelligenceIndicator#language}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.markingRef">MarkingRef</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#marking_ref SentinelThreatIntelligenceIndicator#marking_ref}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.selectors">Selectors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#selectors SentinelThreatIntelligenceIndicator#selectors}. |

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#language SentinelThreatIntelligenceIndicator#language}.

---

##### `MarkingRef`<sup>Optional</sup> <a name="MarkingRef" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.markingRef"></a>

```csharp
public string MarkingRef { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#marking_ref SentinelThreatIntelligenceIndicator#marking_ref}.

---

##### `Selectors`<sup>Optional</sup> <a name="Selectors" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.selectors"></a>

```csharp
public string[] Selectors { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#selectors SentinelThreatIntelligenceIndicator#selectors}.

---

### SentinelThreatIntelligenceIndicatorKillChainPhase <a name="SentinelThreatIntelligenceIndicatorKillChainPhase" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorKillChainPhase {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#name SentinelThreatIntelligenceIndicator#name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#name SentinelThreatIntelligenceIndicator#name}.

---

### SentinelThreatIntelligenceIndicatorParsedPattern <a name="SentinelThreatIntelligenceIndicatorParsedPattern" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorParsedPattern {

};
```


### SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues <a name="SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues {

};
```


### SentinelThreatIntelligenceIndicatorTimeouts <a name="SentinelThreatIntelligenceIndicatorTimeouts" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#create SentinelThreatIntelligenceIndicator#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#delete SentinelThreatIntelligenceIndicator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#read SentinelThreatIntelligenceIndicator#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#update SentinelThreatIntelligenceIndicator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#create SentinelThreatIntelligenceIndicator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#delete SentinelThreatIntelligenceIndicator#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#read SentinelThreatIntelligenceIndicator#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/sentinel_threat_intelligence_indicator#update SentinelThreatIntelligenceIndicator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelThreatIntelligenceIndicatorExternalReferenceList <a name="SentinelThreatIntelligenceIndicatorExternalReferenceList" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorExternalReferenceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.get"></a>

```csharp
private SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference <a name="SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetHashes">ResetHashes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetSourceName">ResetSourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHashes` <a name="ResetHashes" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetHashes"></a>

```csharp
private void ResetHashes()
```

##### `ResetSourceName` <a name="ResetSourceName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetSourceName"></a>

```csharp
private void ResetSourceName()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.hashesInput">HashesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.sourceNameInput">SourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.hashes">Hashes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HashesInput`<sup>Optional</sup> <a name="HashesInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.hashesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HashesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.sourceNameInput"></a>

```csharp
public string SourceNameInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Hashes`<sup>Required</sup> <a name="Hashes" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.hashes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Hashes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SentinelThreatIntelligenceIndicatorGranularMarkingList <a name="SentinelThreatIntelligenceIndicatorGranularMarkingList" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorGranularMarkingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.get"></a>

```csharp
private SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference <a name="SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetLanguage">ResetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetMarkingRef">ResetMarkingRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetSelectors">ResetSelectors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetLanguage"></a>

```csharp
private void ResetLanguage()
```

##### `ResetMarkingRef` <a name="ResetMarkingRef" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetMarkingRef"></a>

```csharp
private void ResetMarkingRef()
```

##### `ResetSelectors` <a name="ResetSelectors" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetSelectors"></a>

```csharp
private void ResetSelectors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.markingRefInput">MarkingRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.selectorsInput">SelectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.markingRef">MarkingRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.selectors">Selectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `MarkingRefInput`<sup>Optional</sup> <a name="MarkingRefInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.markingRefInput"></a>

```csharp
public string MarkingRefInput { get; }
```

- *Type:* string

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.selectorsInput"></a>

```csharp
public string[] SelectorsInput { get; }
```

- *Type:* string[]

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `MarkingRef`<sup>Required</sup> <a name="MarkingRef" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.markingRef"></a>

```csharp
public string MarkingRef { get; }
```

- *Type:* string

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.selectors"></a>

```csharp
public string[] Selectors { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SentinelThreatIntelligenceIndicatorKillChainPhaseList <a name="SentinelThreatIntelligenceIndicatorKillChainPhaseList" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorKillChainPhaseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.get"></a>

```csharp
private SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference <a name="SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SentinelThreatIntelligenceIndicatorParsedPatternList <a name="SentinelThreatIntelligenceIndicatorParsedPatternList" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorParsedPatternList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.get"></a>

```csharp
private SentinelThreatIntelligenceIndicatorParsedPatternOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SentinelThreatIntelligenceIndicatorParsedPatternOutputReference <a name="SentinelThreatIntelligenceIndicatorParsedPatternOutputReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorParsedPatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.patternTypeKey">PatternTypeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.patternTypeValues">PatternTypeValues</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList">SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPattern">SentinelThreatIntelligenceIndicatorParsedPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PatternTypeKey`<sup>Required</sup> <a name="PatternTypeKey" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.patternTypeKey"></a>

```csharp
public string PatternTypeKey { get; }
```

- *Type:* string

---

##### `PatternTypeValues`<sup>Required</sup> <a name="PatternTypeValues" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.patternTypeValues"></a>

```csharp
public SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList PatternTypeValues { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList">SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.internalValue"></a>

```csharp
public SentinelThreatIntelligenceIndicatorParsedPattern InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPattern">SentinelThreatIntelligenceIndicatorParsedPattern</a>

---


### SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList <a name="SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.get"></a>

```csharp
private SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference <a name="SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues">SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.internalValue"></a>

```csharp
public SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues">SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues</a>

---


### SentinelThreatIntelligenceIndicatorTimeoutsOutputReference <a name="SentinelThreatIntelligenceIndicatorTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelThreatIntelligenceIndicatorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



