# `sentinelDataConnectorMicrosoftCloudAppSecurity` Submodule <a name="`sentinelDataConnectorMicrosoftCloudAppSecurity` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorMicrosoftCloudAppSecurity <a name="SentinelDataConnectorMicrosoftCloudAppSecurity" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security azurerm_sentinel_data_connector_microsoft_cloud_app_security}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftCloudAppSecurity(Construct Scope, string Id, SentinelDataConnectorMicrosoftCloudAppSecurityConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig">SentinelDataConnectorMicrosoftCloudAppSecurityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig">SentinelDataConnectorMicrosoftCloudAppSecurityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetAlertsEnabled">ResetAlertsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetDiscoveryLogsEnabled">ResetDiscoveryLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.putTimeouts"></a>

```csharp
private void PutTimeouts(SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts">SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts</a>

---

##### `ResetAlertsEnabled` <a name="ResetAlertsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetAlertsEnabled"></a>

```csharp
private void ResetAlertsEnabled()
```

##### `ResetDiscoveryLogsEnabled` <a name="ResetDiscoveryLogsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetDiscoveryLogsEnabled"></a>

```csharp
private void ResetDiscoveryLogsEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelDataConnectorMicrosoftCloudAppSecurity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftCloudAppSecurity.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftCloudAppSecurity.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftCloudAppSecurity.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelDataConnectorMicrosoftCloudAppSecurity.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SentinelDataConnectorMicrosoftCloudAppSecurity resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelDataConnectorMicrosoftCloudAppSecurity to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelDataConnectorMicrosoftCloudAppSecurity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorMicrosoftCloudAppSecurity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference">SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.alertsEnabledInput">AlertsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.discoveryLogsEnabledInput">DiscoveryLogsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.alertsEnabled">AlertsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.discoveryLogsEnabled">DiscoveryLogsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.timeouts"></a>

```csharp
public SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference">SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference</a>

---

##### `AlertsEnabledInput`<sup>Optional</sup> <a name="AlertsEnabledInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.alertsEnabledInput"></a>

```csharp
public object AlertsEnabledInput { get; }
```

- *Type:* object

---

##### `DiscoveryLogsEnabledInput`<sup>Optional</sup> <a name="DiscoveryLogsEnabledInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.discoveryLogsEnabledInput"></a>

```csharp
public object DiscoveryLogsEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AlertsEnabled`<sup>Required</sup> <a name="AlertsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.alertsEnabled"></a>

```csharp
public object AlertsEnabled { get; }
```

- *Type:* object

---

##### `DiscoveryLogsEnabled`<sup>Required</sup> <a name="DiscoveryLogsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.discoveryLogsEnabled"></a>

```csharp
public object DiscoveryLogsEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorMicrosoftCloudAppSecurityConfig <a name="SentinelDataConnectorMicrosoftCloudAppSecurityConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftCloudAppSecurityConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LogAnalyticsWorkspaceId,
    string Name,
    object AlertsEnabled = null,
    object DiscoveryLogsEnabled = null,
    string Id = null,
    string TenantId = null,
    SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#log_analytics_workspace_id SentinelDataConnectorMicrosoftCloudAppSecurity#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#name SentinelDataConnectorMicrosoftCloudAppSecurity#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.alertsEnabled">AlertsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#alerts_enabled SentinelDataConnectorMicrosoftCloudAppSecurity#alerts_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.discoveryLogsEnabled">DiscoveryLogsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#discovery_logs_enabled SentinelDataConnectorMicrosoftCloudAppSecurity#discovery_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#id SentinelDataConnectorMicrosoftCloudAppSecurity#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#tenant_id SentinelDataConnectorMicrosoftCloudAppSecurity#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts">SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#log_analytics_workspace_id SentinelDataConnectorMicrosoftCloudAppSecurity#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#name SentinelDataConnectorMicrosoftCloudAppSecurity#name}.

---

##### `AlertsEnabled`<sup>Optional</sup> <a name="AlertsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.alertsEnabled"></a>

```csharp
public object AlertsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#alerts_enabled SentinelDataConnectorMicrosoftCloudAppSecurity#alerts_enabled}.

---

##### `DiscoveryLogsEnabled`<sup>Optional</sup> <a name="DiscoveryLogsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.discoveryLogsEnabled"></a>

```csharp
public object DiscoveryLogsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#discovery_logs_enabled SentinelDataConnectorMicrosoftCloudAppSecurity#discovery_logs_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#id SentinelDataConnectorMicrosoftCloudAppSecurity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#tenant_id SentinelDataConnectorMicrosoftCloudAppSecurity#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.timeouts"></a>

```csharp
public SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts">SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#timeouts SentinelDataConnectorMicrosoftCloudAppSecurity#timeouts}

---

### SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts <a name="SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#create SentinelDataConnectorMicrosoftCloudAppSecurity#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#delete SentinelDataConnectorMicrosoftCloudAppSecurity#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#read SentinelDataConnectorMicrosoftCloudAppSecurity#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#update SentinelDataConnectorMicrosoftCloudAppSecurity#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#create SentinelDataConnectorMicrosoftCloudAppSecurity#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#delete SentinelDataConnectorMicrosoftCloudAppSecurity#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#read SentinelDataConnectorMicrosoftCloudAppSecurity#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/sentinel_data_connector_microsoft_cloud_app_security#update SentinelDataConnectorMicrosoftCloudAppSecurity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference <a name="SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



