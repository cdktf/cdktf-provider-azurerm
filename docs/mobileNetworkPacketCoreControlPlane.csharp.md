# `mobileNetworkPacketCoreControlPlane` Submodule <a name="`mobileNetworkPacketCoreControlPlane` Submodule" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkPacketCoreControlPlane <a name="MobileNetworkPacketCoreControlPlane" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane azurerm_mobile_network_packet_core_control_plane}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkPacketCoreControlPlane(Construct Scope, string Id, MobileNetworkPacketCoreControlPlaneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig">MobileNetworkPacketCoreControlPlaneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig">MobileNetworkPacketCoreControlPlaneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putLocalDiagnosticsAccess">PutLocalDiagnosticsAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putPlatform">PutPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Address">ResetControlPlaneAccessIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Gateway">ResetControlPlaneAccessIpv4Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Subnet">ResetControlPlaneAccessIpv4Subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessName">ResetControlPlaneAccessName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetCoreNetworkTechnology">ResetCoreNetworkTechnology</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetInteroperabilitySettingsJson">ResetInteroperabilitySettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetSoftwareVersion">ResetSoftwareVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetUserEquipmentMtuInBytes">ResetUserEquipmentMtuInBytes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putIdentity"></a>

```csharp
private void PutIdentity(MobileNetworkPacketCoreControlPlaneIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a>

---

##### `PutLocalDiagnosticsAccess` <a name="PutLocalDiagnosticsAccess" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putLocalDiagnosticsAccess"></a>

```csharp
private void PutLocalDiagnosticsAccess(MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putLocalDiagnosticsAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a>

---

##### `PutPlatform` <a name="PutPlatform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putPlatform"></a>

```csharp
private void PutPlatform(MobileNetworkPacketCoreControlPlanePlatform Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putPlatform.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putTimeouts"></a>

```csharp
private void PutTimeouts(MobileNetworkPacketCoreControlPlaneTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a>

---

##### `ResetControlPlaneAccessIpv4Address` <a name="ResetControlPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Address"></a>

```csharp
private void ResetControlPlaneAccessIpv4Address()
```

##### `ResetControlPlaneAccessIpv4Gateway` <a name="ResetControlPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Gateway"></a>

```csharp
private void ResetControlPlaneAccessIpv4Gateway()
```

##### `ResetControlPlaneAccessIpv4Subnet` <a name="ResetControlPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Subnet"></a>

```csharp
private void ResetControlPlaneAccessIpv4Subnet()
```

##### `ResetControlPlaneAccessName` <a name="ResetControlPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessName"></a>

```csharp
private void ResetControlPlaneAccessName()
```

##### `ResetCoreNetworkTechnology` <a name="ResetCoreNetworkTechnology" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetCoreNetworkTechnology"></a>

```csharp
private void ResetCoreNetworkTechnology()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetInteroperabilitySettingsJson` <a name="ResetInteroperabilitySettingsJson" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetInteroperabilitySettingsJson"></a>

```csharp
private void ResetInteroperabilitySettingsJson()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetPlatform"></a>

```csharp
private void ResetPlatform()
```

##### `ResetSoftwareVersion` <a name="ResetSoftwareVersion" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetSoftwareVersion"></a>

```csharp
private void ResetSoftwareVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserEquipmentMtuInBytes` <a name="ResetUserEquipmentMtuInBytes" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetUserEquipmentMtuInBytes"></a>

```csharp
private void ResetUserEquipmentMtuInBytes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MobileNetworkPacketCoreControlPlane resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkPacketCoreControlPlane.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkPacketCoreControlPlane.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkPacketCoreControlPlane.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkPacketCoreControlPlane.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MobileNetworkPacketCoreControlPlane resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MobileNetworkPacketCoreControlPlane to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MobileNetworkPacketCoreControlPlane that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MobileNetworkPacketCoreControlPlane to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference">MobileNetworkPacketCoreControlPlaneIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.localDiagnosticsAccess">LocalDiagnosticsAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.platform">Platform</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference">MobileNetworkPacketCoreControlPlanePlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference">MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4AddressInput">ControlPlaneAccessIpv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4GatewayInput">ControlPlaneAccessIpv4GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4SubnetInput">ControlPlaneAccessIpv4SubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessNameInput">ControlPlaneAccessNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.coreNetworkTechnologyInput">CoreNetworkTechnologyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.interoperabilitySettingsJsonInput">InteroperabilitySettingsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.localDiagnosticsAccessInput">LocalDiagnosticsAccessInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.platformInput">PlatformInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.siteIdsInput">SiteIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.softwareVersionInput">SoftwareVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.userEquipmentMtuInBytesInput">UserEquipmentMtuInBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Address">ControlPlaneAccessIpv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Gateway">ControlPlaneAccessIpv4Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Subnet">ControlPlaneAccessIpv4Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessName">ControlPlaneAccessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.coreNetworkTechnology">CoreNetworkTechnology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.interoperabilitySettingsJson">InteroperabilitySettingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.siteIds">SiteIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.softwareVersion">SoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.userEquipmentMtuInBytes">UserEquipmentMtuInBytes</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.identity"></a>

```csharp
public MobileNetworkPacketCoreControlPlaneIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference">MobileNetworkPacketCoreControlPlaneIdentityOutputReference</a>

---

##### `LocalDiagnosticsAccess`<sup>Required</sup> <a name="LocalDiagnosticsAccess" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.localDiagnosticsAccess"></a>

```csharp
public MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference LocalDiagnosticsAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference</a>

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.platform"></a>

```csharp
public MobileNetworkPacketCoreControlPlanePlatformOutputReference Platform { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference">MobileNetworkPacketCoreControlPlanePlatformOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.timeouts"></a>

```csharp
public MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference">MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference</a>

---

##### `ControlPlaneAccessIpv4AddressInput`<sup>Optional</sup> <a name="ControlPlaneAccessIpv4AddressInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4AddressInput"></a>

```csharp
public string ControlPlaneAccessIpv4AddressInput { get; }
```

- *Type:* string

---

##### `ControlPlaneAccessIpv4GatewayInput`<sup>Optional</sup> <a name="ControlPlaneAccessIpv4GatewayInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4GatewayInput"></a>

```csharp
public string ControlPlaneAccessIpv4GatewayInput { get; }
```

- *Type:* string

---

##### `ControlPlaneAccessIpv4SubnetInput`<sup>Optional</sup> <a name="ControlPlaneAccessIpv4SubnetInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4SubnetInput"></a>

```csharp
public string ControlPlaneAccessIpv4SubnetInput { get; }
```

- *Type:* string

---

##### `ControlPlaneAccessNameInput`<sup>Optional</sup> <a name="ControlPlaneAccessNameInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessNameInput"></a>

```csharp
public string ControlPlaneAccessNameInput { get; }
```

- *Type:* string

---

##### `CoreNetworkTechnologyInput`<sup>Optional</sup> <a name="CoreNetworkTechnologyInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.coreNetworkTechnologyInput"></a>

```csharp
public string CoreNetworkTechnologyInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.identityInput"></a>

```csharp
public MobileNetworkPacketCoreControlPlaneIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InteroperabilitySettingsJsonInput`<sup>Optional</sup> <a name="InteroperabilitySettingsJsonInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.interoperabilitySettingsJsonInput"></a>

```csharp
public string InteroperabilitySettingsJsonInput { get; }
```

- *Type:* string

---

##### `LocalDiagnosticsAccessInput`<sup>Optional</sup> <a name="LocalDiagnosticsAccessInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.localDiagnosticsAccessInput"></a>

```csharp
public MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess LocalDiagnosticsAccessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.platformInput"></a>

```csharp
public MobileNetworkPacketCoreControlPlanePlatform PlatformInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SiteIdsInput`<sup>Optional</sup> <a name="SiteIdsInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.siteIdsInput"></a>

```csharp
public string[] SiteIdsInput { get; }
```

- *Type:* string[]

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `SoftwareVersionInput`<sup>Optional</sup> <a name="SoftwareVersionInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.softwareVersionInput"></a>

```csharp
public string SoftwareVersionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserEquipmentMtuInBytesInput`<sup>Optional</sup> <a name="UserEquipmentMtuInBytesInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.userEquipmentMtuInBytesInput"></a>

```csharp
public double UserEquipmentMtuInBytesInput { get; }
```

- *Type:* double

---

##### `ControlPlaneAccessIpv4Address`<sup>Required</sup> <a name="ControlPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Address"></a>

```csharp
public string ControlPlaneAccessIpv4Address { get; }
```

- *Type:* string

---

##### `ControlPlaneAccessIpv4Gateway`<sup>Required</sup> <a name="ControlPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Gateway"></a>

```csharp
public string ControlPlaneAccessIpv4Gateway { get; }
```

- *Type:* string

---

##### `ControlPlaneAccessIpv4Subnet`<sup>Required</sup> <a name="ControlPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Subnet"></a>

```csharp
public string ControlPlaneAccessIpv4Subnet { get; }
```

- *Type:* string

---

##### `ControlPlaneAccessName`<sup>Required</sup> <a name="ControlPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessName"></a>

```csharp
public string ControlPlaneAccessName { get; }
```

- *Type:* string

---

##### `CoreNetworkTechnology`<sup>Required</sup> <a name="CoreNetworkTechnology" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.coreNetworkTechnology"></a>

```csharp
public string CoreNetworkTechnology { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InteroperabilitySettingsJson`<sup>Required</sup> <a name="InteroperabilitySettingsJson" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.interoperabilitySettingsJson"></a>

```csharp
public string InteroperabilitySettingsJson { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SiteIds`<sup>Required</sup> <a name="SiteIds" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.siteIds"></a>

```csharp
public string[] SiteIds { get; }
```

- *Type:* string[]

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `SoftwareVersion`<sup>Required</sup> <a name="SoftwareVersion" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.softwareVersion"></a>

```csharp
public string SoftwareVersion { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserEquipmentMtuInBytes`<sup>Required</sup> <a name="UserEquipmentMtuInBytes" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.userEquipmentMtuInBytes"></a>

```csharp
public double UserEquipmentMtuInBytes { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkPacketCoreControlPlaneConfig <a name="MobileNetworkPacketCoreControlPlaneConfig" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkPacketCoreControlPlaneConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess LocalDiagnosticsAccess,
    string Location,
    string Name,
    string ResourceGroupName,
    string[] SiteIds,
    string Sku,
    string ControlPlaneAccessIpv4Address = null,
    string ControlPlaneAccessIpv4Gateway = null,
    string ControlPlaneAccessIpv4Subnet = null,
    string ControlPlaneAccessName = null,
    string CoreNetworkTechnology = null,
    string Id = null,
    MobileNetworkPacketCoreControlPlaneIdentity Identity = null,
    string InteroperabilitySettingsJson = null,
    MobileNetworkPacketCoreControlPlanePlatform Platform = null,
    string SoftwareVersion = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MobileNetworkPacketCoreControlPlaneTimeouts Timeouts = null,
    double UserEquipmentMtuInBytes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.localDiagnosticsAccess">LocalDiagnosticsAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a></code> | local_diagnostics_access block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#location MobileNetworkPacketCoreControlPlane#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#name MobileNetworkPacketCoreControlPlane#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#resource_group_name MobileNetworkPacketCoreControlPlane#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.siteIds">SiteIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#site_ids MobileNetworkPacketCoreControlPlane#site_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#sku MobileNetworkPacketCoreControlPlane#sku}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Address">ControlPlaneAccessIpv4Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_address MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Gateway">ControlPlaneAccessIpv4Gateway</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_gateway MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_gateway}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Subnet">ControlPlaneAccessIpv4Subnet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_subnet MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_subnet}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessName">ControlPlaneAccessName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_name MobileNetworkPacketCoreControlPlane#control_plane_access_name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.coreNetworkTechnology">CoreNetworkTechnology</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#core_network_technology MobileNetworkPacketCoreControlPlane#core_network_technology}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#id MobileNetworkPacketCoreControlPlane#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.interoperabilitySettingsJson">InteroperabilitySettingsJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#interoperability_settings_json MobileNetworkPacketCoreControlPlane#interoperability_settings_json}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.platform">Platform</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a></code> | platform block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.softwareVersion">SoftwareVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#software_version MobileNetworkPacketCoreControlPlane#software_version}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#tags MobileNetworkPacketCoreControlPlane#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.userEquipmentMtuInBytes">UserEquipmentMtuInBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#user_equipment_mtu_in_bytes MobileNetworkPacketCoreControlPlane#user_equipment_mtu_in_bytes}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LocalDiagnosticsAccess`<sup>Required</sup> <a name="LocalDiagnosticsAccess" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.localDiagnosticsAccess"></a>

```csharp
public MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess LocalDiagnosticsAccess { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a>

local_diagnostics_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#local_diagnostics_access MobileNetworkPacketCoreControlPlane#local_diagnostics_access}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#location MobileNetworkPacketCoreControlPlane#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#name MobileNetworkPacketCoreControlPlane#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#resource_group_name MobileNetworkPacketCoreControlPlane#resource_group_name}.

---

##### `SiteIds`<sup>Required</sup> <a name="SiteIds" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.siteIds"></a>

```csharp
public string[] SiteIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#site_ids MobileNetworkPacketCoreControlPlane#site_ids}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#sku MobileNetworkPacketCoreControlPlane#sku}.

---

##### `ControlPlaneAccessIpv4Address`<sup>Optional</sup> <a name="ControlPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Address"></a>

```csharp
public string ControlPlaneAccessIpv4Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_address MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_address}.

---

##### `ControlPlaneAccessIpv4Gateway`<sup>Optional</sup> <a name="ControlPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Gateway"></a>

```csharp
public string ControlPlaneAccessIpv4Gateway { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_gateway MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_gateway}.

---

##### `ControlPlaneAccessIpv4Subnet`<sup>Optional</sup> <a name="ControlPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Subnet"></a>

```csharp
public string ControlPlaneAccessIpv4Subnet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_subnet MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_subnet}.

---

##### `ControlPlaneAccessName`<sup>Optional</sup> <a name="ControlPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessName"></a>

```csharp
public string ControlPlaneAccessName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_name MobileNetworkPacketCoreControlPlane#control_plane_access_name}.

---

##### `CoreNetworkTechnology`<sup>Optional</sup> <a name="CoreNetworkTechnology" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.coreNetworkTechnology"></a>

```csharp
public string CoreNetworkTechnology { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#core_network_technology MobileNetworkPacketCoreControlPlane#core_network_technology}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#id MobileNetworkPacketCoreControlPlane#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.identity"></a>

```csharp
public MobileNetworkPacketCoreControlPlaneIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#identity MobileNetworkPacketCoreControlPlane#identity}

---

##### `InteroperabilitySettingsJson`<sup>Optional</sup> <a name="InteroperabilitySettingsJson" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.interoperabilitySettingsJson"></a>

```csharp
public string InteroperabilitySettingsJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#interoperability_settings_json MobileNetworkPacketCoreControlPlane#interoperability_settings_json}.

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.platform"></a>

```csharp
public MobileNetworkPacketCoreControlPlanePlatform Platform { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a>

platform block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#platform MobileNetworkPacketCoreControlPlane#platform}

---

##### `SoftwareVersion`<sup>Optional</sup> <a name="SoftwareVersion" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.softwareVersion"></a>

```csharp
public string SoftwareVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#software_version MobileNetworkPacketCoreControlPlane#software_version}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#tags MobileNetworkPacketCoreControlPlane#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.timeouts"></a>

```csharp
public MobileNetworkPacketCoreControlPlaneTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#timeouts MobileNetworkPacketCoreControlPlane#timeouts}

---

##### `UserEquipmentMtuInBytes`<sup>Optional</sup> <a name="UserEquipmentMtuInBytes" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.userEquipmentMtuInBytes"></a>

```csharp
public double UserEquipmentMtuInBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#user_equipment_mtu_in_bytes MobileNetworkPacketCoreControlPlane#user_equipment_mtu_in_bytes}.

---

### MobileNetworkPacketCoreControlPlaneIdentity <a name="MobileNetworkPacketCoreControlPlaneIdentity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkPacketCoreControlPlaneIdentity {
    string[] IdentityIds,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#identity_ids MobileNetworkPacketCoreControlPlane#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#identity_ids MobileNetworkPacketCoreControlPlane#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}.

---

### MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess <a name="MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess {
    string AuthenticationType,
    string HttpsServerCertificateUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#authentication_type MobileNetworkPacketCoreControlPlane#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.property.httpsServerCertificateUrl">HttpsServerCertificateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#https_server_certificate_url MobileNetworkPacketCoreControlPlane#https_server_certificate_url}. |

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#authentication_type MobileNetworkPacketCoreControlPlane#authentication_type}.

---

##### `HttpsServerCertificateUrl`<sup>Optional</sup> <a name="HttpsServerCertificateUrl" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.property.httpsServerCertificateUrl"></a>

```csharp
public string HttpsServerCertificateUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#https_server_certificate_url MobileNetworkPacketCoreControlPlane#https_server_certificate_url}.

---

### MobileNetworkPacketCoreControlPlanePlatform <a name="MobileNetworkPacketCoreControlPlanePlatform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkPacketCoreControlPlanePlatform {
    string Type,
    string ArcKubernetesClusterId = null,
    string CustomLocationId = null,
    string EdgeDeviceId = null,
    string StackHciClusterId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.arcKubernetesClusterId">ArcKubernetesClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#arc_kubernetes_cluster_id MobileNetworkPacketCoreControlPlane#arc_kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.customLocationId">CustomLocationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#custom_location_id MobileNetworkPacketCoreControlPlane#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.edgeDeviceId">EdgeDeviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#edge_device_id MobileNetworkPacketCoreControlPlane#edge_device_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.stackHciClusterId">StackHciClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#stack_hci_cluster_id MobileNetworkPacketCoreControlPlane#stack_hci_cluster_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}.

---

##### `ArcKubernetesClusterId`<sup>Optional</sup> <a name="ArcKubernetesClusterId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.arcKubernetesClusterId"></a>

```csharp
public string ArcKubernetesClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#arc_kubernetes_cluster_id MobileNetworkPacketCoreControlPlane#arc_kubernetes_cluster_id}.

---

##### `CustomLocationId`<sup>Optional</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.customLocationId"></a>

```csharp
public string CustomLocationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#custom_location_id MobileNetworkPacketCoreControlPlane#custom_location_id}.

---

##### `EdgeDeviceId`<sup>Optional</sup> <a name="EdgeDeviceId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.edgeDeviceId"></a>

```csharp
public string EdgeDeviceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#edge_device_id MobileNetworkPacketCoreControlPlane#edge_device_id}.

---

##### `StackHciClusterId`<sup>Optional</sup> <a name="StackHciClusterId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.stackHciClusterId"></a>

```csharp
public string StackHciClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#stack_hci_cluster_id MobileNetworkPacketCoreControlPlane#stack_hci_cluster_id}.

---

### MobileNetworkPacketCoreControlPlaneTimeouts <a name="MobileNetworkPacketCoreControlPlaneTimeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkPacketCoreControlPlaneTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#create MobileNetworkPacketCoreControlPlane#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#delete MobileNetworkPacketCoreControlPlane#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#read MobileNetworkPacketCoreControlPlane#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#update MobileNetworkPacketCoreControlPlane#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#create MobileNetworkPacketCoreControlPlane#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#delete MobileNetworkPacketCoreControlPlane#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#read MobileNetworkPacketCoreControlPlane#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/mobile_network_packet_core_control_plane#update MobileNetworkPacketCoreControlPlane#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkPacketCoreControlPlaneIdentityOutputReference <a name="MobileNetworkPacketCoreControlPlaneIdentityOutputReference" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkPacketCoreControlPlaneIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.internalValue"></a>

```csharp
public MobileNetworkPacketCoreControlPlaneIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a>

---


### MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference <a name="MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resetHttpsServerCertificateUrl">ResetHttpsServerCertificateUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpsServerCertificateUrl` <a name="ResetHttpsServerCertificateUrl" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resetHttpsServerCertificateUrl"></a>

```csharp
private void ResetHttpsServerCertificateUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.httpsServerCertificateUrlInput">HttpsServerCertificateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.httpsServerCertificateUrl">HttpsServerCertificateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `HttpsServerCertificateUrlInput`<sup>Optional</sup> <a name="HttpsServerCertificateUrlInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.httpsServerCertificateUrlInput"></a>

```csharp
public string HttpsServerCertificateUrlInput { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `HttpsServerCertificateUrl`<sup>Required</sup> <a name="HttpsServerCertificateUrl" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.httpsServerCertificateUrl"></a>

```csharp
public string HttpsServerCertificateUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.internalValue"></a>

```csharp
public MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a>

---


### MobileNetworkPacketCoreControlPlanePlatformOutputReference <a name="MobileNetworkPacketCoreControlPlanePlatformOutputReference" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkPacketCoreControlPlanePlatformOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetArcKubernetesClusterId">ResetArcKubernetesClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetCustomLocationId">ResetCustomLocationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetEdgeDeviceId">ResetEdgeDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetStackHciClusterId">ResetStackHciClusterId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArcKubernetesClusterId` <a name="ResetArcKubernetesClusterId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetArcKubernetesClusterId"></a>

```csharp
private void ResetArcKubernetesClusterId()
```

##### `ResetCustomLocationId` <a name="ResetCustomLocationId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetCustomLocationId"></a>

```csharp
private void ResetCustomLocationId()
```

##### `ResetEdgeDeviceId` <a name="ResetEdgeDeviceId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetEdgeDeviceId"></a>

```csharp
private void ResetEdgeDeviceId()
```

##### `ResetStackHciClusterId` <a name="ResetStackHciClusterId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetStackHciClusterId"></a>

```csharp
private void ResetStackHciClusterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.arcKubernetesClusterIdInput">ArcKubernetesClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.customLocationIdInput">CustomLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.edgeDeviceIdInput">EdgeDeviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.stackHciClusterIdInput">StackHciClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.arcKubernetesClusterId">ArcKubernetesClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.customLocationId">CustomLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.edgeDeviceId">EdgeDeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.stackHciClusterId">StackHciClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArcKubernetesClusterIdInput`<sup>Optional</sup> <a name="ArcKubernetesClusterIdInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.arcKubernetesClusterIdInput"></a>

```csharp
public string ArcKubernetesClusterIdInput { get; }
```

- *Type:* string

---

##### `CustomLocationIdInput`<sup>Optional</sup> <a name="CustomLocationIdInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.customLocationIdInput"></a>

```csharp
public string CustomLocationIdInput { get; }
```

- *Type:* string

---

##### `EdgeDeviceIdInput`<sup>Optional</sup> <a name="EdgeDeviceIdInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.edgeDeviceIdInput"></a>

```csharp
public string EdgeDeviceIdInput { get; }
```

- *Type:* string

---

##### `StackHciClusterIdInput`<sup>Optional</sup> <a name="StackHciClusterIdInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.stackHciClusterIdInput"></a>

```csharp
public string StackHciClusterIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ArcKubernetesClusterId`<sup>Required</sup> <a name="ArcKubernetesClusterId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.arcKubernetesClusterId"></a>

```csharp
public string ArcKubernetesClusterId { get; }
```

- *Type:* string

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.customLocationId"></a>

```csharp
public string CustomLocationId { get; }
```

- *Type:* string

---

##### `EdgeDeviceId`<sup>Required</sup> <a name="EdgeDeviceId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.edgeDeviceId"></a>

```csharp
public string EdgeDeviceId { get; }
```

- *Type:* string

---

##### `StackHciClusterId`<sup>Required</sup> <a name="StackHciClusterId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.stackHciClusterId"></a>

```csharp
public string StackHciClusterId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.internalValue"></a>

```csharp
public MobileNetworkPacketCoreControlPlanePlatform InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a>

---


### MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference <a name="MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



