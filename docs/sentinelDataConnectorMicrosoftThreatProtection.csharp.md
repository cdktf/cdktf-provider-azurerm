# `sentinelDataConnectorMicrosoftThreatProtection` Submodule <a name="`sentinelDataConnectorMicrosoftThreatProtection` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorMicrosoftThreatProtection <a name="SentinelDataConnectorMicrosoftThreatProtection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection azurerm_sentinel_data_connector_microsoft_threat_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftThreatProtection(Construct Scope, string Id, SentinelDataConnectorMicrosoftThreatProtectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig">SentinelDataConnectorMicrosoftThreatProtectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig">SentinelDataConnectorMicrosoftThreatProtectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.putTimeouts"></a>

```csharp
private void PutTimeouts(SentinelDataConnectorMicrosoftThreatProtectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts">SentinelDataConnectorMicrosoftThreatProtectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelDataConnectorMicrosoftThreatProtection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftThreatProtection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftThreatProtection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftThreatProtection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftThreatProtection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SentinelDataConnectorMicrosoftThreatProtection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelDataConnectorMicrosoftThreatProtection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelDataConnectorMicrosoftThreatProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorMicrosoftThreatProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference">SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts">SentinelDataConnectorMicrosoftThreatProtectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.timeouts"></a>

```csharp
public SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference">SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.timeoutsInput"></a>

```csharp
public IResolvable|SentinelDataConnectorMicrosoftThreatProtectionTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts">SentinelDataConnectorMicrosoftThreatProtectionTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorMicrosoftThreatProtectionConfig <a name="SentinelDataConnectorMicrosoftThreatProtectionConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftThreatProtectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LogAnalyticsWorkspaceId,
    string Name,
    string Id = null,
    string TenantId = null,
    SentinelDataConnectorMicrosoftThreatProtectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatProtection#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#name SentinelDataConnectorMicrosoftThreatProtection#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#id SentinelDataConnectorMicrosoftThreatProtection#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#tenant_id SentinelDataConnectorMicrosoftThreatProtection#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts">SentinelDataConnectorMicrosoftThreatProtectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatProtection#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#name SentinelDataConnectorMicrosoftThreatProtection#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#id SentinelDataConnectorMicrosoftThreatProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#tenant_id SentinelDataConnectorMicrosoftThreatProtection#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.timeouts"></a>

```csharp
public SentinelDataConnectorMicrosoftThreatProtectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts">SentinelDataConnectorMicrosoftThreatProtectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#timeouts SentinelDataConnectorMicrosoftThreatProtection#timeouts}

---

### SentinelDataConnectorMicrosoftThreatProtectionTimeouts <a name="SentinelDataConnectorMicrosoftThreatProtectionTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftThreatProtectionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#create SentinelDataConnectorMicrosoftThreatProtection#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#delete SentinelDataConnectorMicrosoftThreatProtection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#read SentinelDataConnectorMicrosoftThreatProtection#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#create SentinelDataConnectorMicrosoftThreatProtection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#delete SentinelDataConnectorMicrosoftThreatProtection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#read SentinelDataConnectorMicrosoftThreatProtection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference <a name="SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts">SentinelDataConnectorMicrosoftThreatProtectionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SentinelDataConnectorMicrosoftThreatProtectionTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts">SentinelDataConnectorMicrosoftThreatProtectionTimeouts</a>

---



