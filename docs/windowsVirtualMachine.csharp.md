# `windowsVirtualMachine` Submodule <a name="`windowsVirtualMachine` Submodule" id="@cdktf/provider-azurerm.windowsVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WindowsVirtualMachine <a name="WindowsVirtualMachine" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine azurerm_windows_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachine(Construct Scope, string Id, WindowsVirtualMachineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig">WindowsVirtualMachineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig">WindowsVirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalCapabilities">PutAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalUnattendContent">PutAdditionalUnattendContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putBootDiagnostics">PutBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putGalleryApplication">PutGalleryApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk">PutOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsImageNotification">PutOsImageNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putPlan">PutPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference">PutSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTerminationNotification">PutTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putWinrmListener">PutWinrmListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalCapabilities">ResetAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalUnattendContent">ResetAdditionalUnattendContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdminUsername">ResetAdminUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAllowExtensionOperations">ResetAllowExtensionOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAutomaticUpdatesEnabled">ResetAutomaticUpdatesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAvailabilitySetId">ResetAvailabilitySetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetBootDiagnostics">ResetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetBypassPlatformSafetyChecksOnUserScheduleEnabled">ResetBypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetCapacityReservationGroupId">ResetCapacityReservationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetComputerName">ResetComputerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetCustomData">ResetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDedicatedHostGroupId">ResetDedicatedHostGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDedicatedHostId">ResetDedicatedHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDiskControllerType">ResetDiskControllerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEdgeZone">ResetEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEnableAutomaticUpdates">ResetEnableAutomaticUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEncryptionAtHostEnabled">ResetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEvictionPolicy">ResetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetExtensionsTimeBudget">ResetExtensionsTimeBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetGalleryApplication">ResetGalleryApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetHotpatchingEnabled">ResetHotpatchingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetMaxBidPrice">ResetMaxBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOsImageNotification">ResetOsImageNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOsManagedDiskId">ResetOsManagedDiskId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPatchAssessmentMode">ResetPatchAssessmentMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPatchMode">ResetPatchMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPlatformFaultDomain">ResetPlatformFaultDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetProvisionVmAgent">ResetProvisionVmAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetProximityPlacementGroupId">ResetProximityPlacementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetRebootSetting">ResetRebootSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSecureBootEnabled">ResetSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageId">ResetSourceImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageReference">ResetSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTerminationNotification">ResetTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVirtualMachineScaleSetId">ResetVirtualMachineScaleSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVmAgentPlatformUpdatesEnabled">ResetVmAgentPlatformUpdatesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVtpmEnabled">ResetVtpmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetWinrmListener">ResetWinrmListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalCapabilities` <a name="PutAdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalCapabilities"></a>

