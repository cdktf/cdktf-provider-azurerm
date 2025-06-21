# `sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection` Submodule <a name="`sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection <a name="SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection azurerm_sentinel_data_connector_microsoft_defender_advanced_threat_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection(Construct Scope, string Id, SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.putTimeouts"></a>

```csharp
private void PutTimeouts(SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.timeouts"></a>

```csharp
public SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig <a name="SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LogAnalyticsWorkspaceId,
    string Name,
    string Id = null,
    string TenantId = null,
    SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#name SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#tenant_id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#name SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#tenant_id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.timeouts"></a>

```csharp
public SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#timeouts SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#timeouts}

---

### SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts <a name="SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#create SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#delete SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#read SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#create SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#delete SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/sentinel_data_connector_microsoft_defender_advanced_threat_protection#read SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference <a name="SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