```csharp
private void PutAdditionalCapabilities(WindowsVirtualMachineAdditionalCapabilities Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

---

##### `PutAdditionalUnattendContent` <a name="PutAdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalUnattendContent"></a>

```csharp
private void PutAdditionalUnattendContent(IResolvable|WindowsVirtualMachineAdditionalUnattendContent[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalUnattendContent.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]

---

##### `PutBootDiagnostics` <a name="PutBootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putBootDiagnostics"></a>

```csharp
private void PutBootDiagnostics(WindowsVirtualMachineBootDiagnostics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putBootDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

---

##### `PutGalleryApplication` <a name="PutGalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putGalleryApplication"></a>

```csharp
private void PutGalleryApplication(IResolvable|WindowsVirtualMachineGalleryApplication[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putGalleryApplication.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>[]

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putIdentity"></a>

```csharp
private void PutIdentity(WindowsVirtualMachineIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a>

---

##### `PutOsDisk` <a name="PutOsDisk" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk"></a>

```csharp
private void PutOsDisk(WindowsVirtualMachineOsDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

---

##### `PutOsImageNotification` <a name="PutOsImageNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsImageNotification"></a>

```csharp
private void PutOsImageNotification(WindowsVirtualMachineOsImageNotification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsImageNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a>

---

##### `PutPlan` <a name="PutPlan" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putPlan"></a>

```csharp
private void PutPlan(WindowsVirtualMachinePlan Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSecret"></a>

```csharp
private void PutSecret(IResolvable|WindowsVirtualMachineSecret[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSecret.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]

---

##### `PutSourceImageReference` <a name="PutSourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference"></a>

```csharp
private void PutSourceImageReference(WindowsVirtualMachineSourceImageReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

---

##### `PutTerminationNotification` <a name="PutTerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTerminationNotification"></a>

```csharp
private void PutTerminationNotification(WindowsVirtualMachineTerminationNotification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTerminationNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts"></a>

```csharp
private void PutTimeouts(WindowsVirtualMachineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

---

##### `PutWinrmListener` <a name="PutWinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putWinrmListener"></a>

```csharp
private void PutWinrmListener(IResolvable|WindowsVirtualMachineWinrmListener[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putWinrmListener.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]

---

##### `ResetAdditionalCapabilities` <a name="ResetAdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalCapabilities"></a>

```csharp
private void ResetAdditionalCapabilities()
```

##### `ResetAdditionalUnattendContent` <a name="ResetAdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalUnattendContent"></a>

```csharp
private void ResetAdditionalUnattendContent()
```

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdminPassword"></a>

```csharp
private void ResetAdminPassword()
```

##### `ResetAdminUsername` <a name="ResetAdminUsername" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdminUsername"></a>

```csharp
private void ResetAdminUsername()
```

##### `ResetAllowExtensionOperations` <a name="ResetAllowExtensionOperations" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAllowExtensionOperations"></a>

```csharp
private void ResetAllowExtensionOperations()
```

##### `ResetAutomaticUpdatesEnabled` <a name="ResetAutomaticUpdatesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAutomaticUpdatesEnabled"></a>

```csharp
private void ResetAutomaticUpdatesEnabled()
```

##### `ResetAvailabilitySetId` <a name="ResetAvailabilitySetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAvailabilitySetId"></a>

```csharp
private void ResetAvailabilitySetId()
```

##### `ResetBootDiagnostics` <a name="ResetBootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetBootDiagnostics"></a>

```csharp
private void ResetBootDiagnostics()
```

##### `ResetBypassPlatformSafetyChecksOnUserScheduleEnabled` <a name="ResetBypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetBypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

```csharp
private void ResetBypassPlatformSafetyChecksOnUserScheduleEnabled()
```

##### `ResetCapacityReservationGroupId` <a name="ResetCapacityReservationGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetCapacityReservationGroupId"></a>

```csharp
private void ResetCapacityReservationGroupId()
```

##### `ResetComputerName` <a name="ResetComputerName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetComputerName"></a>

```csharp
private void ResetComputerName()
```

##### `ResetCustomData` <a name="ResetCustomData" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetCustomData"></a>

```csharp
private void ResetCustomData()
```

##### `ResetDedicatedHostGroupId` <a name="ResetDedicatedHostGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDedicatedHostGroupId"></a>

```csharp
private void ResetDedicatedHostGroupId()
```

##### `ResetDedicatedHostId` <a name="ResetDedicatedHostId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDedicatedHostId"></a>

```csharp
private void ResetDedicatedHostId()
```

##### `ResetDiskControllerType` <a name="ResetDiskControllerType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDiskControllerType"></a>

```csharp
private void ResetDiskControllerType()
```

##### `ResetEdgeZone` <a name="ResetEdgeZone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEdgeZone"></a>

```csharp
private void ResetEdgeZone()
```

##### `ResetEnableAutomaticUpdates` <a name="ResetEnableAutomaticUpdates" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEnableAutomaticUpdates"></a>

```csharp
private void ResetEnableAutomaticUpdates()
```

##### `ResetEncryptionAtHostEnabled` <a name="ResetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEncryptionAtHostEnabled"></a>

```csharp
private void ResetEncryptionAtHostEnabled()
```

##### `ResetEvictionPolicy` <a name="ResetEvictionPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEvictionPolicy"></a>

```csharp
private void ResetEvictionPolicy()
```

##### `ResetExtensionsTimeBudget` <a name="ResetExtensionsTimeBudget" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetExtensionsTimeBudget"></a>

```csharp
private void ResetExtensionsTimeBudget()
```

##### `ResetGalleryApplication` <a name="ResetGalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetGalleryApplication"></a>

```csharp
private void ResetGalleryApplication()
```

##### `ResetHotpatchingEnabled` <a name="ResetHotpatchingEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetHotpatchingEnabled"></a>

```csharp
private void ResetHotpatchingEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetLicenseType"></a>

```csharp
private void ResetLicenseType()
```

##### `ResetMaxBidPrice` <a name="ResetMaxBidPrice" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetMaxBidPrice"></a>

```csharp
private void ResetMaxBidPrice()
```

##### `ResetOsImageNotification` <a name="ResetOsImageNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOsImageNotification"></a>

```csharp
private void ResetOsImageNotification()
```

##### `ResetOsManagedDiskId` <a name="ResetOsManagedDiskId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOsManagedDiskId"></a>

```csharp
private void ResetOsManagedDiskId()
```

##### `ResetPatchAssessmentMode` <a name="ResetPatchAssessmentMode" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPatchAssessmentMode"></a>

```csharp
private void ResetPatchAssessmentMode()
```

##### `ResetPatchMode` <a name="ResetPatchMode" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPatchMode"></a>

```csharp
private void ResetPatchMode()
```

##### `ResetPlan` <a name="ResetPlan" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPlan"></a>

```csharp
private void ResetPlan()
```

##### `ResetPlatformFaultDomain` <a name="ResetPlatformFaultDomain" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPlatformFaultDomain"></a>

```csharp
private void ResetPlatformFaultDomain()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProvisionVmAgent` <a name="ResetProvisionVmAgent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetProvisionVmAgent"></a>

```csharp
private void ResetProvisionVmAgent()
```

##### `ResetProximityPlacementGroupId` <a name="ResetProximityPlacementGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetProximityPlacementGroupId"></a>

```csharp
private void ResetProximityPlacementGroupId()
```

##### `ResetRebootSetting` <a name="ResetRebootSetting" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetRebootSetting"></a>

```csharp
private void ResetRebootSetting()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetSecureBootEnabled` <a name="ResetSecureBootEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSecureBootEnabled"></a>

```csharp
private void ResetSecureBootEnabled()
```

##### `ResetSourceImageId` <a name="ResetSourceImageId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageId"></a>

```csharp
private void ResetSourceImageId()
```

##### `ResetSourceImageReference` <a name="ResetSourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageReference"></a>

```csharp
private void ResetSourceImageReference()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTerminationNotification` <a name="ResetTerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTerminationNotification"></a>

```csharp
private void ResetTerminationNotification()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTimezone"></a>

```csharp
private void ResetTimezone()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetUserData"></a>

```csharp
private void ResetUserData()
```

##### `ResetVirtualMachineScaleSetId` <a name="ResetVirtualMachineScaleSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVirtualMachineScaleSetId"></a>

```csharp
private void ResetVirtualMachineScaleSetId()
```

##### `ResetVmAgentPlatformUpdatesEnabled` <a name="ResetVmAgentPlatformUpdatesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVmAgentPlatformUpdatesEnabled"></a>

```csharp
private void ResetVmAgentPlatformUpdatesEnabled()
```

##### `ResetVtpmEnabled` <a name="ResetVtpmEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVtpmEnabled"></a>

```csharp
private void ResetVtpmEnabled()
```

##### `ResetWinrmListener` <a name="ResetWinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetWinrmListener"></a>

```csharp
private void ResetWinrmListener()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WindowsVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WindowsVirtualMachine.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WindowsVirtualMachine.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WindowsVirtualMachine.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WindowsVirtualMachine.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WindowsVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WindowsVirtualMachine to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WindowsVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WindowsVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilities">AdditionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference">WindowsVirtualMachineAdditionalCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContent">AdditionalUnattendContent</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList">WindowsVirtualMachineAdditionalUnattendContentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnostics">BootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference">WindowsVirtualMachineBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.galleryApplication">GalleryApplication</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList">WindowsVirtualMachineGalleryApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference">WindowsVirtualMachineIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference">WindowsVirtualMachineOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osImageNotification">OsImageNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference">WindowsVirtualMachineOsImageNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference">WindowsVirtualMachinePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddress">PublicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddresses">PublicIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList">WindowsVirtualMachineSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReference">SourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference">WindowsVirtualMachineSourceImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terminationNotification">TerminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference">WindowsVirtualMachineTerminationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference">WindowsVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListener">WinrmListener</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList">WindowsVirtualMachineWinrmListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilitiesInput">AdditionalCapabilitiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContentInput">AdditionalUnattendContentInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperationsInput">AllowExtensionOperationsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.automaticUpdatesEnabledInput">AutomaticUpdatesEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetIdInput">AvailabilitySetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnosticsInput">BootDiagnosticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabledInput">BypassPlatformSafetyChecksOnUserScheduleEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.capacityReservationGroupIdInput">CapacityReservationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.computerNameInput">ComputerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.customDataInput">CustomDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostGroupIdInput">DedicatedHostGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostIdInput">DedicatedHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.diskControllerTypeInput">DiskControllerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.edgeZoneInput">EdgeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdatesInput">EnableAutomaticUpdatesInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabledInput">EncryptionAtHostEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicyInput">EvictionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudgetInput">ExtensionsTimeBudgetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.galleryApplicationInput">GalleryApplicationInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.hotpatchingEnabledInput">HotpatchingEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPriceInput">MaxBidPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIdsInput">NetworkInterfaceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osDiskInput">OsDiskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osImageNotificationInput">OsImageNotificationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osManagedDiskIdInput">OsManagedDiskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchAssessmentModeInput">PatchAssessmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchModeInput">PatchModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.planInput">PlanInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.platformFaultDomainInput">PlatformFaultDomainInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.priorityInput">PriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgentInput">ProvisionVmAgentInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.proximityPlacementGroupIdInput">ProximityPlacementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.rebootSettingInput">RebootSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secretInput">SecretInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secureBootEnabledInput">SecureBootEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sizeInput">SizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageIdInput">SourceImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReferenceInput">SourceImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terminationNotificationInput">TerminationNotificationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetIdInput">VirtualMachineScaleSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vmAgentPlatformUpdatesEnabledInput">VmAgentPlatformUpdatesEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vtpmEnabledInput">VtpmEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListenerInput">WinrmListenerInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperations">AllowExtensionOperations</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.automaticUpdatesEnabled">AutomaticUpdatesEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetId">AvailabilitySetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabled">BypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.capacityReservationGroupId">CapacityReservationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.computerName">ComputerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.customData">CustomData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostGroupId">DedicatedHostGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostId">DedicatedHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.diskControllerType">DiskControllerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.edgeZone">EdgeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdates">EnableAutomaticUpdates</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicy">EvictionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudget">ExtensionsTimeBudget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.hotpatchingEnabled">HotpatchingEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPrice">MaxBidPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osManagedDiskId">OsManagedDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchAssessmentMode">PatchAssessmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchMode">PatchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.platformFaultDomain">PlatformFaultDomain</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.rebootSetting">RebootSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secureBootEnabled">SecureBootEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.size">Size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageId">SourceImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.userData">UserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetId">VirtualMachineScaleSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vmAgentPlatformUpdatesEnabled">VmAgentPlatformUpdatesEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vtpmEnabled">VtpmEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AdditionalCapabilities`<sup>Required</sup> <a name="AdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilities"></a>

```csharp
public WindowsVirtualMachineAdditionalCapabilitiesOutputReference AdditionalCapabilities { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference">WindowsVirtualMachineAdditionalCapabilitiesOutputReference</a>

---

##### `AdditionalUnattendContent`<sup>Required</sup> <a name="AdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContent"></a>

```csharp
public WindowsVirtualMachineAdditionalUnattendContentList AdditionalUnattendContent { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList">WindowsVirtualMachineAdditionalUnattendContentList</a>

---

##### `BootDiagnostics`<sup>Required</sup> <a name="BootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnostics"></a>

```csharp
public WindowsVirtualMachineBootDiagnosticsOutputReference BootDiagnostics { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference">WindowsVirtualMachineBootDiagnosticsOutputReference</a>

---

##### `GalleryApplication`<sup>Required</sup> <a name="GalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.galleryApplication"></a>

```csharp
public WindowsVirtualMachineGalleryApplicationList GalleryApplication { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList">WindowsVirtualMachineGalleryApplicationList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.identity"></a>

```csharp
public WindowsVirtualMachineIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference">WindowsVirtualMachineIdentityOutputReference</a>

---

##### `OsDisk`<sup>Required</sup> <a name="OsDisk" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osDisk"></a>

```csharp
public WindowsVirtualMachineOsDiskOutputReference OsDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference">WindowsVirtualMachineOsDiskOutputReference</a>

---

##### `OsImageNotification`<sup>Required</sup> <a name="OsImageNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osImageNotification"></a>

```csharp
public WindowsVirtualMachineOsImageNotificationOutputReference OsImageNotification { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference">WindowsVirtualMachineOsImageNotificationOutputReference</a>

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.plan"></a>

```csharp
public WindowsVirtualMachinePlanOutputReference Plan { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference">WindowsVirtualMachinePlanOutputReference</a>

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `PrivateIpAddresses`<sup>Required</sup> <a name="PrivateIpAddresses" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddresses"></a>

```csharp
public string[] PrivateIpAddresses { get; }
```

- *Type:* string[]

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddress"></a>

```csharp
public string PublicIpAddress { get; }
```

- *Type:* string

---

##### `PublicIpAddresses`<sup>Required</sup> <a name="PublicIpAddresses" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddresses"></a>

```csharp
public string[] PublicIpAddresses { get; }
```

- *Type:* string[]

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secret"></a>

```csharp
public WindowsVirtualMachineSecretList Secret { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList">WindowsVirtualMachineSecretList</a>

---

##### `SourceImageReference`<sup>Required</sup> <a name="SourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReference"></a>

```csharp
public WindowsVirtualMachineSourceImageReferenceOutputReference SourceImageReference { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference">WindowsVirtualMachineSourceImageReferenceOutputReference</a>

---

##### `TerminationNotification`<sup>Required</sup> <a name="TerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terminationNotification"></a>

```csharp
public WindowsVirtualMachineTerminationNotificationOutputReference TerminationNotification { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference">WindowsVirtualMachineTerminationNotificationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timeouts"></a>

```csharp
public WindowsVirtualMachineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference">WindowsVirtualMachineTimeoutsOutputReference</a>

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; }
```

- *Type:* string

---

##### `WinrmListener`<sup>Required</sup> <a name="WinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListener"></a>

```csharp
public WindowsVirtualMachineWinrmListenerList WinrmListener { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList">WindowsVirtualMachineWinrmListenerList</a>

---

##### `AdditionalCapabilitiesInput`<sup>Optional</sup> <a name="AdditionalCapabilitiesInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilitiesInput"></a>

```csharp
public WindowsVirtualMachineAdditionalCapabilities AdditionalCapabilitiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

---

##### `AdditionalUnattendContentInput`<sup>Optional</sup> <a name="AdditionalUnattendContentInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContentInput"></a>

```csharp
public IResolvable|WindowsVirtualMachineAdditionalUnattendContent[] AdditionalUnattendContentInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsernameInput"></a>

```csharp
public string AdminUsernameInput { get; }
```

- *Type:* string

---

##### `AllowExtensionOperationsInput`<sup>Optional</sup> <a name="AllowExtensionOperationsInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperationsInput"></a>

```csharp
public bool|IResolvable AllowExtensionOperationsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AutomaticUpdatesEnabledInput`<sup>Optional</sup> <a name="AutomaticUpdatesEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.automaticUpdatesEnabledInput"></a>

```csharp
public bool|IResolvable AutomaticUpdatesEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AvailabilitySetIdInput`<sup>Optional</sup> <a name="AvailabilitySetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetIdInput"></a>

```csharp
public string AvailabilitySetIdInput { get; }
```

- *Type:* string

---

##### `BootDiagnosticsInput`<sup>Optional</sup> <a name="BootDiagnosticsInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnosticsInput"></a>

```csharp
public WindowsVirtualMachineBootDiagnostics BootDiagnosticsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

---

##### `BypassPlatformSafetyChecksOnUserScheduleEnabledInput`<sup>Optional</sup> <a name="BypassPlatformSafetyChecksOnUserScheduleEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabledInput"></a>

```csharp
public bool|IResolvable BypassPlatformSafetyChecksOnUserScheduleEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `CapacityReservationGroupIdInput`<sup>Optional</sup> <a name="CapacityReservationGroupIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.capacityReservationGroupIdInput"></a>

```csharp
public string CapacityReservationGroupIdInput { get; }
```

- *Type:* string

---

##### `ComputerNameInput`<sup>Optional</sup> <a name="ComputerNameInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.computerNameInput"></a>

```csharp
public string ComputerNameInput { get; }
```

- *Type:* string

---

##### `CustomDataInput`<sup>Optional</sup> <a name="CustomDataInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.customDataInput"></a>

```csharp
public string CustomDataInput { get; }
```

- *Type:* string

---

##### `DedicatedHostGroupIdInput`<sup>Optional</sup> <a name="DedicatedHostGroupIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostGroupIdInput"></a>

```csharp
public string DedicatedHostGroupIdInput { get; }
```

- *Type:* string

---

##### `DedicatedHostIdInput`<sup>Optional</sup> <a name="DedicatedHostIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostIdInput"></a>

```csharp
public string DedicatedHostIdInput { get; }
```

- *Type:* string

---

##### `DiskControllerTypeInput`<sup>Optional</sup> <a name="DiskControllerTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.diskControllerTypeInput"></a>

```csharp
public string DiskControllerTypeInput { get; }
```

- *Type:* string

---

##### `EdgeZoneInput`<sup>Optional</sup> <a name="EdgeZoneInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.edgeZoneInput"></a>

```csharp
public string EdgeZoneInput { get; }
```

- *Type:* string

---

##### `EnableAutomaticUpdatesInput`<sup>Optional</sup> <a name="EnableAutomaticUpdatesInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdatesInput"></a>

```csharp
public bool|IResolvable EnableAutomaticUpdatesInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EncryptionAtHostEnabledInput`<sup>Optional</sup> <a name="EncryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabledInput"></a>

```csharp
public bool|IResolvable EncryptionAtHostEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EvictionPolicyInput`<sup>Optional</sup> <a name="EvictionPolicyInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicyInput"></a>

```csharp
public string EvictionPolicyInput { get; }
```

- *Type:* string

---

##### `ExtensionsTimeBudgetInput`<sup>Optional</sup> <a name="ExtensionsTimeBudgetInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudgetInput"></a>

```csharp
public string ExtensionsTimeBudgetInput { get; }
```

- *Type:* string

---

##### `GalleryApplicationInput`<sup>Optional</sup> <a name="GalleryApplicationInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.galleryApplicationInput"></a>

```csharp
public IResolvable|WindowsVirtualMachineGalleryApplication[] GalleryApplicationInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>[]

---

##### `HotpatchingEnabledInput`<sup>Optional</sup> <a name="HotpatchingEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.hotpatchingEnabledInput"></a>

```csharp
public bool|IResolvable HotpatchingEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.identityInput"></a>

```csharp
public WindowsVirtualMachineIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.licenseTypeInput"></a>

```csharp
public string LicenseTypeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaxBidPriceInput`<sup>Optional</sup> <a name="MaxBidPriceInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPriceInput"></a>

```csharp
public double MaxBidPriceInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIdsInput`<sup>Optional</sup> <a name="NetworkInterfaceIdsInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIdsInput"></a>

```csharp
public string[] NetworkInterfaceIdsInput { get; }
```

- *Type:* string[]

---

##### `OsDiskInput`<sup>Optional</sup> <a name="OsDiskInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osDiskInput"></a>

```csharp
public WindowsVirtualMachineOsDisk OsDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

---

##### `OsImageNotificationInput`<sup>Optional</sup> <a name="OsImageNotificationInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osImageNotificationInput"></a>

```csharp
public WindowsVirtualMachineOsImageNotification OsImageNotificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a>

---

##### `OsManagedDiskIdInput`<sup>Optional</sup> <a name="OsManagedDiskIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osManagedDiskIdInput"></a>

```csharp
public string OsManagedDiskIdInput { get; }
```

- *Type:* string

---

##### `PatchAssessmentModeInput`<sup>Optional</sup> <a name="PatchAssessmentModeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchAssessmentModeInput"></a>

```csharp
public string PatchAssessmentModeInput { get; }
```

- *Type:* string

---

##### `PatchModeInput`<sup>Optional</sup> <a name="PatchModeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchModeInput"></a>

```csharp
public string PatchModeInput { get; }
```

- *Type:* string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.planInput"></a>

```csharp
public WindowsVirtualMachinePlan PlanInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

---

##### `PlatformFaultDomainInput`<sup>Optional</sup> <a name="PlatformFaultDomainInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.platformFaultDomainInput"></a>

```csharp
public double PlatformFaultDomainInput { get; }
```

- *Type:* double

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.priorityInput"></a>

```csharp
public string PriorityInput { get; }
```

- *Type:* string

---

##### `ProvisionVmAgentInput`<sup>Optional</sup> <a name="ProvisionVmAgentInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgentInput"></a>

```csharp
public bool|IResolvable ProvisionVmAgentInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ProximityPlacementGroupIdInput`<sup>Optional</sup> <a name="ProximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.proximityPlacementGroupIdInput"></a>

```csharp
public string ProximityPlacementGroupIdInput { get; }
```

- *Type:* string

---

##### `RebootSettingInput`<sup>Optional</sup> <a name="RebootSettingInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.rebootSettingInput"></a>

```csharp
public string RebootSettingInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secretInput"></a>

```csharp
public IResolvable|WindowsVirtualMachineSecret[] SecretInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]

---

##### `SecureBootEnabledInput`<sup>Optional</sup> <a name="SecureBootEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secureBootEnabledInput"></a>

```csharp
public bool|IResolvable SecureBootEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sizeInput"></a>

```csharp
public string SizeInput { get; }
```

- *Type:* string

---

##### `SourceImageIdInput`<sup>Optional</sup> <a name="SourceImageIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageIdInput"></a>

```csharp
public string SourceImageIdInput { get; }
```

- *Type:* string

---

##### `SourceImageReferenceInput`<sup>Optional</sup> <a name="SourceImageReferenceInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReferenceInput"></a>

```csharp
public WindowsVirtualMachineSourceImageReference SourceImageReferenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TerminationNotificationInput`<sup>Optional</sup> <a name="TerminationNotificationInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terminationNotificationInput"></a>

```csharp
public WindowsVirtualMachineTerminationNotification TerminationNotificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timeoutsInput"></a>

```csharp
public IResolvable|WindowsVirtualMachineTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `VirtualMachineScaleSetIdInput`<sup>Optional</sup> <a name="VirtualMachineScaleSetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetIdInput"></a>

```csharp
public string VirtualMachineScaleSetIdInput { get; }
```

- *Type:* string

---

##### `VmAgentPlatformUpdatesEnabledInput`<sup>Optional</sup> <a name="VmAgentPlatformUpdatesEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vmAgentPlatformUpdatesEnabledInput"></a>

```csharp
public bool|IResolvable VmAgentPlatformUpdatesEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `VtpmEnabledInput`<sup>Optional</sup> <a name="VtpmEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vtpmEnabledInput"></a>

```csharp
public bool|IResolvable VtpmEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `WinrmListenerInput`<sup>Optional</sup> <a name="WinrmListenerInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListenerInput"></a>

```csharp
public IResolvable|WindowsVirtualMachineWinrmListener[] WinrmListenerInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `AllowExtensionOperations`<sup>Required</sup> <a name="AllowExtensionOperations" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperations"></a>

```csharp
public bool|IResolvable AllowExtensionOperations { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AutomaticUpdatesEnabled`<sup>Required</sup> <a name="AutomaticUpdatesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.automaticUpdatesEnabled"></a>

```csharp
public bool|IResolvable AutomaticUpdatesEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AvailabilitySetId`<sup>Required</sup> <a name="AvailabilitySetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetId"></a>

```csharp
public string AvailabilitySetId { get; }
```

- *Type:* string

---

##### `BypassPlatformSafetyChecksOnUserScheduleEnabled`<sup>Required</sup> <a name="BypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

```csharp
public bool|IResolvable BypassPlatformSafetyChecksOnUserScheduleEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `CapacityReservationGroupId`<sup>Required</sup> <a name="CapacityReservationGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.capacityReservationGroupId"></a>

```csharp
public string CapacityReservationGroupId { get; }
```

- *Type:* string

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.computerName"></a>

```csharp
public string ComputerName { get; }
```

- *Type:* string

---

##### `CustomData`<sup>Required</sup> <a name="CustomData" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.customData"></a>

```csharp
public string CustomData { get; }
```

- *Type:* string

---

##### `DedicatedHostGroupId`<sup>Required</sup> <a name="DedicatedHostGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostGroupId"></a>

```csharp
public string DedicatedHostGroupId { get; }
```

- *Type:* string

---

##### `DedicatedHostId`<sup>Required</sup> <a name="DedicatedHostId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostId"></a>

```csharp
public string DedicatedHostId { get; }
```

- *Type:* string

---

##### `DiskControllerType`<sup>Required</sup> <a name="DiskControllerType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.diskControllerType"></a>

```csharp
public string DiskControllerType { get; }
```

- *Type:* string

---

##### `EdgeZone`<sup>Required</sup> <a name="EdgeZone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.edgeZone"></a>

```csharp
public string EdgeZone { get; }
```

- *Type:* string

---

##### `EnableAutomaticUpdates`<sup>Required</sup> <a name="EnableAutomaticUpdates" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdates"></a>

```csharp
public bool|IResolvable EnableAutomaticUpdates { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EncryptionAtHostEnabled`<sup>Required</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabled"></a>

```csharp
public bool|IResolvable EncryptionAtHostEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EvictionPolicy`<sup>Required</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicy"></a>

```csharp
public string EvictionPolicy { get; }
```

- *Type:* string

---

##### `ExtensionsTimeBudget`<sup>Required</sup> <a name="ExtensionsTimeBudget" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudget"></a>

```csharp
public string ExtensionsTimeBudget { get; }
```

- *Type:* string

---

##### `HotpatchingEnabled`<sup>Required</sup> <a name="HotpatchingEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.hotpatchingEnabled"></a>

```csharp
public bool|IResolvable HotpatchingEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaxBidPrice`<sup>Required</sup> <a name="MaxBidPrice" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPrice"></a>

```csharp
public double MaxBidPrice { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; }
```

- *Type:* string[]

---

##### `OsManagedDiskId`<sup>Required</sup> <a name="OsManagedDiskId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osManagedDiskId"></a>

```csharp
public string OsManagedDiskId { get; }
```

- *Type:* string

---

##### `PatchAssessmentMode`<sup>Required</sup> <a name="PatchAssessmentMode" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchAssessmentMode"></a>

```csharp
public string PatchAssessmentMode { get; }
```

- *Type:* string

---

##### `PatchMode`<sup>Required</sup> <a name="PatchMode" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchMode"></a>

```csharp
public string PatchMode { get; }
```

- *Type:* string

---

##### `PlatformFaultDomain`<sup>Required</sup> <a name="PlatformFaultDomain" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.platformFaultDomain"></a>

```csharp
public double PlatformFaultDomain { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `ProvisionVmAgent`<sup>Required</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgent"></a>

```csharp
public bool|IResolvable ProvisionVmAgent { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ProximityPlacementGroupId`<sup>Required</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.proximityPlacementGroupId"></a>

```csharp
public string ProximityPlacementGroupId { get; }
```

- *Type:* string

---

##### `RebootSetting`<sup>Required</sup> <a name="RebootSetting" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.rebootSetting"></a>

```csharp
public string RebootSetting { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SecureBootEnabled`<sup>Required</sup> <a name="SecureBootEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secureBootEnabled"></a>

```csharp
public bool|IResolvable SecureBootEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.size"></a>

```csharp
public string Size { get; }
```

- *Type:* string

---

##### `SourceImageId`<sup>Required</sup> <a name="SourceImageId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageId"></a>

```csharp
public string SourceImageId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

##### `VirtualMachineScaleSetId`<sup>Required</sup> <a name="VirtualMachineScaleSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetId"></a>

```csharp
public string VirtualMachineScaleSetId { get; }
```

- *Type:* string

---

##### `VmAgentPlatformUpdatesEnabled`<sup>Required</sup> <a name="VmAgentPlatformUpdatesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vmAgentPlatformUpdatesEnabled"></a>

```csharp
public bool|IResolvable VmAgentPlatformUpdatesEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `VtpmEnabled`<sup>Required</sup> <a name="VtpmEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vtpmEnabled"></a>

```csharp
public bool|IResolvable VtpmEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WindowsVirtualMachineAdditionalCapabilities <a name="WindowsVirtualMachineAdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineAdditionalCapabilities {
    bool|IResolvable HibernationEnabled = null,
    bool|IResolvable UltraSsdEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.hibernationEnabled">HibernationEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#hibernation_enabled WindowsVirtualMachine#hibernation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled">UltraSsdEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#ultra_ssd_enabled WindowsVirtualMachine#ultra_ssd_enabled}. |

---

##### `HibernationEnabled`<sup>Optional</sup> <a name="HibernationEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.hibernationEnabled"></a>

```csharp
public bool|IResolvable HibernationEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#hibernation_enabled WindowsVirtualMachine#hibernation_enabled}.

---

##### `UltraSsdEnabled`<sup>Optional</sup> <a name="UltraSsdEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled"></a>

```csharp
public bool|IResolvable UltraSsdEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#ultra_ssd_enabled WindowsVirtualMachine#ultra_ssd_enabled}.

---

### WindowsVirtualMachineAdditionalUnattendContent <a name="WindowsVirtualMachineAdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineAdditionalUnattendContent {
    string Content,
    string Setting
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#content WindowsVirtualMachine#content}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.setting">Setting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#setting WindowsVirtualMachine#setting}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#content WindowsVirtualMachine#content}.

---

##### `Setting`<sup>Required</sup> <a name="Setting" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.setting"></a>

```csharp
public string Setting { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#setting WindowsVirtualMachine#setting}.

---

### WindowsVirtualMachineBootDiagnostics <a name="WindowsVirtualMachineBootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineBootDiagnostics {
    string StorageAccountUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics.property.storageAccountUri">StorageAccountUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#storage_account_uri WindowsVirtualMachine#storage_account_uri}. |

---

##### `StorageAccountUri`<sup>Optional</sup> <a name="StorageAccountUri" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics.property.storageAccountUri"></a>

```csharp
public string StorageAccountUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#storage_account_uri WindowsVirtualMachine#storage_account_uri}.

---

### WindowsVirtualMachineConfig <a name="WindowsVirtualMachineConfig" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string[] NetworkInterfaceIds,
    WindowsVirtualMachineOsDisk OsDisk,
    string ResourceGroupName,
    string Size,
    WindowsVirtualMachineAdditionalCapabilities AdditionalCapabilities = null,
    IResolvable|WindowsVirtualMachineAdditionalUnattendContent[] AdditionalUnattendContent = null,
    string AdminPassword = null,
    string AdminUsername = null,
    bool|IResolvable AllowExtensionOperations = null,
    bool|IResolvable AutomaticUpdatesEnabled = null,
    string AvailabilitySetId = null,
    WindowsVirtualMachineBootDiagnostics BootDiagnostics = null,
    bool|IResolvable BypassPlatformSafetyChecksOnUserScheduleEnabled = null,
    string CapacityReservationGroupId = null,
    string ComputerName = null,
    string CustomData = null,
    string DedicatedHostGroupId = null,
    string DedicatedHostId = null,
    string DiskControllerType = null,
    string EdgeZone = null,
    bool|IResolvable EnableAutomaticUpdates = null,
    bool|IResolvable EncryptionAtHostEnabled = null,
    string EvictionPolicy = null,
    string ExtensionsTimeBudget = null,
    IResolvable|WindowsVirtualMachineGalleryApplication[] GalleryApplication = null,
    bool|IResolvable HotpatchingEnabled = null,
    string Id = null,
    WindowsVirtualMachineIdentity Identity = null,
    string LicenseType = null,
    double MaxBidPrice = null,
    WindowsVirtualMachineOsImageNotification OsImageNotification = null,
    string OsManagedDiskId = null,
    string PatchAssessmentMode = null,
    string PatchMode = null,
    WindowsVirtualMachinePlan Plan = null,
    double PlatformFaultDomain = null,
    string Priority = null,
    bool|IResolvable ProvisionVmAgent = null,
    string ProximityPlacementGroupId = null,
    string RebootSetting = null,
    IResolvable|WindowsVirtualMachineSecret[] Secret = null,
    bool|IResolvable SecureBootEnabled = null,
    string SourceImageId = null,
    WindowsVirtualMachineSourceImageReference SourceImageReference = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    WindowsVirtualMachineTerminationNotification TerminationNotification = null,
    WindowsVirtualMachineTimeouts Timeouts = null,
    string Timezone = null,
    string UserData = null,
    string VirtualMachineScaleSetId = null,
    bool|IResolvable VmAgentPlatformUpdatesEnabled = null,
    bool|IResolvable VtpmEnabled = null,
    IResolvable|WindowsVirtualMachineWinrmListener[] WinrmListener = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#location WindowsVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#network_interface_ids WindowsVirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#resource_group_name WindowsVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.size">Size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#size WindowsVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalCapabilities">AdditionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalUnattendContent">AdditionalUnattendContent</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]</code> | additional_unattend_content block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#admin_password WindowsVirtualMachine#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminUsername">AdminUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#admin_username WindowsVirtualMachine#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.allowExtensionOperations">AllowExtensionOperations</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#allow_extension_operations WindowsVirtualMachine#allow_extension_operations}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.automaticUpdatesEnabled">AutomaticUpdatesEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#automatic_updates_enabled WindowsVirtualMachine#automatic_updates_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.availabilitySetId">AvailabilitySetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#availability_set_id WindowsVirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bootDiagnostics">BootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bypassPlatformSafetyChecksOnUserScheduleEnabled">BypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#bypass_platform_safety_checks_on_user_schedule_enabled WindowsVirtualMachine#bypass_platform_safety_checks_on_user_schedule_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.capacityReservationGroupId">CapacityReservationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#capacity_reservation_group_id WindowsVirtualMachine#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.computerName">ComputerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#computer_name WindowsVirtualMachine#computer_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.customData">CustomData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#custom_data WindowsVirtualMachine#custom_data}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dedicatedHostGroupId">DedicatedHostGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#dedicated_host_group_id WindowsVirtualMachine#dedicated_host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dedicatedHostId">DedicatedHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#dedicated_host_id WindowsVirtualMachine#dedicated_host_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.diskControllerType">DiskControllerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#disk_controller_type WindowsVirtualMachine#disk_controller_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.edgeZone">EdgeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#edge_zone WindowsVirtualMachine#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.enableAutomaticUpdates">EnableAutomaticUpdates</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#enable_automatic_updates WindowsVirtualMachine#enable_automatic_updates}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#encryption_at_host_enabled WindowsVirtualMachine#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.evictionPolicy">EvictionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#eviction_policy WindowsVirtualMachine#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.extensionsTimeBudget">ExtensionsTimeBudget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#extensions_time_budget WindowsVirtualMachine#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.galleryApplication">GalleryApplication</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>[]</code> | gallery_application block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.hotpatchingEnabled">HotpatchingEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#hotpatching_enabled WindowsVirtualMachine#hotpatching_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#id WindowsVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.licenseType">LicenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#license_type WindowsVirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.maxBidPrice">MaxBidPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#max_bid_price WindowsVirtualMachine#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osImageNotification">OsImageNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a></code> | os_image_notification block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osManagedDiskId">OsManagedDiskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#os_managed_disk_id WindowsVirtualMachine#os_managed_disk_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchAssessmentMode">PatchAssessmentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#patch_assessment_mode WindowsVirtualMachine#patch_assessment_mode}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchMode">PatchMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#patch_mode WindowsVirtualMachine#patch_mode}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.platformFaultDomain">PlatformFaultDomain</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#platform_fault_domain WindowsVirtualMachine#platform_fault_domain}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.priority">Priority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#priority WindowsVirtualMachine#priority}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#provision_vm_agent WindowsVirtualMachine#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#proximity_placement_group_id WindowsVirtualMachine#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.rebootSetting">RebootSetting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#reboot_setting WindowsVirtualMachine#reboot_setting}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secret">Secret</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secureBootEnabled">SecureBootEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#secure_boot_enabled WindowsVirtualMachine#secure_boot_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageId">SourceImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#source_image_id WindowsVirtualMachine#source_image_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageReference">SourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#tags WindowsVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.terminationNotification">TerminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a></code> | termination_notification block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#timezone WindowsVirtualMachine#timezone}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.userData">UserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#user_data WindowsVirtualMachine#user_data}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.virtualMachineScaleSetId">VirtualMachineScaleSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#virtual_machine_scale_set_id WindowsVirtualMachine#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.vmAgentPlatformUpdatesEnabled">VmAgentPlatformUpdatesEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#vm_agent_platform_updates_enabled WindowsVirtualMachine#vm_agent_platform_updates_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.vtpmEnabled">VtpmEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#vtpm_enabled WindowsVirtualMachine#vtpm_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.winrmListener">WinrmListener</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]</code> | winrm_listener block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.zone">Zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#zone WindowsVirtualMachine#zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#location WindowsVirtualMachine#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#network_interface_ids WindowsVirtualMachine#network_interface_ids}.

---

##### `OsDisk`<sup>Required</sup> <a name="OsDisk" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osDisk"></a>

```csharp
public WindowsVirtualMachineOsDisk OsDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#os_disk WindowsVirtualMachine#os_disk}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#resource_group_name WindowsVirtualMachine#resource_group_name}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.size"></a>

```csharp
public string Size { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#size WindowsVirtualMachine#size}.

---

##### `AdditionalCapabilities`<sup>Optional</sup> <a name="AdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalCapabilities"></a>

```csharp
public WindowsVirtualMachineAdditionalCapabilities AdditionalCapabilities { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#additional_capabilities WindowsVirtualMachine#additional_capabilities}

---

##### `AdditionalUnattendContent`<sup>Optional</sup> <a name="AdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalUnattendContent"></a>

```csharp
public IResolvable|WindowsVirtualMachineAdditionalUnattendContent[] AdditionalUnattendContent { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]

additional_unattend_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#additional_unattend_content WindowsVirtualMachine#additional_unattend_content}

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#admin_password WindowsVirtualMachine#admin_password}.

---

##### `AdminUsername`<sup>Optional</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminUsername"></a>

```csharp
public string AdminUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#admin_username WindowsVirtualMachine#admin_username}.

---

##### `AllowExtensionOperations`<sup>Optional</sup> <a name="AllowExtensionOperations" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.allowExtensionOperations"></a>

```csharp
public bool|IResolvable AllowExtensionOperations { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#allow_extension_operations WindowsVirtualMachine#allow_extension_operations}.

---

##### `AutomaticUpdatesEnabled`<sup>Optional</sup> <a name="AutomaticUpdatesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.automaticUpdatesEnabled"></a>

```csharp
public bool|IResolvable AutomaticUpdatesEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#automatic_updates_enabled WindowsVirtualMachine#automatic_updates_enabled}.

---

##### `AvailabilitySetId`<sup>Optional</sup> <a name="AvailabilitySetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.availabilitySetId"></a>

```csharp
public string AvailabilitySetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#availability_set_id WindowsVirtualMachine#availability_set_id}.

---

##### `BootDiagnostics`<sup>Optional</sup> <a name="BootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bootDiagnostics"></a>

```csharp
public WindowsVirtualMachineBootDiagnostics BootDiagnostics { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#boot_diagnostics WindowsVirtualMachine#boot_diagnostics}

---

##### `BypassPlatformSafetyChecksOnUserScheduleEnabled`<sup>Optional</sup> <a name="BypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

```csharp
public bool|IResolvable BypassPlatformSafetyChecksOnUserScheduleEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#bypass_platform_safety_checks_on_user_schedule_enabled WindowsVirtualMachine#bypass_platform_safety_checks_on_user_schedule_enabled}.

---

##### `CapacityReservationGroupId`<sup>Optional</sup> <a name="CapacityReservationGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.capacityReservationGroupId"></a>

```csharp
public string CapacityReservationGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#capacity_reservation_group_id WindowsVirtualMachine#capacity_reservation_group_id}.

---

##### `ComputerName`<sup>Optional</sup> <a name="ComputerName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.computerName"></a>

```csharp
public string ComputerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#computer_name WindowsVirtualMachine#computer_name}.

---

##### `CustomData`<sup>Optional</sup> <a name="CustomData" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.customData"></a>

```csharp
public string CustomData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#custom_data WindowsVirtualMachine#custom_data}.

---

##### `DedicatedHostGroupId`<sup>Optional</sup> <a name="DedicatedHostGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dedicatedHostGroupId"></a>

```csharp
public string DedicatedHostGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#dedicated_host_group_id WindowsVirtualMachine#dedicated_host_group_id}.

---

##### `DedicatedHostId`<sup>Optional</sup> <a name="DedicatedHostId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dedicatedHostId"></a>

```csharp
public string DedicatedHostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#dedicated_host_id WindowsVirtualMachine#dedicated_host_id}.

---

##### `DiskControllerType`<sup>Optional</sup> <a name="DiskControllerType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.diskControllerType"></a>

```csharp
public string DiskControllerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#disk_controller_type WindowsVirtualMachine#disk_controller_type}.

---

##### `EdgeZone`<sup>Optional</sup> <a name="EdgeZone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.edgeZone"></a>

```csharp
public string EdgeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#edge_zone WindowsVirtualMachine#edge_zone}.

---

##### `EnableAutomaticUpdates`<sup>Optional</sup> <a name="EnableAutomaticUpdates" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.enableAutomaticUpdates"></a>

```csharp
public bool|IResolvable EnableAutomaticUpdates { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#enable_automatic_updates WindowsVirtualMachine#enable_automatic_updates}.

---

##### `EncryptionAtHostEnabled`<sup>Optional</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.encryptionAtHostEnabled"></a>

```csharp
public bool|IResolvable EncryptionAtHostEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#encryption_at_host_enabled WindowsVirtualMachine#encryption_at_host_enabled}.

---

##### `EvictionPolicy`<sup>Optional</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.evictionPolicy"></a>

```csharp
public string EvictionPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#eviction_policy WindowsVirtualMachine#eviction_policy}.

---

##### `ExtensionsTimeBudget`<sup>Optional</sup> <a name="ExtensionsTimeBudget" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.extensionsTimeBudget"></a>

```csharp
public string ExtensionsTimeBudget { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#extensions_time_budget WindowsVirtualMachine#extensions_time_budget}.

---

##### `GalleryApplication`<sup>Optional</sup> <a name="GalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.galleryApplication"></a>

```csharp
public IResolvable|WindowsVirtualMachineGalleryApplication[] GalleryApplication { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>[]

gallery_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#gallery_application WindowsVirtualMachine#gallery_application}

---

##### `HotpatchingEnabled`<sup>Optional</sup> <a name="HotpatchingEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.hotpatchingEnabled"></a>

```csharp
public bool|IResolvable HotpatchingEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#hotpatching_enabled WindowsVirtualMachine#hotpatching_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#id WindowsVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.identity"></a>

```csharp
public WindowsVirtualMachineIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#identity WindowsVirtualMachine#identity}

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.licenseType"></a>

```csharp
public string LicenseType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#license_type WindowsVirtualMachine#license_type}.

---

##### `MaxBidPrice`<sup>Optional</sup> <a name="MaxBidPrice" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.maxBidPrice"></a>

```csharp
public double MaxBidPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#max_bid_price WindowsVirtualMachine#max_bid_price}.

---

##### `OsImageNotification`<sup>Optional</sup> <a name="OsImageNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osImageNotification"></a>

```csharp
public WindowsVirtualMachineOsImageNotification OsImageNotification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a>

os_image_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#os_image_notification WindowsVirtualMachine#os_image_notification}

---

##### `OsManagedDiskId`<sup>Optional</sup> <a name="OsManagedDiskId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osManagedDiskId"></a>

```csharp
public string OsManagedDiskId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#os_managed_disk_id WindowsVirtualMachine#os_managed_disk_id}.

---

##### `PatchAssessmentMode`<sup>Optional</sup> <a name="PatchAssessmentMode" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchAssessmentMode"></a>

```csharp
public string PatchAssessmentMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#patch_assessment_mode WindowsVirtualMachine#patch_assessment_mode}.

---

##### `PatchMode`<sup>Optional</sup> <a name="PatchMode" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchMode"></a>

```csharp
public string PatchMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#patch_mode WindowsVirtualMachine#patch_mode}.

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.plan"></a>

```csharp
public WindowsVirtualMachinePlan Plan { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#plan WindowsVirtualMachine#plan}

---

##### `PlatformFaultDomain`<sup>Optional</sup> <a name="PlatformFaultDomain" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.platformFaultDomain"></a>

```csharp
public double PlatformFaultDomain { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#platform_fault_domain WindowsVirtualMachine#platform_fault_domain}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.priority"></a>

```csharp
public string Priority { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#priority WindowsVirtualMachine#priority}.

---

##### `ProvisionVmAgent`<sup>Optional</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisionVmAgent"></a>

```csharp
public bool|IResolvable ProvisionVmAgent { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#provision_vm_agent WindowsVirtualMachine#provision_vm_agent}.

---

##### `ProximityPlacementGroupId`<sup>Optional</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.proximityPlacementGroupId"></a>

```csharp
public string ProximityPlacementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#proximity_placement_group_id WindowsVirtualMachine#proximity_placement_group_id}.

---

##### `RebootSetting`<sup>Optional</sup> <a name="RebootSetting" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.rebootSetting"></a>

```csharp
public string RebootSetting { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#reboot_setting WindowsVirtualMachine#reboot_setting}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secret"></a>

```csharp
public IResolvable|WindowsVirtualMachineSecret[] Secret { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#secret WindowsVirtualMachine#secret}

---

##### `SecureBootEnabled`<sup>Optional</sup> <a name="SecureBootEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secureBootEnabled"></a>

```csharp
public bool|IResolvable SecureBootEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#secure_boot_enabled WindowsVirtualMachine#secure_boot_enabled}.

---

##### `SourceImageId`<sup>Optional</sup> <a name="SourceImageId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageId"></a>

```csharp
public string SourceImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#source_image_id WindowsVirtualMachine#source_image_id}.

---

##### `SourceImageReference`<sup>Optional</sup> <a name="SourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageReference"></a>

```csharp
public WindowsVirtualMachineSourceImageReference SourceImageReference { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#source_image_reference WindowsVirtualMachine#source_image_reference}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#tags WindowsVirtualMachine#tags}.

---

##### `TerminationNotification`<sup>Optional</sup> <a name="TerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.terminationNotification"></a>

```csharp
public WindowsVirtualMachineTerminationNotification TerminationNotification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a>

termination_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#termination_notification WindowsVirtualMachine#termination_notification}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timeouts"></a>

```csharp
public WindowsVirtualMachineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#timeouts WindowsVirtualMachine#timeouts}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#timezone WindowsVirtualMachine#timezone}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#user_data WindowsVirtualMachine#user_data}.

---

##### `VirtualMachineScaleSetId`<sup>Optional</sup> <a name="VirtualMachineScaleSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.virtualMachineScaleSetId"></a>

```csharp
public string VirtualMachineScaleSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#virtual_machine_scale_set_id WindowsVirtualMachine#virtual_machine_scale_set_id}.

---

##### `VmAgentPlatformUpdatesEnabled`<sup>Optional</sup> <a name="VmAgentPlatformUpdatesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.vmAgentPlatformUpdatesEnabled"></a>

```csharp
public bool|IResolvable VmAgentPlatformUpdatesEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#vm_agent_platform_updates_enabled WindowsVirtualMachine#vm_agent_platform_updates_enabled}.

---

##### `VtpmEnabled`<sup>Optional</sup> <a name="VtpmEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.vtpmEnabled"></a>

```csharp
public bool|IResolvable VtpmEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#vtpm_enabled WindowsVirtualMachine#vtpm_enabled}.

---

##### `WinrmListener`<sup>Optional</sup> <a name="WinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.winrmListener"></a>

```csharp
public IResolvable|WindowsVirtualMachineWinrmListener[] WinrmListener { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]

winrm_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#winrm_listener WindowsVirtualMachine#winrm_listener}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#zone WindowsVirtualMachine#zone}.

---

### WindowsVirtualMachineGalleryApplication <a name="WindowsVirtualMachineGalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineGalleryApplication {
    string VersionId,
    bool|IResolvable AutomaticUpgradeEnabled = null,
    string ConfigurationBlobUri = null,
    double Order = null,
    string Tag = null,
    bool|IResolvable TreatFailureAsDeploymentFailureEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.versionId">VersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#version_id WindowsVirtualMachine#version_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.automaticUpgradeEnabled">AutomaticUpgradeEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#automatic_upgrade_enabled WindowsVirtualMachine#automatic_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.configurationBlobUri">ConfigurationBlobUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#configuration_blob_uri WindowsVirtualMachine#configuration_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.order">Order</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#order WindowsVirtualMachine#order}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.tag">Tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#tag WindowsVirtualMachine#tag}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.treatFailureAsDeploymentFailureEnabled">TreatFailureAsDeploymentFailureEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#treat_failure_as_deployment_failure_enabled WindowsVirtualMachine#treat_failure_as_deployment_failure_enabled}. |

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#version_id WindowsVirtualMachine#version_id}.

---

##### `AutomaticUpgradeEnabled`<sup>Optional</sup> <a name="AutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.automaticUpgradeEnabled"></a>

```csharp
public bool|IResolvable AutomaticUpgradeEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#automatic_upgrade_enabled WindowsVirtualMachine#automatic_upgrade_enabled}.

---

##### `ConfigurationBlobUri`<sup>Optional</sup> <a name="ConfigurationBlobUri" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.configurationBlobUri"></a>

```csharp
public string ConfigurationBlobUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#configuration_blob_uri WindowsVirtualMachine#configuration_blob_uri}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#order WindowsVirtualMachine#order}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#tag WindowsVirtualMachine#tag}.

---

##### `TreatFailureAsDeploymentFailureEnabled`<sup>Optional</sup> <a name="TreatFailureAsDeploymentFailureEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.treatFailureAsDeploymentFailureEnabled"></a>

```csharp
public bool|IResolvable TreatFailureAsDeploymentFailureEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#treat_failure_as_deployment_failure_enabled WindowsVirtualMachine#treat_failure_as_deployment_failure_enabled}.

---

### WindowsVirtualMachineIdentity <a name="WindowsVirtualMachineIdentity" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#type WindowsVirtualMachine#type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#identity_ids WindowsVirtualMachine#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#type WindowsVirtualMachine#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#identity_ids WindowsVirtualMachine#identity_ids}.

---

### WindowsVirtualMachineOsDisk <a name="WindowsVirtualMachineOsDisk" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineOsDisk {
    string Caching,
    WindowsVirtualMachineOsDiskDiffDiskSettings DiffDiskSettings = null,
    string DiskEncryptionSetId = null,
    double DiskSizeGb = null,
    string Name = null,
    string SecureVmDiskEncryptionSetId = null,
    string SecurityEncryptionType = null,
    string StorageAccountType = null,
    bool|IResolvable WriteAcceleratorEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.caching">Caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#caching WindowsVirtualMachine#caching}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diffDiskSettings">DiffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a></code> | diff_disk_settings block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#disk_encryption_set_id WindowsVirtualMachine#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#disk_size_gb WindowsVirtualMachine#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.secureVmDiskEncryptionSetId">SecureVmDiskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#secure_vm_disk_encryption_set_id WindowsVirtualMachine#secure_vm_disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.securityEncryptionType">SecurityEncryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#security_encryption_type WindowsVirtualMachine#security_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#storage_account_type WindowsVirtualMachine#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#write_accelerator_enabled WindowsVirtualMachine#write_accelerator_enabled}. |

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.caching"></a>

```csharp
public string Caching { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#caching WindowsVirtualMachine#caching}.

---

##### `DiffDiskSettings`<sup>Optional</sup> <a name="DiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diffDiskSettings"></a>

```csharp
public WindowsVirtualMachineOsDiskDiffDiskSettings DiffDiskSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#diff_disk_settings WindowsVirtualMachine#diff_disk_settings}

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#disk_encryption_set_id WindowsVirtualMachine#disk_encryption_set_id}.

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#disk_size_gb WindowsVirtualMachine#disk_size_gb}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `SecureVmDiskEncryptionSetId`<sup>Optional</sup> <a name="SecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.secureVmDiskEncryptionSetId"></a>

```csharp
public string SecureVmDiskEncryptionSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#secure_vm_disk_encryption_set_id WindowsVirtualMachine#secure_vm_disk_encryption_set_id}.

---

##### `SecurityEncryptionType`<sup>Optional</sup> <a name="SecurityEncryptionType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.securityEncryptionType"></a>

```csharp
public string SecurityEncryptionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#security_encryption_type WindowsVirtualMachine#security_encryption_type}.

---

##### `StorageAccountType`<sup>Optional</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#storage_account_type WindowsVirtualMachine#storage_account_type}.

---

##### `WriteAcceleratorEnabled`<sup>Optional</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.writeAcceleratorEnabled"></a>

```csharp
public bool|IResolvable WriteAcceleratorEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#write_accelerator_enabled WindowsVirtualMachine#write_accelerator_enabled}.

---

### WindowsVirtualMachineOsDiskDiffDiskSettings <a name="WindowsVirtualMachineOsDiskDiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineOsDiskDiffDiskSettings {
    string Option,
    string Placement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.option">Option</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#option WindowsVirtualMachine#option}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.placement">Placement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#placement WindowsVirtualMachine#placement}. |

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.option"></a>

```csharp
public string Option { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#option WindowsVirtualMachine#option}.

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.placement"></a>

```csharp
public string Placement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#placement WindowsVirtualMachine#placement}.

---

### WindowsVirtualMachineOsImageNotification <a name="WindowsVirtualMachineOsImageNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineOsImageNotification {
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification.property.timeout">Timeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#timeout WindowsVirtualMachine#timeout}. |

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#timeout WindowsVirtualMachine#timeout}.

---

### WindowsVirtualMachinePlan <a name="WindowsVirtualMachinePlan" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachinePlan {
    string Name,
    string Product,
    string Publisher
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.product">Product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#product WindowsVirtualMachine#product}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.product"></a>

```csharp
public string Product { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#product WindowsVirtualMachine#product}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}.

---

### WindowsVirtualMachineSecret <a name="WindowsVirtualMachineSecret" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineSecret {
    IResolvable|WindowsVirtualMachineSecretCertificate[] Certificate,
    string KeyVaultId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret.property.certificate">Certificate</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#key_vault_id WindowsVirtualMachine#key_vault_id}. |

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret.property.certificate"></a>

```csharp
public IResolvable|WindowsVirtualMachineSecretCertificate[] Certificate { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#certificate WindowsVirtualMachine#certificate}

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#key_vault_id WindowsVirtualMachine#key_vault_id}.

---

### WindowsVirtualMachineSecretCertificate <a name="WindowsVirtualMachineSecretCertificate" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineSecretCertificate {
    string Store,
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.store">Store</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#store WindowsVirtualMachine#store}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#url WindowsVirtualMachine#url}. |

---

##### `Store`<sup>Required</sup> <a name="Store" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.store"></a>

```csharp
public string Store { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#store WindowsVirtualMachine#store}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#url WindowsVirtualMachine#url}.

---

### WindowsVirtualMachineSourceImageReference <a name="WindowsVirtualMachineSourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineSourceImageReference {
    string Offer,
    string Publisher,
    string Sku,
    string Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.offer">Offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#offer WindowsVirtualMachine#offer}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#sku WindowsVirtualMachine#sku}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#version WindowsVirtualMachine#version}. |

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.offer"></a>

```csharp
public string Offer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#offer WindowsVirtualMachine#offer}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#sku WindowsVirtualMachine#sku}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#version WindowsVirtualMachine#version}.

---

### WindowsVirtualMachineTerminationNotification <a name="WindowsVirtualMachineTerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineTerminationNotification {
    bool|IResolvable Enabled,
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#enabled WindowsVirtualMachine#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification.property.timeout">Timeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#timeout WindowsVirtualMachine#timeout}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#enabled WindowsVirtualMachine#enabled}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#timeout WindowsVirtualMachine#timeout}.

---

### WindowsVirtualMachineTimeouts <a name="WindowsVirtualMachineTimeouts" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#create WindowsVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#delete WindowsVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#read WindowsVirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#update WindowsVirtualMachine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#create WindowsVirtualMachine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#delete WindowsVirtualMachine#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#read WindowsVirtualMachine#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#update WindowsVirtualMachine#update}.

---

### WindowsVirtualMachineWinrmListener <a name="WindowsVirtualMachineWinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineWinrmListener {
    string Protocol,
    string CertificateUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#protocol WindowsVirtualMachine#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.certificateUrl">CertificateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#certificate_url WindowsVirtualMachine#certificate_url}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#protocol WindowsVirtualMachine#protocol}.

---

##### `CertificateUrl`<sup>Optional</sup> <a name="CertificateUrl" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.certificateUrl"></a>

```csharp
public string CertificateUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/windows_virtual_machine#certificate_url WindowsVirtualMachine#certificate_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### WindowsVirtualMachineAdditionalCapabilitiesOutputReference <a name="WindowsVirtualMachineAdditionalCapabilitiesOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineAdditionalCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetHibernationEnabled">ResetHibernationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled">ResetUltraSsdEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHibernationEnabled` <a name="ResetHibernationEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetHibernationEnabled"></a>

```csharp
private void ResetHibernationEnabled()
```

##### `ResetUltraSsdEnabled` <a name="ResetUltraSsdEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled"></a>

```csharp
private void ResetUltraSsdEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabledInput">HibernationEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput">UltraSsdEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabled">HibernationEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled">UltraSsdEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HibernationEnabledInput`<sup>Optional</sup> <a name="HibernationEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabledInput"></a>

```csharp
public bool|IResolvable HibernationEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UltraSsdEnabledInput`<sup>Optional</sup> <a name="UltraSsdEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput"></a>

```csharp
public bool|IResolvable UltraSsdEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `HibernationEnabled`<sup>Required</sup> <a name="HibernationEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabled"></a>

```csharp
public bool|IResolvable HibernationEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UltraSsdEnabled`<sup>Required</sup> <a name="UltraSsdEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled"></a>

```csharp
public bool|IResolvable UltraSsdEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineAdditionalCapabilities InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

---


### WindowsVirtualMachineAdditionalUnattendContentList <a name="WindowsVirtualMachineAdditionalUnattendContentList" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineAdditionalUnattendContentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.get"></a>

```csharp
private WindowsVirtualMachineAdditionalUnattendContentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.internalValue"></a>

```csharp
public IResolvable|WindowsVirtualMachineAdditionalUnattendContent[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]

---


### WindowsVirtualMachineAdditionalUnattendContentOutputReference <a name="WindowsVirtualMachineAdditionalUnattendContentOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineAdditionalUnattendContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.settingInput">SettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.setting">Setting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `SettingInput`<sup>Optional</sup> <a name="SettingInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.settingInput"></a>

```csharp
public string SettingInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Setting`<sup>Required</sup> <a name="Setting" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.setting"></a>

```csharp
public string Setting { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WindowsVirtualMachineAdditionalUnattendContent InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>

---


### WindowsVirtualMachineBootDiagnosticsOutputReference <a name="WindowsVirtualMachineBootDiagnosticsOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineBootDiagnosticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resetStorageAccountUri">ResetStorageAccountUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageAccountUri` <a name="ResetStorageAccountUri" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resetStorageAccountUri"></a>

```csharp
private void ResetStorageAccountUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput">StorageAccountUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri">StorageAccountUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageAccountUriInput`<sup>Optional</sup> <a name="StorageAccountUriInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput"></a>

```csharp
public string StorageAccountUriInput { get; }
```

- *Type:* string

---

##### `StorageAccountUri`<sup>Required</sup> <a name="StorageAccountUri" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri"></a>

```csharp
public string StorageAccountUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineBootDiagnostics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

---


### WindowsVirtualMachineGalleryApplicationList <a name="WindowsVirtualMachineGalleryApplicationList" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineGalleryApplicationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.get"></a>

```csharp
private WindowsVirtualMachineGalleryApplicationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.internalValue"></a>

```csharp
public IResolvable|WindowsVirtualMachineGalleryApplication[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>[]

---


### WindowsVirtualMachineGalleryApplicationOutputReference <a name="WindowsVirtualMachineGalleryApplicationOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineGalleryApplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetAutomaticUpgradeEnabled">ResetAutomaticUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetConfigurationBlobUri">ResetConfigurationBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetTreatFailureAsDeploymentFailureEnabled">ResetTreatFailureAsDeploymentFailureEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutomaticUpgradeEnabled` <a name="ResetAutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetAutomaticUpgradeEnabled"></a>

```csharp
private void ResetAutomaticUpgradeEnabled()
```

##### `ResetConfigurationBlobUri` <a name="ResetConfigurationBlobUri" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetConfigurationBlobUri"></a>

```csharp
private void ResetConfigurationBlobUri()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetTreatFailureAsDeploymentFailureEnabled` <a name="ResetTreatFailureAsDeploymentFailureEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetTreatFailureAsDeploymentFailureEnabled"></a>

```csharp
private void ResetTreatFailureAsDeploymentFailureEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabledInput">AutomaticUpgradeEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUriInput">ConfigurationBlobUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabledInput">TreatFailureAsDeploymentFailureEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabled">AutomaticUpgradeEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUri">ConfigurationBlobUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabled">TreatFailureAsDeploymentFailureEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomaticUpgradeEnabledInput`<sup>Optional</sup> <a name="AutomaticUpgradeEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabledInput"></a>

```csharp
public bool|IResolvable AutomaticUpgradeEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ConfigurationBlobUriInput`<sup>Optional</sup> <a name="ConfigurationBlobUriInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUriInput"></a>

```csharp
public string ConfigurationBlobUriInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `TreatFailureAsDeploymentFailureEnabledInput`<sup>Optional</sup> <a name="TreatFailureAsDeploymentFailureEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabledInput"></a>

```csharp
public bool|IResolvable TreatFailureAsDeploymentFailureEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `AutomaticUpgradeEnabled`<sup>Required</sup> <a name="AutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabled"></a>

```csharp
public bool|IResolvable AutomaticUpgradeEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ConfigurationBlobUri`<sup>Required</sup> <a name="ConfigurationBlobUri" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUri"></a>

```csharp
public string ConfigurationBlobUri { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `TreatFailureAsDeploymentFailureEnabled`<sup>Required</sup> <a name="TreatFailureAsDeploymentFailureEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabled"></a>

```csharp
public bool|IResolvable TreatFailureAsDeploymentFailureEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WindowsVirtualMachineGalleryApplication InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>

---


### WindowsVirtualMachineIdentityOutputReference <a name="WindowsVirtualMachineIdentityOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a>

---


### WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference <a name="WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resetPlacement">ResetPlacement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resetPlacement"></a>

```csharp
private void ResetPlacement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput">OptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placementInput">PlacementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option">Option</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placement">Placement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptionInput`<sup>Optional</sup> <a name="OptionInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput"></a>

```csharp
public string OptionInput { get; }
```

- *Type:* string

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placementInput"></a>

```csharp
public string PlacementInput { get; }
```

- *Type:* string

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option"></a>

```csharp
public string Option { get; }
```

- *Type:* string

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placement"></a>

```csharp
public string Placement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineOsDiskDiffDiskSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

---


### WindowsVirtualMachineOsDiskOutputReference <a name="WindowsVirtualMachineOsDiskOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineOsDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.putDiffDiskSettings">PutDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiffDiskSettings">ResetDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId">ResetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetSecureVmDiskEncryptionSetId">ResetSecureVmDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetSecurityEncryptionType">ResetSecurityEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetStorageAccountType">ResetStorageAccountType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled">ResetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiffDiskSettings` <a name="PutDiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.putDiffDiskSettings"></a>

```csharp
private void PutDiffDiskSettings(WindowsVirtualMachineOsDiskDiffDiskSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.putDiffDiskSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

---

##### `ResetDiffDiskSettings` <a name="ResetDiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiffDiskSettings"></a>

```csharp
private void ResetDiffDiskSettings()
```

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId"></a>

```csharp
private void ResetDiskEncryptionSetId()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSecureVmDiskEncryptionSetId` <a name="ResetSecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetSecureVmDiskEncryptionSetId"></a>

```csharp
private void ResetSecureVmDiskEncryptionSetId()
```

##### `ResetSecurityEncryptionType` <a name="ResetSecurityEncryptionType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetSecurityEncryptionType"></a>

```csharp
private void ResetSecurityEncryptionType()
```

##### `ResetStorageAccountType` <a name="ResetStorageAccountType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetStorageAccountType"></a>

```csharp
private void ResetStorageAccountType()
```

##### `ResetWriteAcceleratorEnabled` <a name="ResetWriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```csharp
private void ResetWriteAcceleratorEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettings">DiffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference">WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.cachingInput">CachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput">DiffDiskSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput">SecureVmDiskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.securityEncryptionTypeInput">SecurityEncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput">WriteAcceleratorEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.caching">Caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetId">SecureVmDiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.securityEncryptionType">SecurityEncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiffDiskSettings`<sup>Required</sup> <a name="DiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettings"></a>

```csharp
public WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference DiffDiskSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference">WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.cachingInput"></a>

```csharp
public string CachingInput { get; }
```

- *Type:* string

---

##### `DiffDiskSettingsInput`<sup>Optional</sup> <a name="DiffDiskSettingsInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput"></a>

```csharp
public WindowsVirtualMachineOsDiskDiffDiskSettings DiffDiskSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```csharp
public string DiskEncryptionSetIdInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecureVmDiskEncryptionSetIdInput`<sup>Optional</sup> <a name="SecureVmDiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput"></a>

```csharp
public string SecureVmDiskEncryptionSetIdInput { get; }
```

- *Type:* string

---

##### `SecurityEncryptionTypeInput`<sup>Optional</sup> <a name="SecurityEncryptionTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.securityEncryptionTypeInput"></a>

```csharp
public string SecurityEncryptionTypeInput { get; }
```

- *Type:* string

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput"></a>

```csharp
public string StorageAccountTypeInput { get; }
```

- *Type:* string

---

##### `WriteAcceleratorEnabledInput`<sup>Optional</sup> <a name="WriteAcceleratorEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```csharp
public bool|IResolvable WriteAcceleratorEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.caching"></a>

```csharp
public string Caching { get; }
```

- *Type:* string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecureVmDiskEncryptionSetId`<sup>Required</sup> <a name="SecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetId"></a>

```csharp
public string SecureVmDiskEncryptionSetId { get; }
```

- *Type:* string

---

##### `SecurityEncryptionType`<sup>Required</sup> <a name="SecurityEncryptionType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.securityEncryptionType"></a>

```csharp
public string SecurityEncryptionType { get; }
```

- *Type:* string

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; }
```

- *Type:* string

---

##### `WriteAcceleratorEnabled`<sup>Required</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```csharp
public bool|IResolvable WriteAcceleratorEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineOsDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

---


### WindowsVirtualMachineOsImageNotificationOutputReference <a name="WindowsVirtualMachineOsImageNotificationOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineOsImageNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineOsImageNotification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a>

---


### WindowsVirtualMachinePlanOutputReference <a name="WindowsVirtualMachinePlanOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachinePlanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.productInput">ProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.productInput"></a>

```csharp
public string ProductInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachinePlan InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

---


### WindowsVirtualMachineSecretCertificateList <a name="WindowsVirtualMachineSecretCertificateList" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineSecretCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.get"></a>

```csharp
private WindowsVirtualMachineSecretCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.internalValue"></a>

```csharp
public IResolvable|WindowsVirtualMachineSecretCertificate[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]

---


### WindowsVirtualMachineSecretCertificateOutputReference <a name="WindowsVirtualMachineSecretCertificateOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineSecretCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.storeInput">StoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.store">Store</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StoreInput`<sup>Optional</sup> <a name="StoreInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.storeInput"></a>

```csharp
public string StoreInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Store`<sup>Required</sup> <a name="Store" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.store"></a>

```csharp
public string Store { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WindowsVirtualMachineSecretCertificate InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>

---


### WindowsVirtualMachineSecretList <a name="WindowsVirtualMachineSecretList" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.get"></a>

```csharp
private WindowsVirtualMachineSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.internalValue"></a>

```csharp
public IResolvable|WindowsVirtualMachineSecret[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]

---


### WindowsVirtualMachineSecretOutputReference <a name="WindowsVirtualMachineSecretOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.putCertificate">PutCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.putCertificate"></a>

```csharp
private void PutCertificate(IResolvable|WindowsVirtualMachineSecretCertificate[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.putCertificate.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList">WindowsVirtualMachineSecretCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificateInput">CertificateInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificate"></a>

```csharp
public WindowsVirtualMachineSecretCertificateList Certificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList">WindowsVirtualMachineSecretCertificateList</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificateInput"></a>

```csharp
public IResolvable|WindowsVirtualMachineSecretCertificate[] CertificateInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WindowsVirtualMachineSecret InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>

---


### WindowsVirtualMachineSourceImageReferenceOutputReference <a name="WindowsVirtualMachineSourceImageReferenceOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineSourceImageReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offerInput">OfferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offer">Offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offerInput"></a>

```csharp
public string OfferInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offer"></a>

```csharp
public string Offer { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineSourceImageReference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

---


### WindowsVirtualMachineTerminationNotificationOutputReference <a name="WindowsVirtualMachineTerminationNotificationOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineTerminationNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineTerminationNotification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a>

---


### WindowsVirtualMachineTimeoutsOutputReference <a name="WindowsVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WindowsVirtualMachineTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

---


### WindowsVirtualMachineWinrmListenerList <a name="WindowsVirtualMachineWinrmListenerList" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineWinrmListenerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.get"></a>

```csharp
private WindowsVirtualMachineWinrmListenerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.internalValue"></a>

```csharp
public IResolvable|WindowsVirtualMachineWinrmListener[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]

---


### WindowsVirtualMachineWinrmListenerOutputReference <a name="WindowsVirtualMachineWinrmListenerOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineWinrmListenerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resetCertificateUrl">ResetCertificateUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateUrl` <a name="ResetCertificateUrl" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resetCertificateUrl"></a>

```csharp
private void ResetCertificateUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.certificateUrlInput">CertificateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.certificateUrl">CertificateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateUrlInput`<sup>Optional</sup> <a name="CertificateUrlInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.certificateUrlInput"></a>

```csharp
public string CertificateUrlInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `CertificateUrl`<sup>Required</sup> <a name="CertificateUrl" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.certificateUrl"></a>

```csharp
public string CertificateUrl { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WindowsVirtualMachineWinrmListener InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>

---



