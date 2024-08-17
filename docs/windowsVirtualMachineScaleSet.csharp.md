# `windowsVirtualMachineScaleSet` Submodule <a name="`windowsVirtualMachineScaleSet` Submodule" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WindowsVirtualMachineScaleSet <a name="WindowsVirtualMachineScaleSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set azurerm_windows_virtual_machine_scale_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSet(Construct Scope, string Id, WindowsVirtualMachineScaleSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig">WindowsVirtualMachineScaleSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig">WindowsVirtualMachineScaleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAdditionalCapabilities">PutAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAdditionalUnattendContent">PutAdditionalUnattendContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAutomaticInstanceRepair">PutAutomaticInstanceRepair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAutomaticOsUpgradePolicy">PutAutomaticOsUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putBootDiagnostics">PutBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putDataDisk">PutDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putExtension">PutExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putGalleryApplication">PutGalleryApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putGalleryApplications">PutGalleryApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putOsDisk">PutOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putPlan">PutPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putRollingUpgradePolicy">PutRollingUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putScaleIn">PutScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSourceImageReference">PutSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSpotRestore">PutSpotRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putTerminateNotification">PutTerminateNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putTerminationNotification">PutTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putWinrmListener">PutWinrmListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetAdditionalCapabilities">ResetAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetAdditionalUnattendContent">ResetAdditionalUnattendContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetAutomaticInstanceRepair">ResetAutomaticInstanceRepair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetAutomaticOsUpgradePolicy">ResetAutomaticOsUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetBootDiagnostics">ResetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetCapacityReservationGroupId">ResetCapacityReservationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetComputerNamePrefix">ResetComputerNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetCustomData">ResetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetDataDisk">ResetDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetDoNotRunExtensionsOnOverprovisionedMachines">ResetDoNotRunExtensionsOnOverprovisionedMachines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetEdgeZone">ResetEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetEnableAutomaticUpdates">ResetEnableAutomaticUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetEncryptionAtHostEnabled">ResetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetEvictionPolicy">ResetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetExtension">ResetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetExtensionOperationsEnabled">ResetExtensionOperationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetExtensionsTimeBudget">ResetExtensionsTimeBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetGalleryApplication">ResetGalleryApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetGalleryApplications">ResetGalleryApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetHealthProbeId">ResetHealthProbeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetHostGroupId">ResetHostGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetMaxBidPrice">ResetMaxBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetOverprovision">ResetOverprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetPlatformFaultDomainCount">ResetPlatformFaultDomainCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetProvisionVmAgent">ResetProvisionVmAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetProximityPlacementGroupId">ResetProximityPlacementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetRollingUpgradePolicy">ResetRollingUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetScaleIn">ResetScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetScaleInPolicy">ResetScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSecureBootEnabled">ResetSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSinglePlacementGroup">ResetSinglePlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSourceImageId">ResetSourceImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSourceImageReference">ResetSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSpotRestore">ResetSpotRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetTerminateNotification">ResetTerminateNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetTerminationNotification">ResetTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetUpgradeMode">ResetUpgradeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetVtpmEnabled">ResetVtpmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetWinrmListener">ResetWinrmListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetZoneBalance">ResetZoneBalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalCapabilities` <a name="PutAdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAdditionalCapabilities"></a>

```csharp
private void PutAdditionalCapabilities(WindowsVirtualMachineScaleSetAdditionalCapabilities Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAdditionalCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities">WindowsVirtualMachineScaleSetAdditionalCapabilities</a>

---

##### `PutAdditionalUnattendContent` <a name="PutAdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAdditionalUnattendContent"></a>

```csharp
private void PutAdditionalUnattendContent(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAdditionalUnattendContent.parameter.value"></a>

- *Type:* object

---

##### `PutAutomaticInstanceRepair` <a name="PutAutomaticInstanceRepair" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAutomaticInstanceRepair"></a>

```csharp
private void PutAutomaticInstanceRepair(WindowsVirtualMachineScaleSetAutomaticInstanceRepair Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAutomaticInstanceRepair.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair">WindowsVirtualMachineScaleSetAutomaticInstanceRepair</a>

---

##### `PutAutomaticOsUpgradePolicy` <a name="PutAutomaticOsUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAutomaticOsUpgradePolicy"></a>

```csharp
private void PutAutomaticOsUpgradePolicy(WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putAutomaticOsUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

---

##### `PutBootDiagnostics` <a name="PutBootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putBootDiagnostics"></a>

```csharp
private void PutBootDiagnostics(WindowsVirtualMachineScaleSetBootDiagnostics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putBootDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics">WindowsVirtualMachineScaleSetBootDiagnostics</a>

---

##### `PutDataDisk` <a name="PutDataDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putDataDisk"></a>

```csharp
private void PutDataDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putDataDisk.parameter.value"></a>

- *Type:* object

---

##### `PutExtension` <a name="PutExtension" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putExtension"></a>

```csharp
private void PutExtension(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putExtension.parameter.value"></a>

- *Type:* object

---

##### `PutGalleryApplication` <a name="PutGalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putGalleryApplication"></a>

```csharp
private void PutGalleryApplication(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putGalleryApplication.parameter.value"></a>

- *Type:* object

---

##### `PutGalleryApplications` <a name="PutGalleryApplications" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putGalleryApplications"></a>

```csharp
private void PutGalleryApplications(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putGalleryApplications.parameter.value"></a>

- *Type:* object

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putIdentity"></a>

```csharp
private void PutIdentity(WindowsVirtualMachineScaleSetIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity">WindowsVirtualMachineScaleSetIdentity</a>

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putNetworkInterface"></a>

```csharp
private void PutNetworkInterface(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putNetworkInterface.parameter.value"></a>

- *Type:* object

---

##### `PutOsDisk` <a name="PutOsDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putOsDisk"></a>

```csharp
private void PutOsDisk(WindowsVirtualMachineScaleSetOsDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk">WindowsVirtualMachineScaleSetOsDisk</a>

---

##### `PutPlan` <a name="PutPlan" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putPlan"></a>

```csharp
private void PutPlan(WindowsVirtualMachineScaleSetPlan Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan">WindowsVirtualMachineScaleSetPlan</a>

---

##### `PutRollingUpgradePolicy` <a name="PutRollingUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putRollingUpgradePolicy"></a>

```csharp
private void PutRollingUpgradePolicy(WindowsVirtualMachineScaleSetRollingUpgradePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putRollingUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy">WindowsVirtualMachineScaleSetRollingUpgradePolicy</a>

---

##### `PutScaleIn` <a name="PutScaleIn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putScaleIn"></a>

```csharp
private void PutScaleIn(WindowsVirtualMachineScaleSetScaleIn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putScaleIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn">WindowsVirtualMachineScaleSetScaleIn</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSecret"></a>

```csharp
private void PutSecret(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSecret.parameter.value"></a>

- *Type:* object

---

##### `PutSourceImageReference` <a name="PutSourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSourceImageReference"></a>

```csharp
private void PutSourceImageReference(WindowsVirtualMachineScaleSetSourceImageReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSourceImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference">WindowsVirtualMachineScaleSetSourceImageReference</a>

---

##### `PutSpotRestore` <a name="PutSpotRestore" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSpotRestore"></a>

```csharp
private void PutSpotRestore(WindowsVirtualMachineScaleSetSpotRestore Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putSpotRestore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore">WindowsVirtualMachineScaleSetSpotRestore</a>

---

##### `PutTerminateNotification` <a name="PutTerminateNotification" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putTerminateNotification"></a>

```csharp
private void PutTerminateNotification(WindowsVirtualMachineScaleSetTerminateNotification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putTerminateNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotification">WindowsVirtualMachineScaleSetTerminateNotification</a>

---

##### `PutTerminationNotification` <a name="PutTerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putTerminationNotification"></a>

```csharp
private void PutTerminationNotification(WindowsVirtualMachineScaleSetTerminationNotification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putTerminationNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification">WindowsVirtualMachineScaleSetTerminationNotification</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putTimeouts"></a>

```csharp
private void PutTimeouts(WindowsVirtualMachineScaleSetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts">WindowsVirtualMachineScaleSetTimeouts</a>

---

##### `PutWinrmListener` <a name="PutWinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putWinrmListener"></a>

```csharp
private void PutWinrmListener(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.putWinrmListener.parameter.value"></a>

- *Type:* object

---

##### `ResetAdditionalCapabilities` <a name="ResetAdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetAdditionalCapabilities"></a>

```csharp
private void ResetAdditionalCapabilities()
```

##### `ResetAdditionalUnattendContent` <a name="ResetAdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetAdditionalUnattendContent"></a>

```csharp
private void ResetAdditionalUnattendContent()
```

##### `ResetAutomaticInstanceRepair` <a name="ResetAutomaticInstanceRepair" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetAutomaticInstanceRepair"></a>

```csharp
private void ResetAutomaticInstanceRepair()
```

##### `ResetAutomaticOsUpgradePolicy` <a name="ResetAutomaticOsUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetAutomaticOsUpgradePolicy"></a>

```csharp
private void ResetAutomaticOsUpgradePolicy()
```

##### `ResetBootDiagnostics` <a name="ResetBootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetBootDiagnostics"></a>

```csharp
private void ResetBootDiagnostics()
```

##### `ResetCapacityReservationGroupId` <a name="ResetCapacityReservationGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetCapacityReservationGroupId"></a>

```csharp
private void ResetCapacityReservationGroupId()
```

##### `ResetComputerNamePrefix` <a name="ResetComputerNamePrefix" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetComputerNamePrefix"></a>

```csharp
private void ResetComputerNamePrefix()
```

##### `ResetCustomData` <a name="ResetCustomData" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetCustomData"></a>

```csharp
private void ResetCustomData()
```

##### `ResetDataDisk` <a name="ResetDataDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetDataDisk"></a>

```csharp
private void ResetDataDisk()
```

##### `ResetDoNotRunExtensionsOnOverprovisionedMachines` <a name="ResetDoNotRunExtensionsOnOverprovisionedMachines" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetDoNotRunExtensionsOnOverprovisionedMachines"></a>

```csharp
private void ResetDoNotRunExtensionsOnOverprovisionedMachines()
```

##### `ResetEdgeZone` <a name="ResetEdgeZone" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetEdgeZone"></a>

```csharp
private void ResetEdgeZone()
```

##### `ResetEnableAutomaticUpdates` <a name="ResetEnableAutomaticUpdates" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetEnableAutomaticUpdates"></a>

```csharp
private void ResetEnableAutomaticUpdates()
```

##### `ResetEncryptionAtHostEnabled` <a name="ResetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetEncryptionAtHostEnabled"></a>

```csharp
private void ResetEncryptionAtHostEnabled()
```

##### `ResetEvictionPolicy` <a name="ResetEvictionPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetEvictionPolicy"></a>

```csharp
private void ResetEvictionPolicy()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetExtension"></a>

```csharp
private void ResetExtension()
```

##### `ResetExtensionOperationsEnabled` <a name="ResetExtensionOperationsEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetExtensionOperationsEnabled"></a>

```csharp
private void ResetExtensionOperationsEnabled()
```

##### `ResetExtensionsTimeBudget` <a name="ResetExtensionsTimeBudget" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetExtensionsTimeBudget"></a>

```csharp
private void ResetExtensionsTimeBudget()
```

##### `ResetGalleryApplication` <a name="ResetGalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetGalleryApplication"></a>

```csharp
private void ResetGalleryApplication()
```

##### `ResetGalleryApplications` <a name="ResetGalleryApplications" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetGalleryApplications"></a>

```csharp
private void ResetGalleryApplications()
```

##### `ResetHealthProbeId` <a name="ResetHealthProbeId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetHealthProbeId"></a>

```csharp
private void ResetHealthProbeId()
```

##### `ResetHostGroupId` <a name="ResetHostGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetHostGroupId"></a>

```csharp
private void ResetHostGroupId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetLicenseType"></a>

```csharp
private void ResetLicenseType()
```

##### `ResetMaxBidPrice` <a name="ResetMaxBidPrice" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetMaxBidPrice"></a>

```csharp
private void ResetMaxBidPrice()
```

##### `ResetOverprovision` <a name="ResetOverprovision" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetOverprovision"></a>

```csharp
private void ResetOverprovision()
```

##### `ResetPlan` <a name="ResetPlan" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetPlan"></a>

```csharp
private void ResetPlan()
```

##### `ResetPlatformFaultDomainCount` <a name="ResetPlatformFaultDomainCount" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetPlatformFaultDomainCount"></a>

```csharp
private void ResetPlatformFaultDomainCount()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProvisionVmAgent` <a name="ResetProvisionVmAgent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetProvisionVmAgent"></a>

```csharp
private void ResetProvisionVmAgent()
```

##### `ResetProximityPlacementGroupId` <a name="ResetProximityPlacementGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetProximityPlacementGroupId"></a>

```csharp
private void ResetProximityPlacementGroupId()
```

##### `ResetRollingUpgradePolicy` <a name="ResetRollingUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetRollingUpgradePolicy"></a>

```csharp
private void ResetRollingUpgradePolicy()
```

##### `ResetScaleIn` <a name="ResetScaleIn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetScaleIn"></a>

```csharp
private void ResetScaleIn()
```

##### `ResetScaleInPolicy` <a name="ResetScaleInPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetScaleInPolicy"></a>

```csharp
private void ResetScaleInPolicy()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetSecureBootEnabled` <a name="ResetSecureBootEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSecureBootEnabled"></a>

```csharp
private void ResetSecureBootEnabled()
```

##### `ResetSinglePlacementGroup` <a name="ResetSinglePlacementGroup" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSinglePlacementGroup"></a>

```csharp
private void ResetSinglePlacementGroup()
```

##### `ResetSourceImageId` <a name="ResetSourceImageId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSourceImageId"></a>

```csharp
private void ResetSourceImageId()
```

##### `ResetSourceImageReference` <a name="ResetSourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSourceImageReference"></a>

```csharp
private void ResetSourceImageReference()
```

##### `ResetSpotRestore` <a name="ResetSpotRestore" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetSpotRestore"></a>

```csharp
private void ResetSpotRestore()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTerminateNotification` <a name="ResetTerminateNotification" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetTerminateNotification"></a>

```csharp
private void ResetTerminateNotification()
```

##### `ResetTerminationNotification` <a name="ResetTerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetTerminationNotification"></a>

```csharp
private void ResetTerminationNotification()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetTimezone"></a>

```csharp
private void ResetTimezone()
```

##### `ResetUpgradeMode` <a name="ResetUpgradeMode" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetUpgradeMode"></a>

```csharp
private void ResetUpgradeMode()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetUserData"></a>

```csharp
private void ResetUserData()
```

##### `ResetVtpmEnabled` <a name="ResetVtpmEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetVtpmEnabled"></a>

```csharp
private void ResetVtpmEnabled()
```

##### `ResetWinrmListener` <a name="ResetWinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetWinrmListener"></a>

```csharp
private void ResetWinrmListener()
```

##### `ResetZoneBalance` <a name="ResetZoneBalance" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetZoneBalance"></a>

```csharp
private void ResetZoneBalance()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.resetZones"></a>

```csharp
private void ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WindowsVirtualMachineScaleSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WindowsVirtualMachineScaleSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WindowsVirtualMachineScaleSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WindowsVirtualMachineScaleSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WindowsVirtualMachineScaleSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WindowsVirtualMachineScaleSet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WindowsVirtualMachineScaleSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WindowsVirtualMachineScaleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WindowsVirtualMachineScaleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalCapabilities">AdditionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference">WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalUnattendContent">AdditionalUnattendContent</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList">WindowsVirtualMachineScaleSetAdditionalUnattendContentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticInstanceRepair">AutomaticInstanceRepair</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference">WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticOsUpgradePolicy">AutomaticOsUpgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.bootDiagnostics">BootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference">WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.dataDisk">DataDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList">WindowsVirtualMachineScaleSetDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList">WindowsVirtualMachineScaleSetExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.galleryApplication">GalleryApplication</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList">WindowsVirtualMachineScaleSetGalleryApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.galleryApplications">GalleryApplications</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList">WindowsVirtualMachineScaleSetGalleryApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference">WindowsVirtualMachineScaleSetIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList">WindowsVirtualMachineScaleSetNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference">WindowsVirtualMachineScaleSetOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference">WindowsVirtualMachineScaleSetPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.rollingUpgradePolicy">RollingUpgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference">WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.scaleIn">ScaleIn</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference">WindowsVirtualMachineScaleSetScaleInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList">WindowsVirtualMachineScaleSetSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageReference">SourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference">WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.spotRestore">SpotRestore</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference">WindowsVirtualMachineScaleSetSpotRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terminateNotification">TerminateNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference">WindowsVirtualMachineScaleSetTerminateNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terminationNotification">TerminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference">WindowsVirtualMachineScaleSetTerminationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference">WindowsVirtualMachineScaleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.uniqueId">UniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.winrmListener">WinrmListener</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList">WindowsVirtualMachineScaleSetWinrmListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalCapabilitiesInput">AdditionalCapabilitiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities">WindowsVirtualMachineScaleSetAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalUnattendContentInput">AdditionalUnattendContentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticInstanceRepairInput">AutomaticInstanceRepairInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair">WindowsVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticOsUpgradePolicyInput">AutomaticOsUpgradePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.bootDiagnosticsInput">BootDiagnosticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics">WindowsVirtualMachineScaleSetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.capacityReservationGroupIdInput">CapacityReservationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.computerNamePrefixInput">ComputerNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.customDataInput">CustomDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.dataDiskInput">DataDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachinesInput">DoNotRunExtensionsOnOverprovisionedMachinesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.edgeZoneInput">EdgeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.enableAutomaticUpdatesInput">EnableAutomaticUpdatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.encryptionAtHostEnabledInput">EncryptionAtHostEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.evictionPolicyInput">EvictionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionInput">ExtensionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionOperationsEnabledInput">ExtensionOperationsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionsTimeBudgetInput">ExtensionsTimeBudgetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.galleryApplicationInput">GalleryApplicationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.galleryApplicationsInput">GalleryApplicationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.healthProbeIdInput">HealthProbeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.hostGroupIdInput">HostGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity">WindowsVirtualMachineScaleSetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.instancesInput">InstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.maxBidPriceInput">MaxBidPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.osDiskInput">OsDiskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk">WindowsVirtualMachineScaleSetOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.overprovisionInput">OverprovisionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.planInput">PlanInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan">WindowsVirtualMachineScaleSetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.platformFaultDomainCountInput">PlatformFaultDomainCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.priorityInput">PriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provisionVmAgentInput">ProvisionVmAgentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.proximityPlacementGroupIdInput">ProximityPlacementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.rollingUpgradePolicyInput">RollingUpgradePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy">WindowsVirtualMachineScaleSetRollingUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.scaleInInput">ScaleInInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn">WindowsVirtualMachineScaleSetScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.scaleInPolicyInput">ScaleInPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secretInput">SecretInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secureBootEnabledInput">SecureBootEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.singlePlacementGroupInput">SinglePlacementGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageIdInput">SourceImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageReferenceInput">SourceImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference">WindowsVirtualMachineScaleSetSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.spotRestoreInput">SpotRestoreInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore">WindowsVirtualMachineScaleSetSpotRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terminateNotificationInput">TerminateNotificationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotification">WindowsVirtualMachineScaleSetTerminateNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terminationNotificationInput">TerminationNotificationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification">WindowsVirtualMachineScaleSetTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.upgradeModeInput">UpgradeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.vtpmEnabledInput">VtpmEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.winrmListenerInput">WinrmListenerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zoneBalanceInput">ZoneBalanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.capacityReservationGroupId">CapacityReservationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.computerNamePrefix">ComputerNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.customData">CustomData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachines">DoNotRunExtensionsOnOverprovisionedMachines</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.edgeZone">EdgeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.enableAutomaticUpdates">EnableAutomaticUpdates</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.evictionPolicy">EvictionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionOperationsEnabled">ExtensionOperationsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionsTimeBudget">ExtensionsTimeBudget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.healthProbeId">HealthProbeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.hostGroupId">HostGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.instances">Instances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.maxBidPrice">MaxBidPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.overprovision">Overprovision</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.platformFaultDomainCount">PlatformFaultDomainCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.scaleInPolicy">ScaleInPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secureBootEnabled">SecureBootEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.singlePlacementGroup">SinglePlacementGroup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageId">SourceImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.upgradeMode">UpgradeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.userData">UserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.vtpmEnabled">VtpmEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zoneBalance">ZoneBalance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdditionalCapabilities`<sup>Required</sup> <a name="AdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalCapabilities"></a>

```csharp
public WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference AdditionalCapabilities { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference">WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference</a>

---

##### `AdditionalUnattendContent`<sup>Required</sup> <a name="AdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalUnattendContent"></a>

```csharp
public WindowsVirtualMachineScaleSetAdditionalUnattendContentList AdditionalUnattendContent { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList">WindowsVirtualMachineScaleSetAdditionalUnattendContentList</a>

---

##### `AutomaticInstanceRepair`<sup>Required</sup> <a name="AutomaticInstanceRepair" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticInstanceRepair"></a>

```csharp
public WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference AutomaticInstanceRepair { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference">WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference</a>

---

##### `AutomaticOsUpgradePolicy`<sup>Required</sup> <a name="AutomaticOsUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticOsUpgradePolicy"></a>

```csharp
public WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference AutomaticOsUpgradePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference</a>

---

##### `BootDiagnostics`<sup>Required</sup> <a name="BootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.bootDiagnostics"></a>

```csharp
public WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference BootDiagnostics { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference">WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference</a>

---

##### `DataDisk`<sup>Required</sup> <a name="DataDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.dataDisk"></a>

```csharp
public WindowsVirtualMachineScaleSetDataDiskList DataDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList">WindowsVirtualMachineScaleSetDataDiskList</a>

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extension"></a>

```csharp
public WindowsVirtualMachineScaleSetExtensionList Extension { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList">WindowsVirtualMachineScaleSetExtensionList</a>

---

##### `GalleryApplication`<sup>Required</sup> <a name="GalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.galleryApplication"></a>

```csharp
public WindowsVirtualMachineScaleSetGalleryApplicationList GalleryApplication { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList">WindowsVirtualMachineScaleSetGalleryApplicationList</a>

---

##### `GalleryApplications`<sup>Required</sup> <a name="GalleryApplications" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.galleryApplications"></a>

```csharp
public WindowsVirtualMachineScaleSetGalleryApplicationsList GalleryApplications { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList">WindowsVirtualMachineScaleSetGalleryApplicationsList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.identity"></a>

```csharp
public WindowsVirtualMachineScaleSetIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference">WindowsVirtualMachineScaleSetIdentityOutputReference</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.networkInterface"></a>

```csharp
public WindowsVirtualMachineScaleSetNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList">WindowsVirtualMachineScaleSetNetworkInterfaceList</a>

---

##### `OsDisk`<sup>Required</sup> <a name="OsDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.osDisk"></a>

```csharp
public WindowsVirtualMachineScaleSetOsDiskOutputReference OsDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference">WindowsVirtualMachineScaleSetOsDiskOutputReference</a>

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.plan"></a>

```csharp
public WindowsVirtualMachineScaleSetPlanOutputReference Plan { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference">WindowsVirtualMachineScaleSetPlanOutputReference</a>

---

##### `RollingUpgradePolicy`<sup>Required</sup> <a name="RollingUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.rollingUpgradePolicy"></a>

```csharp
public WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference RollingUpgradePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference">WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference</a>

---

##### `ScaleIn`<sup>Required</sup> <a name="ScaleIn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.scaleIn"></a>

```csharp
public WindowsVirtualMachineScaleSetScaleInOutputReference ScaleIn { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference">WindowsVirtualMachineScaleSetScaleInOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secret"></a>

```csharp
public WindowsVirtualMachineScaleSetSecretList Secret { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList">WindowsVirtualMachineScaleSetSecretList</a>

---

##### `SourceImageReference`<sup>Required</sup> <a name="SourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageReference"></a>

```csharp
public WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference SourceImageReference { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference">WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference</a>

---

##### `SpotRestore`<sup>Required</sup> <a name="SpotRestore" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.spotRestore"></a>

```csharp
public WindowsVirtualMachineScaleSetSpotRestoreOutputReference SpotRestore { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference">WindowsVirtualMachineScaleSetSpotRestoreOutputReference</a>

---

##### `TerminateNotification`<sup>Required</sup> <a name="TerminateNotification" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terminateNotification"></a>

```csharp
public WindowsVirtualMachineScaleSetTerminateNotificationOutputReference TerminateNotification { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference">WindowsVirtualMachineScaleSetTerminateNotificationOutputReference</a>

---

##### `TerminationNotification`<sup>Required</sup> <a name="TerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terminationNotification"></a>

```csharp
public WindowsVirtualMachineScaleSetTerminationNotificationOutputReference TerminationNotification { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference">WindowsVirtualMachineScaleSetTerminationNotificationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timeouts"></a>

```csharp
public WindowsVirtualMachineScaleSetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference">WindowsVirtualMachineScaleSetTimeoutsOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.uniqueId"></a>

```csharp
public string UniqueId { get; }
```

- *Type:* string

---

##### `WinrmListener`<sup>Required</sup> <a name="WinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.winrmListener"></a>

```csharp
public WindowsVirtualMachineScaleSetWinrmListenerList WinrmListener { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList">WindowsVirtualMachineScaleSetWinrmListenerList</a>

---

##### `AdditionalCapabilitiesInput`<sup>Optional</sup> <a name="AdditionalCapabilitiesInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalCapabilitiesInput"></a>

```csharp
public WindowsVirtualMachineScaleSetAdditionalCapabilities AdditionalCapabilitiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities">WindowsVirtualMachineScaleSetAdditionalCapabilities</a>

---

##### `AdditionalUnattendContentInput`<sup>Optional</sup> <a name="AdditionalUnattendContentInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.additionalUnattendContentInput"></a>

```csharp
public object AdditionalUnattendContentInput { get; }
```

- *Type:* object

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminUsernameInput"></a>

```csharp
public string AdminUsernameInput { get; }
```

- *Type:* string

---

##### `AutomaticInstanceRepairInput`<sup>Optional</sup> <a name="AutomaticInstanceRepairInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticInstanceRepairInput"></a>

```csharp
public WindowsVirtualMachineScaleSetAutomaticInstanceRepair AutomaticInstanceRepairInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair">WindowsVirtualMachineScaleSetAutomaticInstanceRepair</a>

---

##### `AutomaticOsUpgradePolicyInput`<sup>Optional</sup> <a name="AutomaticOsUpgradePolicyInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.automaticOsUpgradePolicyInput"></a>

```csharp
public WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy AutomaticOsUpgradePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

---

##### `BootDiagnosticsInput`<sup>Optional</sup> <a name="BootDiagnosticsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.bootDiagnosticsInput"></a>

```csharp
public WindowsVirtualMachineScaleSetBootDiagnostics BootDiagnosticsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics">WindowsVirtualMachineScaleSetBootDiagnostics</a>

---

##### `CapacityReservationGroupIdInput`<sup>Optional</sup> <a name="CapacityReservationGroupIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.capacityReservationGroupIdInput"></a>

```csharp
public string CapacityReservationGroupIdInput { get; }
```

- *Type:* string

---

##### `ComputerNamePrefixInput`<sup>Optional</sup> <a name="ComputerNamePrefixInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.computerNamePrefixInput"></a>

```csharp
public string ComputerNamePrefixInput { get; }
```

- *Type:* string

---

##### `CustomDataInput`<sup>Optional</sup> <a name="CustomDataInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.customDataInput"></a>

```csharp
public string CustomDataInput { get; }
```

- *Type:* string

---

##### `DataDiskInput`<sup>Optional</sup> <a name="DataDiskInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.dataDiskInput"></a>

```csharp
public object DataDiskInput { get; }
```

- *Type:* object

---

##### `DoNotRunExtensionsOnOverprovisionedMachinesInput`<sup>Optional</sup> <a name="DoNotRunExtensionsOnOverprovisionedMachinesInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachinesInput"></a>

```csharp
public object DoNotRunExtensionsOnOverprovisionedMachinesInput { get; }
```

- *Type:* object

---

##### `EdgeZoneInput`<sup>Optional</sup> <a name="EdgeZoneInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.edgeZoneInput"></a>

```csharp
public string EdgeZoneInput { get; }
```

- *Type:* string

---

##### `EnableAutomaticUpdatesInput`<sup>Optional</sup> <a name="EnableAutomaticUpdatesInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.enableAutomaticUpdatesInput"></a>

```csharp
public object EnableAutomaticUpdatesInput { get; }
```

- *Type:* object

---

##### `EncryptionAtHostEnabledInput`<sup>Optional</sup> <a name="EncryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.encryptionAtHostEnabledInput"></a>

```csharp
public object EncryptionAtHostEnabledInput { get; }
```

- *Type:* object

---

##### `EvictionPolicyInput`<sup>Optional</sup> <a name="EvictionPolicyInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.evictionPolicyInput"></a>

```csharp
public string EvictionPolicyInput { get; }
```

- *Type:* string

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionInput"></a>

```csharp
public object ExtensionInput { get; }
```

- *Type:* object

---

##### `ExtensionOperationsEnabledInput`<sup>Optional</sup> <a name="ExtensionOperationsEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionOperationsEnabledInput"></a>

```csharp
public object ExtensionOperationsEnabledInput { get; }
```

- *Type:* object

---

##### `ExtensionsTimeBudgetInput`<sup>Optional</sup> <a name="ExtensionsTimeBudgetInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionsTimeBudgetInput"></a>

```csharp
public string ExtensionsTimeBudgetInput { get; }
```

- *Type:* string

---

##### `GalleryApplicationInput`<sup>Optional</sup> <a name="GalleryApplicationInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.galleryApplicationInput"></a>

```csharp
public object GalleryApplicationInput { get; }
```

- *Type:* object

---

##### `GalleryApplicationsInput`<sup>Optional</sup> <a name="GalleryApplicationsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.galleryApplicationsInput"></a>

```csharp
public object GalleryApplicationsInput { get; }
```

- *Type:* object

---

##### `HealthProbeIdInput`<sup>Optional</sup> <a name="HealthProbeIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.healthProbeIdInput"></a>

```csharp
public string HealthProbeIdInput { get; }
```

- *Type:* string

---

##### `HostGroupIdInput`<sup>Optional</sup> <a name="HostGroupIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.hostGroupIdInput"></a>

```csharp
public string HostGroupIdInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.identityInput"></a>

```csharp
public WindowsVirtualMachineScaleSetIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity">WindowsVirtualMachineScaleSetIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.instancesInput"></a>

```csharp
public double InstancesInput { get; }
```

- *Type:* double

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.licenseTypeInput"></a>

```csharp
public string LicenseTypeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaxBidPriceInput`<sup>Optional</sup> <a name="MaxBidPriceInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.maxBidPriceInput"></a>

```csharp
public double MaxBidPriceInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.networkInterfaceInput"></a>

```csharp
public object NetworkInterfaceInput { get; }
```

- *Type:* object

---

##### `OsDiskInput`<sup>Optional</sup> <a name="OsDiskInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.osDiskInput"></a>

```csharp
public WindowsVirtualMachineScaleSetOsDisk OsDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk">WindowsVirtualMachineScaleSetOsDisk</a>

---

##### `OverprovisionInput`<sup>Optional</sup> <a name="OverprovisionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.overprovisionInput"></a>

```csharp
public object OverprovisionInput { get; }
```

- *Type:* object

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.planInput"></a>

```csharp
public WindowsVirtualMachineScaleSetPlan PlanInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan">WindowsVirtualMachineScaleSetPlan</a>

---

##### `PlatformFaultDomainCountInput`<sup>Optional</sup> <a name="PlatformFaultDomainCountInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.platformFaultDomainCountInput"></a>

```csharp
public double PlatformFaultDomainCountInput { get; }
```

- *Type:* double

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.priorityInput"></a>

```csharp
public string PriorityInput { get; }
```

- *Type:* string

---

##### `ProvisionVmAgentInput`<sup>Optional</sup> <a name="ProvisionVmAgentInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provisionVmAgentInput"></a>

```csharp
public object ProvisionVmAgentInput { get; }
```

- *Type:* object

---

##### `ProximityPlacementGroupIdInput`<sup>Optional</sup> <a name="ProximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.proximityPlacementGroupIdInput"></a>

```csharp
public string ProximityPlacementGroupIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RollingUpgradePolicyInput`<sup>Optional</sup> <a name="RollingUpgradePolicyInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.rollingUpgradePolicyInput"></a>

```csharp
public WindowsVirtualMachineScaleSetRollingUpgradePolicy RollingUpgradePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy">WindowsVirtualMachineScaleSetRollingUpgradePolicy</a>

---

##### `ScaleInInput`<sup>Optional</sup> <a name="ScaleInInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.scaleInInput"></a>

```csharp
public WindowsVirtualMachineScaleSetScaleIn ScaleInInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn">WindowsVirtualMachineScaleSetScaleIn</a>

---

##### `ScaleInPolicyInput`<sup>Optional</sup> <a name="ScaleInPolicyInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.scaleInPolicyInput"></a>

```csharp
public string ScaleInPolicyInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secretInput"></a>

```csharp
public object SecretInput { get; }
```

- *Type:* object

---

##### `SecureBootEnabledInput`<sup>Optional</sup> <a name="SecureBootEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secureBootEnabledInput"></a>

```csharp
public object SecureBootEnabledInput { get; }
```

- *Type:* object

---

##### `SinglePlacementGroupInput`<sup>Optional</sup> <a name="SinglePlacementGroupInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.singlePlacementGroupInput"></a>

```csharp
public object SinglePlacementGroupInput { get; }
```

- *Type:* object

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `SourceImageIdInput`<sup>Optional</sup> <a name="SourceImageIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageIdInput"></a>

```csharp
public string SourceImageIdInput { get; }
```

- *Type:* string

---

##### `SourceImageReferenceInput`<sup>Optional</sup> <a name="SourceImageReferenceInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageReferenceInput"></a>

```csharp
public WindowsVirtualMachineScaleSetSourceImageReference SourceImageReferenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference">WindowsVirtualMachineScaleSetSourceImageReference</a>

---

##### `SpotRestoreInput`<sup>Optional</sup> <a name="SpotRestoreInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.spotRestoreInput"></a>

```csharp
public WindowsVirtualMachineScaleSetSpotRestore SpotRestoreInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore">WindowsVirtualMachineScaleSetSpotRestore</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TerminateNotificationInput`<sup>Optional</sup> <a name="TerminateNotificationInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terminateNotificationInput"></a>

```csharp
public WindowsVirtualMachineScaleSetTerminateNotification TerminateNotificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotification">WindowsVirtualMachineScaleSetTerminateNotification</a>

---

##### `TerminationNotificationInput`<sup>Optional</sup> <a name="TerminationNotificationInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.terminationNotificationInput"></a>

```csharp
public WindowsVirtualMachineScaleSetTerminationNotification TerminationNotificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification">WindowsVirtualMachineScaleSetTerminationNotification</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `UpgradeModeInput`<sup>Optional</sup> <a name="UpgradeModeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.upgradeModeInput"></a>

```csharp
public string UpgradeModeInput { get; }
```

- *Type:* string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `VtpmEnabledInput`<sup>Optional</sup> <a name="VtpmEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.vtpmEnabledInput"></a>

```csharp
public object VtpmEnabledInput { get; }
```

- *Type:* object

---

##### `WinrmListenerInput`<sup>Optional</sup> <a name="WinrmListenerInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.winrmListenerInput"></a>

```csharp
public object WinrmListenerInput { get; }
```

- *Type:* object

---

##### `ZoneBalanceInput`<sup>Optional</sup> <a name="ZoneBalanceInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zoneBalanceInput"></a>

```csharp
public object ZoneBalanceInput { get; }
```

- *Type:* object

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `CapacityReservationGroupId`<sup>Required</sup> <a name="CapacityReservationGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.capacityReservationGroupId"></a>

```csharp
public string CapacityReservationGroupId { get; }
```

- *Type:* string

---

##### `ComputerNamePrefix`<sup>Required</sup> <a name="ComputerNamePrefix" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.computerNamePrefix"></a>

```csharp
public string ComputerNamePrefix { get; }
```

- *Type:* string

---

##### `CustomData`<sup>Required</sup> <a name="CustomData" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.customData"></a>

```csharp
public string CustomData { get; }
```

- *Type:* string

---

##### `DoNotRunExtensionsOnOverprovisionedMachines`<sup>Required</sup> <a name="DoNotRunExtensionsOnOverprovisionedMachines" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachines"></a>

```csharp
public object DoNotRunExtensionsOnOverprovisionedMachines { get; }
```

- *Type:* object

---

##### `EdgeZone`<sup>Required</sup> <a name="EdgeZone" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.edgeZone"></a>

```csharp
public string EdgeZone { get; }
```

- *Type:* string

---

##### `EnableAutomaticUpdates`<sup>Required</sup> <a name="EnableAutomaticUpdates" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.enableAutomaticUpdates"></a>

```csharp
public object EnableAutomaticUpdates { get; }
```

- *Type:* object

---

##### `EncryptionAtHostEnabled`<sup>Required</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.encryptionAtHostEnabled"></a>

```csharp
public object EncryptionAtHostEnabled { get; }
```

- *Type:* object

---

##### `EvictionPolicy`<sup>Required</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.evictionPolicy"></a>

```csharp
public string EvictionPolicy { get; }
```

- *Type:* string

---

##### `ExtensionOperationsEnabled`<sup>Required</sup> <a name="ExtensionOperationsEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionOperationsEnabled"></a>

```csharp
public object ExtensionOperationsEnabled { get; }
```

- *Type:* object

---

##### `ExtensionsTimeBudget`<sup>Required</sup> <a name="ExtensionsTimeBudget" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.extensionsTimeBudget"></a>

```csharp
public string ExtensionsTimeBudget { get; }
```

- *Type:* string

---

##### `HealthProbeId`<sup>Required</sup> <a name="HealthProbeId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.healthProbeId"></a>

```csharp
public string HealthProbeId { get; }
```

- *Type:* string

---

##### `HostGroupId`<sup>Required</sup> <a name="HostGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.hostGroupId"></a>

```csharp
public string HostGroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.instances"></a>

```csharp
public double Instances { get; }
```

- *Type:* double

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaxBidPrice`<sup>Required</sup> <a name="MaxBidPrice" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.maxBidPrice"></a>

```csharp
public double MaxBidPrice { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Overprovision`<sup>Required</sup> <a name="Overprovision" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.overprovision"></a>

```csharp
public object Overprovision { get; }
```

- *Type:* object

---

##### `PlatformFaultDomainCount`<sup>Required</sup> <a name="PlatformFaultDomainCount" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.platformFaultDomainCount"></a>

```csharp
public double PlatformFaultDomainCount { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `ProvisionVmAgent`<sup>Required</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.provisionVmAgent"></a>

```csharp
public object ProvisionVmAgent { get; }
```

- *Type:* object

---

##### `ProximityPlacementGroupId`<sup>Required</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.proximityPlacementGroupId"></a>

```csharp
public string ProximityPlacementGroupId { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ScaleInPolicy`<sup>Required</sup> <a name="ScaleInPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.scaleInPolicy"></a>

```csharp
public string ScaleInPolicy { get; }
```

- *Type:* string

---

##### `SecureBootEnabled`<sup>Required</sup> <a name="SecureBootEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.secureBootEnabled"></a>

```csharp
public object SecureBootEnabled { get; }
```

- *Type:* object

---

##### `SinglePlacementGroup`<sup>Required</sup> <a name="SinglePlacementGroup" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.singlePlacementGroup"></a>

```csharp
public object SinglePlacementGroup { get; }
```

- *Type:* object

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `SourceImageId`<sup>Required</sup> <a name="SourceImageId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.sourceImageId"></a>

```csharp
public string SourceImageId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `UpgradeMode`<sup>Required</sup> <a name="UpgradeMode" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.upgradeMode"></a>

```csharp
public string UpgradeMode { get; }
```

- *Type:* string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

##### `VtpmEnabled`<sup>Required</sup> <a name="VtpmEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.vtpmEnabled"></a>

```csharp
public object VtpmEnabled { get; }
```

- *Type:* object

---

##### `ZoneBalance`<sup>Required</sup> <a name="ZoneBalance" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zoneBalance"></a>

```csharp
public object ZoneBalance { get; }
```

- *Type:* object

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WindowsVirtualMachineScaleSetAdditionalCapabilities <a name="WindowsVirtualMachineScaleSetAdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetAdditionalCapabilities {
    object UltraSsdEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities.property.ultraSsdEnabled">UltraSsdEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#ultra_ssd_enabled WindowsVirtualMachineScaleSet#ultra_ssd_enabled}. |

---

##### `UltraSsdEnabled`<sup>Optional</sup> <a name="UltraSsdEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities.property.ultraSsdEnabled"></a>

```csharp
public object UltraSsdEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#ultra_ssd_enabled WindowsVirtualMachineScaleSet#ultra_ssd_enabled}.

---

### WindowsVirtualMachineScaleSetAdditionalUnattendContent <a name="WindowsVirtualMachineScaleSetAdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetAdditionalUnattendContent {
    string Content,
    string Setting
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContent.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#content WindowsVirtualMachineScaleSet#content}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContent.property.setting">Setting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#setting WindowsVirtualMachineScaleSet#setting}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContent.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#content WindowsVirtualMachineScaleSet#content}.

---

##### `Setting`<sup>Required</sup> <a name="Setting" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContent.property.setting"></a>

```csharp
public string Setting { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#setting WindowsVirtualMachineScaleSet#setting}.

---

### WindowsVirtualMachineScaleSetAutomaticInstanceRepair <a name="WindowsVirtualMachineScaleSetAutomaticInstanceRepair" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetAutomaticInstanceRepair {
    object Enabled,
    string Action = null,
    string GracePeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#action WindowsVirtualMachineScaleSet#action}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair.property.gracePeriod">GracePeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#grace_period WindowsVirtualMachineScaleSet#grace_period}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#action WindowsVirtualMachineScaleSet#action}.

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair.property.gracePeriod"></a>

```csharp
public string GracePeriod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#grace_period WindowsVirtualMachineScaleSet#grace_period}.

---

### WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy <a name="WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy {
    object DisableAutomaticRollback,
    object EnableAutomaticOsUpgrade
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.disableAutomaticRollback">DisableAutomaticRollback</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#disable_automatic_rollback WindowsVirtualMachineScaleSet#disable_automatic_rollback}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.enableAutomaticOsUpgrade">EnableAutomaticOsUpgrade</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enable_automatic_os_upgrade WindowsVirtualMachineScaleSet#enable_automatic_os_upgrade}. |

---

##### `DisableAutomaticRollback`<sup>Required</sup> <a name="DisableAutomaticRollback" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.disableAutomaticRollback"></a>

```csharp
public object DisableAutomaticRollback { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#disable_automatic_rollback WindowsVirtualMachineScaleSet#disable_automatic_rollback}.

---

##### `EnableAutomaticOsUpgrade`<sup>Required</sup> <a name="EnableAutomaticOsUpgrade" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.enableAutomaticOsUpgrade"></a>

```csharp
public object EnableAutomaticOsUpgrade { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enable_automatic_os_upgrade WindowsVirtualMachineScaleSet#enable_automatic_os_upgrade}.

---

### WindowsVirtualMachineScaleSetBootDiagnostics <a name="WindowsVirtualMachineScaleSetBootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetBootDiagnostics {
    string StorageAccountUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics.property.storageAccountUri">StorageAccountUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#storage_account_uri WindowsVirtualMachineScaleSet#storage_account_uri}. |

---

##### `StorageAccountUri`<sup>Optional</sup> <a name="StorageAccountUri" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics.property.storageAccountUri"></a>

```csharp
public string StorageAccountUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#storage_account_uri WindowsVirtualMachineScaleSet#storage_account_uri}.

---

### WindowsVirtualMachineScaleSetConfig <a name="WindowsVirtualMachineScaleSetConfig" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AdminPassword,
    string AdminUsername,
    double Instances,
    string Location,
    string Name,
    object NetworkInterface,
    WindowsVirtualMachineScaleSetOsDisk OsDisk,
    string ResourceGroupName,
    string Sku,
    WindowsVirtualMachineScaleSetAdditionalCapabilities AdditionalCapabilities = null,
    object AdditionalUnattendContent = null,
    WindowsVirtualMachineScaleSetAutomaticInstanceRepair AutomaticInstanceRepair = null,
    WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy AutomaticOsUpgradePolicy = null,
    WindowsVirtualMachineScaleSetBootDiagnostics BootDiagnostics = null,
    string CapacityReservationGroupId = null,
    string ComputerNamePrefix = null,
    string CustomData = null,
    object DataDisk = null,
    object DoNotRunExtensionsOnOverprovisionedMachines = null,
    string EdgeZone = null,
    object EnableAutomaticUpdates = null,
    object EncryptionAtHostEnabled = null,
    string EvictionPolicy = null,
    object Extension = null,
    object ExtensionOperationsEnabled = null,
    string ExtensionsTimeBudget = null,
    object GalleryApplication = null,
    object GalleryApplications = null,
    string HealthProbeId = null,
    string HostGroupId = null,
    string Id = null,
    WindowsVirtualMachineScaleSetIdentity Identity = null,
    string LicenseType = null,
    double MaxBidPrice = null,
    object Overprovision = null,
    WindowsVirtualMachineScaleSetPlan Plan = null,
    double PlatformFaultDomainCount = null,
    string Priority = null,
    object ProvisionVmAgent = null,
    string ProximityPlacementGroupId = null,
    WindowsVirtualMachineScaleSetRollingUpgradePolicy RollingUpgradePolicy = null,
    WindowsVirtualMachineScaleSetScaleIn ScaleIn = null,
    string ScaleInPolicy = null,
    object Secret = null,
    object SecureBootEnabled = null,
    object SinglePlacementGroup = null,
    string SourceImageId = null,
    WindowsVirtualMachineScaleSetSourceImageReference SourceImageReference = null,
    WindowsVirtualMachineScaleSetSpotRestore SpotRestore = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    WindowsVirtualMachineScaleSetTerminateNotification TerminateNotification = null,
    WindowsVirtualMachineScaleSetTerminationNotification TerminationNotification = null,
    WindowsVirtualMachineScaleSetTimeouts Timeouts = null,
    string Timezone = null,
    string UpgradeMode = null,
    string UserData = null,
    object VtpmEnabled = null,
    object WinrmListener = null,
    object ZoneBalance = null,
    string[] Zones = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#admin_password WindowsVirtualMachineScaleSet#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.adminUsername">AdminUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#admin_username WindowsVirtualMachineScaleSet#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.instances">Instances</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#instances WindowsVirtualMachineScaleSet#instances}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#location WindowsVirtualMachineScaleSet#location}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.networkInterface">NetworkInterface</a></code> | <code>object</code> | network_interface block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk">WindowsVirtualMachineScaleSetOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#resource_group_name WindowsVirtualMachineScaleSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#sku WindowsVirtualMachineScaleSet#sku}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.additionalCapabilities">AdditionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities">WindowsVirtualMachineScaleSetAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.additionalUnattendContent">AdditionalUnattendContent</a></code> | <code>object</code> | additional_unattend_content block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.automaticInstanceRepair">AutomaticInstanceRepair</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair">WindowsVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | automatic_instance_repair block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.automaticOsUpgradePolicy">AutomaticOsUpgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy</a></code> | automatic_os_upgrade_policy block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.bootDiagnostics">BootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics">WindowsVirtualMachineScaleSetBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.capacityReservationGroupId">CapacityReservationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#capacity_reservation_group_id WindowsVirtualMachineScaleSet#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.computerNamePrefix">ComputerNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#computer_name_prefix WindowsVirtualMachineScaleSet#computer_name_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.customData">CustomData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#custom_data WindowsVirtualMachineScaleSet#custom_data}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.dataDisk">DataDisk</a></code> | <code>object</code> | data_disk block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.doNotRunExtensionsOnOverprovisionedMachines">DoNotRunExtensionsOnOverprovisionedMachines</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#do_not_run_extensions_on_overprovisioned_machines WindowsVirtualMachineScaleSet#do_not_run_extensions_on_overprovisioned_machines}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.edgeZone">EdgeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#edge_zone WindowsVirtualMachineScaleSet#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.enableAutomaticUpdates">EnableAutomaticUpdates</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enable_automatic_updates WindowsVirtualMachineScaleSet#enable_automatic_updates}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#encryption_at_host_enabled WindowsVirtualMachineScaleSet#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.evictionPolicy">EvictionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#eviction_policy WindowsVirtualMachineScaleSet#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.extension">Extension</a></code> | <code>object</code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.extensionOperationsEnabled">ExtensionOperationsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#extension_operations_enabled WindowsVirtualMachineScaleSet#extension_operations_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.extensionsTimeBudget">ExtensionsTimeBudget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#extensions_time_budget WindowsVirtualMachineScaleSet#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.galleryApplication">GalleryApplication</a></code> | <code>object</code> | gallery_application block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.galleryApplications">GalleryApplications</a></code> | <code>object</code> | gallery_applications block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.healthProbeId">HealthProbeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#health_probe_id WindowsVirtualMachineScaleSet#health_probe_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.hostGroupId">HostGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#host_group_id WindowsVirtualMachineScaleSet#host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#id WindowsVirtualMachineScaleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity">WindowsVirtualMachineScaleSetIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.licenseType">LicenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#license_type WindowsVirtualMachineScaleSet#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.maxBidPrice">MaxBidPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#max_bid_price WindowsVirtualMachineScaleSet#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.overprovision">Overprovision</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#overprovision WindowsVirtualMachineScaleSet#overprovision}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan">WindowsVirtualMachineScaleSetPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.platformFaultDomainCount">PlatformFaultDomainCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#platform_fault_domain_count WindowsVirtualMachineScaleSet#platform_fault_domain_count}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.priority">Priority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#priority WindowsVirtualMachineScaleSet#priority}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#provision_vm_agent WindowsVirtualMachineScaleSet#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#proximity_placement_group_id WindowsVirtualMachineScaleSet#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.rollingUpgradePolicy">RollingUpgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy">WindowsVirtualMachineScaleSetRollingUpgradePolicy</a></code> | rolling_upgrade_policy block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.scaleIn">ScaleIn</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn">WindowsVirtualMachineScaleSetScaleIn</a></code> | scale_in block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.scaleInPolicy">ScaleInPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#scale_in_policy WindowsVirtualMachineScaleSet#scale_in_policy}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.secret">Secret</a></code> | <code>object</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.secureBootEnabled">SecureBootEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#secure_boot_enabled WindowsVirtualMachineScaleSet#secure_boot_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.singlePlacementGroup">SinglePlacementGroup</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#single_placement_group WindowsVirtualMachineScaleSet#single_placement_group}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.sourceImageId">SourceImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#source_image_id WindowsVirtualMachineScaleSet#source_image_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.sourceImageReference">SourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference">WindowsVirtualMachineScaleSetSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.spotRestore">SpotRestore</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore">WindowsVirtualMachineScaleSetSpotRestore</a></code> | spot_restore block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#tags WindowsVirtualMachineScaleSet#tags}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.terminateNotification">TerminateNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotification">WindowsVirtualMachineScaleSetTerminateNotification</a></code> | terminate_notification block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.terminationNotification">TerminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification">WindowsVirtualMachineScaleSetTerminationNotification</a></code> | termination_notification block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts">WindowsVirtualMachineScaleSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#timezone WindowsVirtualMachineScaleSet#timezone}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.upgradeMode">UpgradeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#upgrade_mode WindowsVirtualMachineScaleSet#upgrade_mode}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.userData">UserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#user_data WindowsVirtualMachineScaleSet#user_data}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.vtpmEnabled">VtpmEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#vtpm_enabled WindowsVirtualMachineScaleSet#vtpm_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.winrmListener">WinrmListener</a></code> | <code>object</code> | winrm_listener block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.zoneBalance">ZoneBalance</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#zone_balance WindowsVirtualMachineScaleSet#zone_balance}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.zones">Zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#zones WindowsVirtualMachineScaleSet#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#admin_password WindowsVirtualMachineScaleSet#admin_password}.

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.adminUsername"></a>

```csharp
public string AdminUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#admin_username WindowsVirtualMachineScaleSet#admin_username}.

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.instances"></a>

```csharp
public double Instances { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#instances WindowsVirtualMachineScaleSet#instances}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#location WindowsVirtualMachineScaleSet#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}.

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.networkInterface"></a>

```csharp
public object NetworkInterface { get; set; }
```

- *Type:* object

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#network_interface WindowsVirtualMachineScaleSet#network_interface}

---

##### `OsDisk`<sup>Required</sup> <a name="OsDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.osDisk"></a>

```csharp
public WindowsVirtualMachineScaleSetOsDisk OsDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk">WindowsVirtualMachineScaleSetOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#os_disk WindowsVirtualMachineScaleSet#os_disk}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#resource_group_name WindowsVirtualMachineScaleSet#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#sku WindowsVirtualMachineScaleSet#sku}.

---

##### `AdditionalCapabilities`<sup>Optional</sup> <a name="AdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.additionalCapabilities"></a>

```csharp
public WindowsVirtualMachineScaleSetAdditionalCapabilities AdditionalCapabilities { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities">WindowsVirtualMachineScaleSetAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#additional_capabilities WindowsVirtualMachineScaleSet#additional_capabilities}

---

##### `AdditionalUnattendContent`<sup>Optional</sup> <a name="AdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.additionalUnattendContent"></a>

```csharp
public object AdditionalUnattendContent { get; set; }
```

- *Type:* object

additional_unattend_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#additional_unattend_content WindowsVirtualMachineScaleSet#additional_unattend_content}

---

##### `AutomaticInstanceRepair`<sup>Optional</sup> <a name="AutomaticInstanceRepair" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.automaticInstanceRepair"></a>

```csharp
public WindowsVirtualMachineScaleSetAutomaticInstanceRepair AutomaticInstanceRepair { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair">WindowsVirtualMachineScaleSetAutomaticInstanceRepair</a>

automatic_instance_repair block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#automatic_instance_repair WindowsVirtualMachineScaleSet#automatic_instance_repair}

---

##### `AutomaticOsUpgradePolicy`<sup>Optional</sup> <a name="AutomaticOsUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.automaticOsUpgradePolicy"></a>

```csharp
public WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy AutomaticOsUpgradePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

automatic_os_upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#automatic_os_upgrade_policy WindowsVirtualMachineScaleSet#automatic_os_upgrade_policy}

---

##### `BootDiagnostics`<sup>Optional</sup> <a name="BootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.bootDiagnostics"></a>

```csharp
public WindowsVirtualMachineScaleSetBootDiagnostics BootDiagnostics { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics">WindowsVirtualMachineScaleSetBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#boot_diagnostics WindowsVirtualMachineScaleSet#boot_diagnostics}

---

##### `CapacityReservationGroupId`<sup>Optional</sup> <a name="CapacityReservationGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.capacityReservationGroupId"></a>

```csharp
public string CapacityReservationGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#capacity_reservation_group_id WindowsVirtualMachineScaleSet#capacity_reservation_group_id}.

---

##### `ComputerNamePrefix`<sup>Optional</sup> <a name="ComputerNamePrefix" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.computerNamePrefix"></a>

```csharp
public string ComputerNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#computer_name_prefix WindowsVirtualMachineScaleSet#computer_name_prefix}.

---

##### `CustomData`<sup>Optional</sup> <a name="CustomData" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.customData"></a>

```csharp
public string CustomData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#custom_data WindowsVirtualMachineScaleSet#custom_data}.

---

##### `DataDisk`<sup>Optional</sup> <a name="DataDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.dataDisk"></a>

```csharp
public object DataDisk { get; set; }
```

- *Type:* object

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#data_disk WindowsVirtualMachineScaleSet#data_disk}

---

##### `DoNotRunExtensionsOnOverprovisionedMachines`<sup>Optional</sup> <a name="DoNotRunExtensionsOnOverprovisionedMachines" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.doNotRunExtensionsOnOverprovisionedMachines"></a>

```csharp
public object DoNotRunExtensionsOnOverprovisionedMachines { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#do_not_run_extensions_on_overprovisioned_machines WindowsVirtualMachineScaleSet#do_not_run_extensions_on_overprovisioned_machines}.

---

##### `EdgeZone`<sup>Optional</sup> <a name="EdgeZone" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.edgeZone"></a>

```csharp
public string EdgeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#edge_zone WindowsVirtualMachineScaleSet#edge_zone}.

---

##### `EnableAutomaticUpdates`<sup>Optional</sup> <a name="EnableAutomaticUpdates" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.enableAutomaticUpdates"></a>

```csharp
public object EnableAutomaticUpdates { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enable_automatic_updates WindowsVirtualMachineScaleSet#enable_automatic_updates}.

---

##### `EncryptionAtHostEnabled`<sup>Optional</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.encryptionAtHostEnabled"></a>

```csharp
public object EncryptionAtHostEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#encryption_at_host_enabled WindowsVirtualMachineScaleSet#encryption_at_host_enabled}.

---

##### `EvictionPolicy`<sup>Optional</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.evictionPolicy"></a>

```csharp
public string EvictionPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#eviction_policy WindowsVirtualMachineScaleSet#eviction_policy}.

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.extension"></a>

```csharp
public object Extension { get; set; }
```

- *Type:* object

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#extension WindowsVirtualMachineScaleSet#extension}

---

##### `ExtensionOperationsEnabled`<sup>Optional</sup> <a name="ExtensionOperationsEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.extensionOperationsEnabled"></a>

```csharp
public object ExtensionOperationsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#extension_operations_enabled WindowsVirtualMachineScaleSet#extension_operations_enabled}.

---

##### `ExtensionsTimeBudget`<sup>Optional</sup> <a name="ExtensionsTimeBudget" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.extensionsTimeBudget"></a>

```csharp
public string ExtensionsTimeBudget { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#extensions_time_budget WindowsVirtualMachineScaleSet#extensions_time_budget}.

---

##### `GalleryApplication`<sup>Optional</sup> <a name="GalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.galleryApplication"></a>

```csharp
public object GalleryApplication { get; set; }
```

- *Type:* object

gallery_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#gallery_application WindowsVirtualMachineScaleSet#gallery_application}

---

##### `GalleryApplications`<sup>Optional</sup> <a name="GalleryApplications" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.galleryApplications"></a>

```csharp
public object GalleryApplications { get; set; }
```

- *Type:* object

gallery_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#gallery_applications WindowsVirtualMachineScaleSet#gallery_applications}

---

##### `HealthProbeId`<sup>Optional</sup> <a name="HealthProbeId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.healthProbeId"></a>

```csharp
public string HealthProbeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#health_probe_id WindowsVirtualMachineScaleSet#health_probe_id}.

---

##### `HostGroupId`<sup>Optional</sup> <a name="HostGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.hostGroupId"></a>

```csharp
public string HostGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#host_group_id WindowsVirtualMachineScaleSet#host_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#id WindowsVirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.identity"></a>

```csharp
public WindowsVirtualMachineScaleSetIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity">WindowsVirtualMachineScaleSetIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#identity WindowsVirtualMachineScaleSet#identity}

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.licenseType"></a>

```csharp
public string LicenseType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#license_type WindowsVirtualMachineScaleSet#license_type}.

---

##### `MaxBidPrice`<sup>Optional</sup> <a name="MaxBidPrice" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.maxBidPrice"></a>

```csharp
public double MaxBidPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#max_bid_price WindowsVirtualMachineScaleSet#max_bid_price}.

---

##### `Overprovision`<sup>Optional</sup> <a name="Overprovision" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.overprovision"></a>

```csharp
public object Overprovision { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#overprovision WindowsVirtualMachineScaleSet#overprovision}.

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.plan"></a>

```csharp
public WindowsVirtualMachineScaleSetPlan Plan { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan">WindowsVirtualMachineScaleSetPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#plan WindowsVirtualMachineScaleSet#plan}

---

##### `PlatformFaultDomainCount`<sup>Optional</sup> <a name="PlatformFaultDomainCount" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.platformFaultDomainCount"></a>

```csharp
public double PlatformFaultDomainCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#platform_fault_domain_count WindowsVirtualMachineScaleSet#platform_fault_domain_count}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.priority"></a>

```csharp
public string Priority { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#priority WindowsVirtualMachineScaleSet#priority}.

---

##### `ProvisionVmAgent`<sup>Optional</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.provisionVmAgent"></a>

```csharp
public object ProvisionVmAgent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#provision_vm_agent WindowsVirtualMachineScaleSet#provision_vm_agent}.

---

##### `ProximityPlacementGroupId`<sup>Optional</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.proximityPlacementGroupId"></a>

```csharp
public string ProximityPlacementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#proximity_placement_group_id WindowsVirtualMachineScaleSet#proximity_placement_group_id}.

---

##### `RollingUpgradePolicy`<sup>Optional</sup> <a name="RollingUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.rollingUpgradePolicy"></a>

```csharp
public WindowsVirtualMachineScaleSetRollingUpgradePolicy RollingUpgradePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy">WindowsVirtualMachineScaleSetRollingUpgradePolicy</a>

rolling_upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#rolling_upgrade_policy WindowsVirtualMachineScaleSet#rolling_upgrade_policy}

---

##### `ScaleIn`<sup>Optional</sup> <a name="ScaleIn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.scaleIn"></a>

```csharp
public WindowsVirtualMachineScaleSetScaleIn ScaleIn { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn">WindowsVirtualMachineScaleSetScaleIn</a>

scale_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#scale_in WindowsVirtualMachineScaleSet#scale_in}

---

##### `ScaleInPolicy`<sup>Optional</sup> <a name="ScaleInPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.scaleInPolicy"></a>

```csharp
public string ScaleInPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#scale_in_policy WindowsVirtualMachineScaleSet#scale_in_policy}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.secret"></a>

```csharp
public object Secret { get; set; }
```

- *Type:* object

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#secret WindowsVirtualMachineScaleSet#secret}

---

##### `SecureBootEnabled`<sup>Optional</sup> <a name="SecureBootEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.secureBootEnabled"></a>

```csharp
public object SecureBootEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#secure_boot_enabled WindowsVirtualMachineScaleSet#secure_boot_enabled}.

---

##### `SinglePlacementGroup`<sup>Optional</sup> <a name="SinglePlacementGroup" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.singlePlacementGroup"></a>

```csharp
public object SinglePlacementGroup { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#single_placement_group WindowsVirtualMachineScaleSet#single_placement_group}.

---

##### `SourceImageId`<sup>Optional</sup> <a name="SourceImageId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.sourceImageId"></a>

```csharp
public string SourceImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#source_image_id WindowsVirtualMachineScaleSet#source_image_id}.

---

##### `SourceImageReference`<sup>Optional</sup> <a name="SourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.sourceImageReference"></a>

```csharp
public WindowsVirtualMachineScaleSetSourceImageReference SourceImageReference { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference">WindowsVirtualMachineScaleSetSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#source_image_reference WindowsVirtualMachineScaleSet#source_image_reference}

---

##### `SpotRestore`<sup>Optional</sup> <a name="SpotRestore" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.spotRestore"></a>

```csharp
public WindowsVirtualMachineScaleSetSpotRestore SpotRestore { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore">WindowsVirtualMachineScaleSetSpotRestore</a>

spot_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#spot_restore WindowsVirtualMachineScaleSet#spot_restore}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#tags WindowsVirtualMachineScaleSet#tags}.

---

##### `TerminateNotification`<sup>Optional</sup> <a name="TerminateNotification" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.terminateNotification"></a>

```csharp
public WindowsVirtualMachineScaleSetTerminateNotification TerminateNotification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotification">WindowsVirtualMachineScaleSetTerminateNotification</a>

terminate_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#terminate_notification WindowsVirtualMachineScaleSet#terminate_notification}

---

##### `TerminationNotification`<sup>Optional</sup> <a name="TerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.terminationNotification"></a>

```csharp
public WindowsVirtualMachineScaleSetTerminationNotification TerminationNotification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification">WindowsVirtualMachineScaleSetTerminationNotification</a>

termination_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#termination_notification WindowsVirtualMachineScaleSet#termination_notification}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.timeouts"></a>

```csharp
public WindowsVirtualMachineScaleSetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts">WindowsVirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#timeouts WindowsVirtualMachineScaleSet#timeouts}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#timezone WindowsVirtualMachineScaleSet#timezone}.

---

##### `UpgradeMode`<sup>Optional</sup> <a name="UpgradeMode" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.upgradeMode"></a>

```csharp
public string UpgradeMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#upgrade_mode WindowsVirtualMachineScaleSet#upgrade_mode}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#user_data WindowsVirtualMachineScaleSet#user_data}.

---

##### `VtpmEnabled`<sup>Optional</sup> <a name="VtpmEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.vtpmEnabled"></a>

```csharp
public object VtpmEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#vtpm_enabled WindowsVirtualMachineScaleSet#vtpm_enabled}.

---

##### `WinrmListener`<sup>Optional</sup> <a name="WinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.winrmListener"></a>

```csharp
public object WinrmListener { get; set; }
```

- *Type:* object

winrm_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#winrm_listener WindowsVirtualMachineScaleSet#winrm_listener}

---

##### `ZoneBalance`<sup>Optional</sup> <a name="ZoneBalance" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.zoneBalance"></a>

```csharp
public object ZoneBalance { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#zone_balance WindowsVirtualMachineScaleSet#zone_balance}.

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetConfig.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#zones WindowsVirtualMachineScaleSet#zones}.

---

### WindowsVirtualMachineScaleSetDataDisk <a name="WindowsVirtualMachineScaleSetDataDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetDataDisk {
    string Caching,
    double DiskSizeGb,
    double Lun,
    string StorageAccountType,
    string CreateOption = null,
    string DiskEncryptionSetId = null,
    string Name = null,
    double UltraSsdDiskIopsReadWrite = null,
    double UltraSsdDiskMbpsReadWrite = null,
    object WriteAcceleratorEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.caching">Caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#caching WindowsVirtualMachineScaleSet#caching}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#disk_size_gb WindowsVirtualMachineScaleSet#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.lun">Lun</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#lun WindowsVirtualMachineScaleSet#lun}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#storage_account_type WindowsVirtualMachineScaleSet#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.createOption">CreateOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#create_option WindowsVirtualMachineScaleSet#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#disk_encryption_set_id WindowsVirtualMachineScaleSet#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.ultraSsdDiskIopsReadWrite">UltraSsdDiskIopsReadWrite</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#ultra_ssd_disk_iops_read_write WindowsVirtualMachineScaleSet#ultra_ssd_disk_iops_read_write}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.ultraSsdDiskMbpsReadWrite">UltraSsdDiskMbpsReadWrite</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#ultra_ssd_disk_mbps_read_write WindowsVirtualMachineScaleSet#ultra_ssd_disk_mbps_read_write}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#write_accelerator_enabled WindowsVirtualMachineScaleSet#write_accelerator_enabled}. |

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.caching"></a>

```csharp
public string Caching { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#caching WindowsVirtualMachineScaleSet#caching}.

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#disk_size_gb WindowsVirtualMachineScaleSet#disk_size_gb}.

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.lun"></a>

```csharp
public double Lun { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#lun WindowsVirtualMachineScaleSet#lun}.

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#storage_account_type WindowsVirtualMachineScaleSet#storage_account_type}.

---

##### `CreateOption`<sup>Optional</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.createOption"></a>

```csharp
public string CreateOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#create_option WindowsVirtualMachineScaleSet#create_option}.

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#disk_encryption_set_id WindowsVirtualMachineScaleSet#disk_encryption_set_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}.

---

##### `UltraSsdDiskIopsReadWrite`<sup>Optional</sup> <a name="UltraSsdDiskIopsReadWrite" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.ultraSsdDiskIopsReadWrite"></a>

```csharp
public double UltraSsdDiskIopsReadWrite { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#ultra_ssd_disk_iops_read_write WindowsVirtualMachineScaleSet#ultra_ssd_disk_iops_read_write}.

---

##### `UltraSsdDiskMbpsReadWrite`<sup>Optional</sup> <a name="UltraSsdDiskMbpsReadWrite" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.ultraSsdDiskMbpsReadWrite"></a>

```csharp
public double UltraSsdDiskMbpsReadWrite { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#ultra_ssd_disk_mbps_read_write WindowsVirtualMachineScaleSet#ultra_ssd_disk_mbps_read_write}.

---

##### `WriteAcceleratorEnabled`<sup>Optional</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDisk.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#write_accelerator_enabled WindowsVirtualMachineScaleSet#write_accelerator_enabled}.

---

### WindowsVirtualMachineScaleSetExtension <a name="WindowsVirtualMachineScaleSetExtension" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetExtension {
    string Name,
    string Publisher,
    string Type,
    string TypeHandlerVersion,
    object AutomaticUpgradeEnabled = null,
    object AutoUpgradeMinorVersion = null,
    string ForceUpdateTag = null,
    string ProtectedSettings = null,
    WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault ProtectedSettingsFromKeyVault = null,
    string[] ProvisionAfterExtensions = null,
    string Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#publisher WindowsVirtualMachineScaleSet#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#type WindowsVirtualMachineScaleSet#type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.typeHandlerVersion">TypeHandlerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#type_handler_version WindowsVirtualMachineScaleSet#type_handler_version}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.automaticUpgradeEnabled">AutomaticUpgradeEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#automatic_upgrade_enabled WindowsVirtualMachineScaleSet#automatic_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.autoUpgradeMinorVersion">AutoUpgradeMinorVersion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#auto_upgrade_minor_version WindowsVirtualMachineScaleSet#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.forceUpdateTag">ForceUpdateTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#force_update_tag WindowsVirtualMachineScaleSet#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.protectedSettings">ProtectedSettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#protected_settings WindowsVirtualMachineScaleSet#protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.protectedSettingsFromKeyVault">ProtectedSettingsFromKeyVault</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | protected_settings_from_key_vault block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.provisionAfterExtensions">ProvisionAfterExtensions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#provision_after_extensions WindowsVirtualMachineScaleSet#provision_after_extensions}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.settings">Settings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#settings WindowsVirtualMachineScaleSet#settings}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#publisher WindowsVirtualMachineScaleSet#publisher}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#type WindowsVirtualMachineScaleSet#type}.

---

##### `TypeHandlerVersion`<sup>Required</sup> <a name="TypeHandlerVersion" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.typeHandlerVersion"></a>

```csharp
public string TypeHandlerVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#type_handler_version WindowsVirtualMachineScaleSet#type_handler_version}.

---

##### `AutomaticUpgradeEnabled`<sup>Optional</sup> <a name="AutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.automaticUpgradeEnabled"></a>

```csharp
public object AutomaticUpgradeEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#automatic_upgrade_enabled WindowsVirtualMachineScaleSet#automatic_upgrade_enabled}.

---

##### `AutoUpgradeMinorVersion`<sup>Optional</sup> <a name="AutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.autoUpgradeMinorVersion"></a>

```csharp
public object AutoUpgradeMinorVersion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#auto_upgrade_minor_version WindowsVirtualMachineScaleSet#auto_upgrade_minor_version}.

---

##### `ForceUpdateTag`<sup>Optional</sup> <a name="ForceUpdateTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.forceUpdateTag"></a>

```csharp
public string ForceUpdateTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#force_update_tag WindowsVirtualMachineScaleSet#force_update_tag}.

---

##### `ProtectedSettings`<sup>Optional</sup> <a name="ProtectedSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.protectedSettings"></a>

```csharp
public string ProtectedSettings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#protected_settings WindowsVirtualMachineScaleSet#protected_settings}.

---

##### `ProtectedSettingsFromKeyVault`<sup>Optional</sup> <a name="ProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.protectedSettingsFromKeyVault"></a>

```csharp
public WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault ProtectedSettingsFromKeyVault { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

protected_settings_from_key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#protected_settings_from_key_vault WindowsVirtualMachineScaleSet#protected_settings_from_key_vault}

---

##### `ProvisionAfterExtensions`<sup>Optional</sup> <a name="ProvisionAfterExtensions" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.provisionAfterExtensions"></a>

```csharp
public string[] ProvisionAfterExtensions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#provision_after_extensions WindowsVirtualMachineScaleSet#provision_after_extensions}.

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtension.property.settings"></a>

```csharp
public string Settings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#settings WindowsVirtualMachineScaleSet#settings}.

---

### WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault <a name="WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault {
    string SecretUrl,
    string SourceVaultId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.secretUrl">SecretUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#secret_url WindowsVirtualMachineScaleSet#secret_url}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.sourceVaultId">SourceVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#source_vault_id WindowsVirtualMachineScaleSet#source_vault_id}. |

---

##### `SecretUrl`<sup>Required</sup> <a name="SecretUrl" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.secretUrl"></a>

```csharp
public string SecretUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#secret_url WindowsVirtualMachineScaleSet#secret_url}.

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.sourceVaultId"></a>

```csharp
public string SourceVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#source_vault_id WindowsVirtualMachineScaleSet#source_vault_id}.

---

### WindowsVirtualMachineScaleSetGalleryApplication <a name="WindowsVirtualMachineScaleSetGalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetGalleryApplication {
    string VersionId,
    string ConfigurationBlobUri = null,
    double Order = null,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.versionId">VersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#version_id WindowsVirtualMachineScaleSet#version_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.configurationBlobUri">ConfigurationBlobUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#configuration_blob_uri WindowsVirtualMachineScaleSet#configuration_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.order">Order</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#order WindowsVirtualMachineScaleSet#order}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.tag">Tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#tag WindowsVirtualMachineScaleSet#tag}. |

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#version_id WindowsVirtualMachineScaleSet#version_id}.

---

##### `ConfigurationBlobUri`<sup>Optional</sup> <a name="ConfigurationBlobUri" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.configurationBlobUri"></a>

```csharp
public string ConfigurationBlobUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#configuration_blob_uri WindowsVirtualMachineScaleSet#configuration_blob_uri}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#order WindowsVirtualMachineScaleSet#order}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplication.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#tag WindowsVirtualMachineScaleSet#tag}.

---

### WindowsVirtualMachineScaleSetGalleryApplications <a name="WindowsVirtualMachineScaleSetGalleryApplications" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetGalleryApplications {
    string PackageReferenceId,
    string ConfigurationReferenceBlobUri = null,
    double Order = null,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplications.property.packageReferenceId">PackageReferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#package_reference_id WindowsVirtualMachineScaleSet#package_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplications.property.configurationReferenceBlobUri">ConfigurationReferenceBlobUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#configuration_reference_blob_uri WindowsVirtualMachineScaleSet#configuration_reference_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplications.property.order">Order</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#order WindowsVirtualMachineScaleSet#order}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplications.property.tag">Tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#tag WindowsVirtualMachineScaleSet#tag}. |

---

##### `PackageReferenceId`<sup>Required</sup> <a name="PackageReferenceId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplications.property.packageReferenceId"></a>

```csharp
public string PackageReferenceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#package_reference_id WindowsVirtualMachineScaleSet#package_reference_id}.

---

##### `ConfigurationReferenceBlobUri`<sup>Optional</sup> <a name="ConfigurationReferenceBlobUri" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplications.property.configurationReferenceBlobUri"></a>

```csharp
public string ConfigurationReferenceBlobUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#configuration_reference_blob_uri WindowsVirtualMachineScaleSet#configuration_reference_blob_uri}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplications.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#order WindowsVirtualMachineScaleSet#order}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplications.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#tag WindowsVirtualMachineScaleSet#tag}.

---

### WindowsVirtualMachineScaleSetIdentity <a name="WindowsVirtualMachineScaleSetIdentity" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#type WindowsVirtualMachineScaleSet#type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#identity_ids WindowsVirtualMachineScaleSet#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#type WindowsVirtualMachineScaleSet#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#identity_ids WindowsVirtualMachineScaleSet#identity_ids}.

---

### WindowsVirtualMachineScaleSetNetworkInterface <a name="WindowsVirtualMachineScaleSetNetworkInterface" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetNetworkInterface {
    object IpConfiguration,
    string Name,
    string[] DnsServers = null,
    object EnableAcceleratedNetworking = null,
    object EnableIpForwarding = null,
    string NetworkSecurityGroupId = null,
    object Primary = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.ipConfiguration">IpConfiguration</a></code> | <code>object</code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#dns_servers WindowsVirtualMachineScaleSet#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.enableAcceleratedNetworking">EnableAcceleratedNetworking</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enable_accelerated_networking WindowsVirtualMachineScaleSet#enable_accelerated_networking}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.enableIpForwarding">EnableIpForwarding</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enable_ip_forwarding WindowsVirtualMachineScaleSet#enable_ip_forwarding}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#network_security_group_id WindowsVirtualMachineScaleSet#network_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.primary">Primary</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#primary WindowsVirtualMachineScaleSet#primary}. |

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.ipConfiguration"></a>

```csharp
public object IpConfiguration { get; set; }
```

- *Type:* object

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#ip_configuration WindowsVirtualMachineScaleSet#ip_configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}.

---

##### `DnsServers`<sup>Optional</sup> <a name="DnsServers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#dns_servers WindowsVirtualMachineScaleSet#dns_servers}.

---

##### `EnableAcceleratedNetworking`<sup>Optional</sup> <a name="EnableAcceleratedNetworking" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.enableAcceleratedNetworking"></a>

```csharp
public object EnableAcceleratedNetworking { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enable_accelerated_networking WindowsVirtualMachineScaleSet#enable_accelerated_networking}.

---

##### `EnableIpForwarding`<sup>Optional</sup> <a name="EnableIpForwarding" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.enableIpForwarding"></a>

```csharp
public object EnableIpForwarding { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enable_ip_forwarding WindowsVirtualMachineScaleSet#enable_ip_forwarding}.

---

##### `NetworkSecurityGroupId`<sup>Optional</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.networkSecurityGroupId"></a>

```csharp
public string NetworkSecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#network_security_group_id WindowsVirtualMachineScaleSet#network_security_group_id}.

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterface.property.primary"></a>

```csharp
public object Primary { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#primary WindowsVirtualMachineScaleSet#primary}.

---

### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration {
    string Name,
    string[] ApplicationGatewayBackendAddressPoolIds = null,
    string[] ApplicationSecurityGroupIds = null,
    string[] LoadBalancerBackendAddressPoolIds = null,
    string[] LoadBalancerInboundNatRulesIds = null,
    object Primary = null,
    object PublicIpAddress = null,
    string SubnetId = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationGatewayBackendAddressPoolIds">ApplicationGatewayBackendAddressPoolIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#application_gateway_backend_address_pool_ids WindowsVirtualMachineScaleSet#application_gateway_backend_address_pool_ids}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationSecurityGroupIds">ApplicationSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#application_security_group_ids WindowsVirtualMachineScaleSet#application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerBackendAddressPoolIds">LoadBalancerBackendAddressPoolIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#load_balancer_backend_address_pool_ids WindowsVirtualMachineScaleSet#load_balancer_backend_address_pool_ids}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerInboundNatRulesIds">LoadBalancerInboundNatRulesIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#load_balancer_inbound_nat_rules_ids WindowsVirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.primary">Primary</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#primary WindowsVirtualMachineScaleSet#primary}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.publicIpAddress">PublicIpAddress</a></code> | <code>object</code> | public_ip_address block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#subnet_id WindowsVirtualMachineScaleSet#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#version WindowsVirtualMachineScaleSet#version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}.

---

##### `ApplicationGatewayBackendAddressPoolIds`<sup>Optional</sup> <a name="ApplicationGatewayBackendAddressPoolIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationGatewayBackendAddressPoolIds"></a>

```csharp
public string[] ApplicationGatewayBackendAddressPoolIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#application_gateway_backend_address_pool_ids WindowsVirtualMachineScaleSet#application_gateway_backend_address_pool_ids}.

---

##### `ApplicationSecurityGroupIds`<sup>Optional</sup> <a name="ApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationSecurityGroupIds"></a>

```csharp
public string[] ApplicationSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#application_security_group_ids WindowsVirtualMachineScaleSet#application_security_group_ids}.

---

##### `LoadBalancerBackendAddressPoolIds`<sup>Optional</sup> <a name="LoadBalancerBackendAddressPoolIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerBackendAddressPoolIds"></a>

```csharp
public string[] LoadBalancerBackendAddressPoolIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#load_balancer_backend_address_pool_ids WindowsVirtualMachineScaleSet#load_balancer_backend_address_pool_ids}.

---

##### `LoadBalancerInboundNatRulesIds`<sup>Optional</sup> <a name="LoadBalancerInboundNatRulesIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerInboundNatRulesIds"></a>

```csharp
public string[] LoadBalancerInboundNatRulesIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#load_balancer_inbound_nat_rules_ids WindowsVirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}.

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.primary"></a>

```csharp
public object Primary { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#primary WindowsVirtualMachineScaleSet#primary}.

---

##### `PublicIpAddress`<sup>Optional</sup> <a name="PublicIpAddress" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.publicIpAddress"></a>

```csharp
public object PublicIpAddress { get; set; }
```

- *Type:* object

public_ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#public_ip_address WindowsVirtualMachineScaleSet#public_ip_address}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#subnet_id WindowsVirtualMachineScaleSet#subnet_id}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#version WindowsVirtualMachineScaleSet#version}.

---

### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress {
    string Name,
    string DomainNameLabel = null,
    double IdleTimeoutInMinutes = null,
    object IpTag = null,
    string PublicIpPrefixId = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.domainNameLabel">DomainNameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#domain_name_label WindowsVirtualMachineScaleSet#domain_name_label}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#idle_timeout_in_minutes WindowsVirtualMachineScaleSet#idle_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.ipTag">IpTag</a></code> | <code>object</code> | ip_tag block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.publicIpPrefixId">PublicIpPrefixId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#public_ip_prefix_id WindowsVirtualMachineScaleSet#public_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#version WindowsVirtualMachineScaleSet#version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}.

---

##### `DomainNameLabel`<sup>Optional</sup> <a name="DomainNameLabel" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.domainNameLabel"></a>

```csharp
public string DomainNameLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#domain_name_label WindowsVirtualMachineScaleSet#domain_name_label}.

---

##### `IdleTimeoutInMinutes`<sup>Optional</sup> <a name="IdleTimeoutInMinutes" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.idleTimeoutInMinutes"></a>

```csharp
public double IdleTimeoutInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#idle_timeout_in_minutes WindowsVirtualMachineScaleSet#idle_timeout_in_minutes}.

---

##### `IpTag`<sup>Optional</sup> <a name="IpTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.ipTag"></a>

```csharp
public object IpTag { get; set; }
```

- *Type:* object

ip_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#ip_tag WindowsVirtualMachineScaleSet#ip_tag}

---

##### `PublicIpPrefixId`<sup>Optional</sup> <a name="PublicIpPrefixId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.publicIpPrefixId"></a>

```csharp
public string PublicIpPrefixId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#public_ip_prefix_id WindowsVirtualMachineScaleSet#public_ip_prefix_id}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#version WindowsVirtualMachineScaleSet#version}.

---

### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag {
    string Tag,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.tag">Tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#tag WindowsVirtualMachineScaleSet#tag}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#type WindowsVirtualMachineScaleSet#type}. |

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#tag WindowsVirtualMachineScaleSet#tag}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#type WindowsVirtualMachineScaleSet#type}.

---

### WindowsVirtualMachineScaleSetOsDisk <a name="WindowsVirtualMachineScaleSetOsDisk" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetOsDisk {
    string Caching,
    string StorageAccountType,
    WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings DiffDiskSettings = null,
    string DiskEncryptionSetId = null,
    double DiskSizeGb = null,
    string SecureVmDiskEncryptionSetId = null,
    string SecurityEncryptionType = null,
    object WriteAcceleratorEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.caching">Caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#caching WindowsVirtualMachineScaleSet#caching}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#storage_account_type WindowsVirtualMachineScaleSet#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.diffDiskSettings">DiffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings</a></code> | diff_disk_settings block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#disk_encryption_set_id WindowsVirtualMachineScaleSet#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#disk_size_gb WindowsVirtualMachineScaleSet#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.secureVmDiskEncryptionSetId">SecureVmDiskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#secure_vm_disk_encryption_set_id WindowsVirtualMachineScaleSet#secure_vm_disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.securityEncryptionType">SecurityEncryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#security_encryption_type WindowsVirtualMachineScaleSet#security_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#write_accelerator_enabled WindowsVirtualMachineScaleSet#write_accelerator_enabled}. |

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.caching"></a>

```csharp
public string Caching { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#caching WindowsVirtualMachineScaleSet#caching}.

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#storage_account_type WindowsVirtualMachineScaleSet#storage_account_type}.

---

##### `DiffDiskSettings`<sup>Optional</sup> <a name="DiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.diffDiskSettings"></a>

```csharp
public WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings DiffDiskSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#diff_disk_settings WindowsVirtualMachineScaleSet#diff_disk_settings}

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#disk_encryption_set_id WindowsVirtualMachineScaleSet#disk_encryption_set_id}.

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#disk_size_gb WindowsVirtualMachineScaleSet#disk_size_gb}.

---

##### `SecureVmDiskEncryptionSetId`<sup>Optional</sup> <a name="SecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.secureVmDiskEncryptionSetId"></a>

```csharp
public string SecureVmDiskEncryptionSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#secure_vm_disk_encryption_set_id WindowsVirtualMachineScaleSet#secure_vm_disk_encryption_set_id}.

---

##### `SecurityEncryptionType`<sup>Optional</sup> <a name="SecurityEncryptionType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.securityEncryptionType"></a>

```csharp
public string SecurityEncryptionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#security_encryption_type WindowsVirtualMachineScaleSet#security_encryption_type}.

---

##### `WriteAcceleratorEnabled`<sup>Optional</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#write_accelerator_enabled WindowsVirtualMachineScaleSet#write_accelerator_enabled}.

---

### WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings <a name="WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings {
    string Option,
    string Placement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings.property.option">Option</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#option WindowsVirtualMachineScaleSet#option}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings.property.placement">Placement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#placement WindowsVirtualMachineScaleSet#placement}. |

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings.property.option"></a>

```csharp
public string Option { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#option WindowsVirtualMachineScaleSet#option}.

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings.property.placement"></a>

```csharp
public string Placement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#placement WindowsVirtualMachineScaleSet#placement}.

---

### WindowsVirtualMachineScaleSetPlan <a name="WindowsVirtualMachineScaleSetPlan" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetPlan {
    string Name,
    string Product,
    string Publisher
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan.property.product">Product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#product WindowsVirtualMachineScaleSet#product}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#publisher WindowsVirtualMachineScaleSet#publisher}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan.property.product"></a>

```csharp
public string Product { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#product WindowsVirtualMachineScaleSet#product}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#publisher WindowsVirtualMachineScaleSet#publisher}.

---

### WindowsVirtualMachineScaleSetRollingUpgradePolicy <a name="WindowsVirtualMachineScaleSetRollingUpgradePolicy" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetRollingUpgradePolicy {
    double MaxBatchInstancePercent,
    double MaxUnhealthyInstancePercent,
    double MaxUnhealthyUpgradedInstancePercent,
    string PauseTimeBetweenBatches,
    object CrossZoneUpgradesEnabled = null,
    object MaximumSurgeInstancesEnabled = null,
    object PrioritizeUnhealthyInstancesEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maxBatchInstancePercent">MaxBatchInstancePercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#max_batch_instance_percent WindowsVirtualMachineScaleSet#max_batch_instance_percent}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyInstancePercent">MaxUnhealthyInstancePercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#max_unhealthy_instance_percent WindowsVirtualMachineScaleSet#max_unhealthy_instance_percent}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyUpgradedInstancePercent">MaxUnhealthyUpgradedInstancePercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#max_unhealthy_upgraded_instance_percent WindowsVirtualMachineScaleSet#max_unhealthy_upgraded_instance_percent}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.pauseTimeBetweenBatches">PauseTimeBetweenBatches</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#pause_time_between_batches WindowsVirtualMachineScaleSet#pause_time_between_batches}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.crossZoneUpgradesEnabled">CrossZoneUpgradesEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#cross_zone_upgrades_enabled WindowsVirtualMachineScaleSet#cross_zone_upgrades_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maximumSurgeInstancesEnabled">MaximumSurgeInstancesEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#maximum_surge_instances_enabled WindowsVirtualMachineScaleSet#maximum_surge_instances_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.prioritizeUnhealthyInstancesEnabled">PrioritizeUnhealthyInstancesEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#prioritize_unhealthy_instances_enabled WindowsVirtualMachineScaleSet#prioritize_unhealthy_instances_enabled}. |

---

##### `MaxBatchInstancePercent`<sup>Required</sup> <a name="MaxBatchInstancePercent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maxBatchInstancePercent"></a>

```csharp
public double MaxBatchInstancePercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#max_batch_instance_percent WindowsVirtualMachineScaleSet#max_batch_instance_percent}.

---

##### `MaxUnhealthyInstancePercent`<sup>Required</sup> <a name="MaxUnhealthyInstancePercent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyInstancePercent"></a>

```csharp
public double MaxUnhealthyInstancePercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#max_unhealthy_instance_percent WindowsVirtualMachineScaleSet#max_unhealthy_instance_percent}.

---

##### `MaxUnhealthyUpgradedInstancePercent`<sup>Required</sup> <a name="MaxUnhealthyUpgradedInstancePercent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyUpgradedInstancePercent"></a>

```csharp
public double MaxUnhealthyUpgradedInstancePercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#max_unhealthy_upgraded_instance_percent WindowsVirtualMachineScaleSet#max_unhealthy_upgraded_instance_percent}.

---

##### `PauseTimeBetweenBatches`<sup>Required</sup> <a name="PauseTimeBetweenBatches" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.pauseTimeBetweenBatches"></a>

```csharp
public string PauseTimeBetweenBatches { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#pause_time_between_batches WindowsVirtualMachineScaleSet#pause_time_between_batches}.

---

##### `CrossZoneUpgradesEnabled`<sup>Optional</sup> <a name="CrossZoneUpgradesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.crossZoneUpgradesEnabled"></a>

```csharp
public object CrossZoneUpgradesEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#cross_zone_upgrades_enabled WindowsVirtualMachineScaleSet#cross_zone_upgrades_enabled}.

---

##### `MaximumSurgeInstancesEnabled`<sup>Optional</sup> <a name="MaximumSurgeInstancesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.maximumSurgeInstancesEnabled"></a>

```csharp
public object MaximumSurgeInstancesEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#maximum_surge_instances_enabled WindowsVirtualMachineScaleSet#maximum_surge_instances_enabled}.

---

##### `PrioritizeUnhealthyInstancesEnabled`<sup>Optional</sup> <a name="PrioritizeUnhealthyInstancesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy.property.prioritizeUnhealthyInstancesEnabled"></a>

```csharp
public object PrioritizeUnhealthyInstancesEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#prioritize_unhealthy_instances_enabled WindowsVirtualMachineScaleSet#prioritize_unhealthy_instances_enabled}.

---

### WindowsVirtualMachineScaleSetScaleIn <a name="WindowsVirtualMachineScaleSetScaleIn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetScaleIn {
    object ForceDeletionEnabled = null,
    string Rule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn.property.forceDeletionEnabled">ForceDeletionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#force_deletion_enabled WindowsVirtualMachineScaleSet#force_deletion_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn.property.rule">Rule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#rule WindowsVirtualMachineScaleSet#rule}. |

---

##### `ForceDeletionEnabled`<sup>Optional</sup> <a name="ForceDeletionEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn.property.forceDeletionEnabled"></a>

```csharp
public object ForceDeletionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#force_deletion_enabled WindowsVirtualMachineScaleSet#force_deletion_enabled}.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn.property.rule"></a>

```csharp
public string Rule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#rule WindowsVirtualMachineScaleSet#rule}.

---

### WindowsVirtualMachineScaleSetSecret <a name="WindowsVirtualMachineScaleSetSecret" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetSecret {
    object Certificate,
    string KeyVaultId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecret.property.certificate">Certificate</a></code> | <code>object</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecret.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#key_vault_id WindowsVirtualMachineScaleSet#key_vault_id}. |

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecret.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#certificate WindowsVirtualMachineScaleSet#certificate}

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecret.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#key_vault_id WindowsVirtualMachineScaleSet#key_vault_id}.

---

### WindowsVirtualMachineScaleSetSecretCertificate <a name="WindowsVirtualMachineScaleSetSecretCertificate" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetSecretCertificate {
    string Store,
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificate.property.store">Store</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#store WindowsVirtualMachineScaleSet#store}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificate.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#url WindowsVirtualMachineScaleSet#url}. |

---

##### `Store`<sup>Required</sup> <a name="Store" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificate.property.store"></a>

```csharp
public string Store { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#store WindowsVirtualMachineScaleSet#store}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificate.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#url WindowsVirtualMachineScaleSet#url}.

---

### WindowsVirtualMachineScaleSetSourceImageReference <a name="WindowsVirtualMachineScaleSetSourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetSourceImageReference {
    string Offer,
    string Publisher,
    string Sku,
    string Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.offer">Offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#offer WindowsVirtualMachineScaleSet#offer}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#publisher WindowsVirtualMachineScaleSet#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#sku WindowsVirtualMachineScaleSet#sku}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#version WindowsVirtualMachineScaleSet#version}. |

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.offer"></a>

```csharp
public string Offer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#offer WindowsVirtualMachineScaleSet#offer}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#publisher WindowsVirtualMachineScaleSet#publisher}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#sku WindowsVirtualMachineScaleSet#sku}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#version WindowsVirtualMachineScaleSet#version}.

---

### WindowsVirtualMachineScaleSetSpotRestore <a name="WindowsVirtualMachineScaleSetSpotRestore" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetSpotRestore {
    object Enabled = null,
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore.property.timeout">Timeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#timeout WindowsVirtualMachineScaleSet#timeout}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#timeout WindowsVirtualMachineScaleSet#timeout}.

---

### WindowsVirtualMachineScaleSetTerminateNotification <a name="WindowsVirtualMachineScaleSetTerminateNotification" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetTerminateNotification {
    object Enabled,
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotification.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotification.property.timeout">Timeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#timeout WindowsVirtualMachineScaleSet#timeout}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotification.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotification.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#timeout WindowsVirtualMachineScaleSet#timeout}.

---

### WindowsVirtualMachineScaleSetTerminationNotification <a name="WindowsVirtualMachineScaleSetTerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetTerminationNotification {
    object Enabled,
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification.property.timeout">Timeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#timeout WindowsVirtualMachineScaleSet#timeout}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#timeout WindowsVirtualMachineScaleSet#timeout}.

---

### WindowsVirtualMachineScaleSetTimeouts <a name="WindowsVirtualMachineScaleSetTimeouts" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#create WindowsVirtualMachineScaleSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#delete WindowsVirtualMachineScaleSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#read WindowsVirtualMachineScaleSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#update WindowsVirtualMachineScaleSet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#create WindowsVirtualMachineScaleSet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#delete WindowsVirtualMachineScaleSet#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#read WindowsVirtualMachineScaleSet#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#update WindowsVirtualMachineScaleSet#update}.

---

### WindowsVirtualMachineScaleSetWinrmListener <a name="WindowsVirtualMachineScaleSetWinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListener.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetWinrmListener {
    string Protocol,
    string CertificateUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListener.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#protocol WindowsVirtualMachineScaleSet#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListener.property.certificateUrl">CertificateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#certificate_url WindowsVirtualMachineScaleSet#certificate_url}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListener.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#protocol WindowsVirtualMachineScaleSet#protocol}.

---

##### `CertificateUrl`<sup>Optional</sup> <a name="CertificateUrl" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListener.property.certificateUrl"></a>

```csharp
public string CertificateUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/windows_virtual_machine_scale_set#certificate_url WindowsVirtualMachineScaleSet#certificate_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference <a name="WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled">ResetUltraSsdEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUltraSsdEnabled` <a name="ResetUltraSsdEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled"></a>

```csharp
private void ResetUltraSsdEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput">UltraSsdEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled">UltraSsdEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities">WindowsVirtualMachineScaleSetAdditionalCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UltraSsdEnabledInput`<sup>Optional</sup> <a name="UltraSsdEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput"></a>

```csharp
public object UltraSsdEnabledInput { get; }
```

- *Type:* object

---

##### `UltraSsdEnabled`<sup>Required</sup> <a name="UltraSsdEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled"></a>

```csharp
public object UltraSsdEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineScaleSetAdditionalCapabilities InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalCapabilities">WindowsVirtualMachineScaleSetAdditionalCapabilities</a>

---


### WindowsVirtualMachineScaleSetAdditionalUnattendContentList <a name="WindowsVirtualMachineScaleSetAdditionalUnattendContentList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetAdditionalUnattendContentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.get"></a>

```csharp
private WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference <a name="WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.settingInput">SettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.setting">Setting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `SettingInput`<sup>Optional</sup> <a name="SettingInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.settingInput"></a>

```csharp
public string SettingInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Setting`<sup>Required</sup> <a name="Setting" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.setting"></a>

```csharp
public string Setting { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference <a name="WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resetGracePeriod"></a>

```csharp
private void ResetGracePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair">WindowsVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriodInput"></a>

```csharp
public string GracePeriodInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriod"></a>

```csharp
public string GracePeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineScaleSetAutomaticInstanceRepair InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticInstanceRepair">WindowsVirtualMachineScaleSetAutomaticInstanceRepair</a>

---


### WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference <a name="WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollbackInput">DisableAutomaticRollbackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgradeInput">EnableAutomaticOsUpgradeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollback">DisableAutomaticRollback</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgrade">EnableAutomaticOsUpgrade</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableAutomaticRollbackInput`<sup>Optional</sup> <a name="DisableAutomaticRollbackInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollbackInput"></a>

```csharp
public object DisableAutomaticRollbackInput { get; }
```

- *Type:* object

---

##### `EnableAutomaticOsUpgradeInput`<sup>Optional</sup> <a name="EnableAutomaticOsUpgradeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgradeInput"></a>

```csharp
public object EnableAutomaticOsUpgradeInput { get; }
```

- *Type:* object

---

##### `DisableAutomaticRollback`<sup>Required</sup> <a name="DisableAutomaticRollback" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollback"></a>

```csharp
public object DisableAutomaticRollback { get; }
```

- *Type:* object

---

##### `EnableAutomaticOsUpgrade`<sup>Required</sup> <a name="EnableAutomaticOsUpgrade" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgrade"></a>

```csharp
public object EnableAutomaticOsUpgrade { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy">WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

---


### WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference <a name="WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.resetStorageAccountUri">ResetStorageAccountUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageAccountUri` <a name="ResetStorageAccountUri" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.resetStorageAccountUri"></a>

```csharp
private void ResetStorageAccountUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUriInput">StorageAccountUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUri">StorageAccountUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics">WindowsVirtualMachineScaleSetBootDiagnostics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageAccountUriInput`<sup>Optional</sup> <a name="StorageAccountUriInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUriInput"></a>

```csharp
public string StorageAccountUriInput { get; }
```

- *Type:* string

---

##### `StorageAccountUri`<sup>Required</sup> <a name="StorageAccountUri" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUri"></a>

```csharp
public string StorageAccountUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineScaleSetBootDiagnostics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetBootDiagnostics">WindowsVirtualMachineScaleSetBootDiagnostics</a>

---


### WindowsVirtualMachineScaleSetDataDiskList <a name="WindowsVirtualMachineScaleSetDataDiskList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetDataDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.get"></a>

```csharp
private WindowsVirtualMachineScaleSetDataDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetDataDiskOutputReference <a name="WindowsVirtualMachineScaleSetDataDiskOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetDataDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetCreateOption">ResetCreateOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetDiskEncryptionSetId">ResetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetUltraSsdDiskIopsReadWrite">ResetUltraSsdDiskIopsReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetUltraSsdDiskMbpsReadWrite">ResetUltraSsdDiskMbpsReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetWriteAcceleratorEnabled">ResetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreateOption` <a name="ResetCreateOption" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetCreateOption"></a>

```csharp
private void ResetCreateOption()
```

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetDiskEncryptionSetId"></a>

```csharp
private void ResetDiskEncryptionSetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetUltraSsdDiskIopsReadWrite` <a name="ResetUltraSsdDiskIopsReadWrite" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetUltraSsdDiskIopsReadWrite"></a>

```csharp
private void ResetUltraSsdDiskIopsReadWrite()
```

##### `ResetUltraSsdDiskMbpsReadWrite` <a name="ResetUltraSsdDiskMbpsReadWrite" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetUltraSsdDiskMbpsReadWrite"></a>

```csharp
private void ResetUltraSsdDiskMbpsReadWrite()
```

##### `ResetWriteAcceleratorEnabled` <a name="ResetWriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```csharp
private void ResetWriteAcceleratorEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.cachingInput">CachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.createOptionInput">CreateOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.lunInput">LunInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWriteInput">UltraSsdDiskIopsReadWriteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWriteInput">UltraSsdDiskMbpsReadWriteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabledInput">WriteAcceleratorEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.caching">Caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.createOption">CreateOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.lun">Lun</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWrite">UltraSsdDiskIopsReadWrite</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWrite">UltraSsdDiskMbpsReadWrite</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.cachingInput"></a>

```csharp
public string CachingInput { get; }
```

- *Type:* string

---

##### `CreateOptionInput`<sup>Optional</sup> <a name="CreateOptionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.createOptionInput"></a>

```csharp
public string CreateOptionInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```csharp
public string DiskEncryptionSetIdInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.lunInput"></a>

```csharp
public double LunInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountTypeInput"></a>

```csharp
public string StorageAccountTypeInput { get; }
```

- *Type:* string

---

##### `UltraSsdDiskIopsReadWriteInput`<sup>Optional</sup> <a name="UltraSsdDiskIopsReadWriteInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWriteInput"></a>

```csharp
public double UltraSsdDiskIopsReadWriteInput { get; }
```

- *Type:* double

---

##### `UltraSsdDiskMbpsReadWriteInput`<sup>Optional</sup> <a name="UltraSsdDiskMbpsReadWriteInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWriteInput"></a>

```csharp
public double UltraSsdDiskMbpsReadWriteInput { get; }
```

- *Type:* double

---

##### `WriteAcceleratorEnabledInput`<sup>Optional</sup> <a name="WriteAcceleratorEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```csharp
public object WriteAcceleratorEnabledInput { get; }
```

- *Type:* object

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.caching"></a>

```csharp
public string Caching { get; }
```

- *Type:* string

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.createOption"></a>

```csharp
public string CreateOption { get; }
```

- *Type:* string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.lun"></a>

```csharp
public double Lun { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; }
```

- *Type:* string

---

##### `UltraSsdDiskIopsReadWrite`<sup>Required</sup> <a name="UltraSsdDiskIopsReadWrite" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWrite"></a>

```csharp
public double UltraSsdDiskIopsReadWrite { get; }
```

- *Type:* double

---

##### `UltraSsdDiskMbpsReadWrite`<sup>Required</sup> <a name="UltraSsdDiskMbpsReadWrite" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWrite"></a>

```csharp
public double UltraSsdDiskMbpsReadWrite { get; }
```

- *Type:* double

---

##### `WriteAcceleratorEnabled`<sup>Required</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetDataDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetExtensionList <a name="WindowsVirtualMachineScaleSetExtensionList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetExtensionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.get"></a>

```csharp
private WindowsVirtualMachineScaleSetExtensionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetExtensionOutputReference <a name="WindowsVirtualMachineScaleSetExtensionOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetExtensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.putProtectedSettingsFromKeyVault">PutProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetAutomaticUpgradeEnabled">ResetAutomaticUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetAutoUpgradeMinorVersion">ResetAutoUpgradeMinorVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetForceUpdateTag">ResetForceUpdateTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettings">ResetProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettingsFromKeyVault">ResetProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetProvisionAfterExtensions">ResetProvisionAfterExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProtectedSettingsFromKeyVault` <a name="PutProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.putProtectedSettingsFromKeyVault"></a>

```csharp
private void PutProtectedSettingsFromKeyVault(WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.putProtectedSettingsFromKeyVault.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---

##### `ResetAutomaticUpgradeEnabled` <a name="ResetAutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetAutomaticUpgradeEnabled"></a>

```csharp
private void ResetAutomaticUpgradeEnabled()
```

##### `ResetAutoUpgradeMinorVersion` <a name="ResetAutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetAutoUpgradeMinorVersion"></a>

```csharp
private void ResetAutoUpgradeMinorVersion()
```

##### `ResetForceUpdateTag` <a name="ResetForceUpdateTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetForceUpdateTag"></a>

```csharp
private void ResetForceUpdateTag()
```

##### `ResetProtectedSettings` <a name="ResetProtectedSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettings"></a>

```csharp
private void ResetProtectedSettings()
```

##### `ResetProtectedSettingsFromKeyVault` <a name="ResetProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettingsFromKeyVault"></a>

```csharp
private void ResetProtectedSettingsFromKeyVault()
```

##### `ResetProvisionAfterExtensions` <a name="ResetProvisionAfterExtensions" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetProvisionAfterExtensions"></a>

```csharp
private void ResetProvisionAfterExtensions()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVault">ProtectedSettingsFromKeyVault</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabledInput">AutomaticUpgradeEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersionInput">AutoUpgradeMinorVersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTagInput">ForceUpdateTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVaultInput">ProtectedSettingsFromKeyVaultInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsInput">ProtectedSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensionsInput">ProvisionAfterExtensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.settingsInput">SettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersionInput">TypeHandlerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabled">AutomaticUpgradeEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersion">AutoUpgradeMinorVersion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTag">ForceUpdateTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettings">ProtectedSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensions">ProvisionAfterExtensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.settings">Settings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersion">TypeHandlerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProtectedSettingsFromKeyVault`<sup>Required</sup> <a name="ProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVault"></a>

```csharp
public WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference ProtectedSettingsFromKeyVault { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference</a>

---

##### `AutomaticUpgradeEnabledInput`<sup>Optional</sup> <a name="AutomaticUpgradeEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabledInput"></a>

```csharp
public object AutomaticUpgradeEnabledInput { get; }
```

- *Type:* object

---

##### `AutoUpgradeMinorVersionInput`<sup>Optional</sup> <a name="AutoUpgradeMinorVersionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersionInput"></a>

```csharp
public object AutoUpgradeMinorVersionInput { get; }
```

- *Type:* object

---

##### `ForceUpdateTagInput`<sup>Optional</sup> <a name="ForceUpdateTagInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTagInput"></a>

```csharp
public string ForceUpdateTagInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtectedSettingsFromKeyVaultInput`<sup>Optional</sup> <a name="ProtectedSettingsFromKeyVaultInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVaultInput"></a>

```csharp
public WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault ProtectedSettingsFromKeyVaultInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---

##### `ProtectedSettingsInput`<sup>Optional</sup> <a name="ProtectedSettingsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsInput"></a>

```csharp
public string ProtectedSettingsInput { get; }
```

- *Type:* string

---

##### `ProvisionAfterExtensionsInput`<sup>Optional</sup> <a name="ProvisionAfterExtensionsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensionsInput"></a>

```csharp
public string[] ProvisionAfterExtensionsInput { get; }
```

- *Type:* string[]

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.settingsInput"></a>

```csharp
public string SettingsInput { get; }
```

- *Type:* string

---

##### `TypeHandlerVersionInput`<sup>Optional</sup> <a name="TypeHandlerVersionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersionInput"></a>

```csharp
public string TypeHandlerVersionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AutomaticUpgradeEnabled`<sup>Required</sup> <a name="AutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabled"></a>

```csharp
public object AutomaticUpgradeEnabled { get; }
```

- *Type:* object

---

##### `AutoUpgradeMinorVersion`<sup>Required</sup> <a name="AutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersion"></a>

```csharp
public object AutoUpgradeMinorVersion { get; }
```

- *Type:* object

---

##### `ForceUpdateTag`<sup>Required</sup> <a name="ForceUpdateTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTag"></a>

```csharp
public string ForceUpdateTag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtectedSettings`<sup>Required</sup> <a name="ProtectedSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.protectedSettings"></a>

```csharp
public string ProtectedSettings { get; }
```

- *Type:* string

---

##### `ProvisionAfterExtensions`<sup>Required</sup> <a name="ProvisionAfterExtensions" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensions"></a>

```csharp
public string[] ProvisionAfterExtensions { get; }
```

- *Type:* string[]

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.settings"></a>

```csharp
public string Settings { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `TypeHandlerVersion`<sup>Required</sup> <a name="TypeHandlerVersion" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersion"></a>

```csharp
public string TypeHandlerVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference <a name="WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput">SecretUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput">SourceVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl">SecretUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId">SourceVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretUrlInput`<sup>Optional</sup> <a name="SecretUrlInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput"></a>

```csharp
public string SecretUrlInput { get; }
```

- *Type:* string

---

##### `SourceVaultIdInput`<sup>Optional</sup> <a name="SourceVaultIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput"></a>

```csharp
public string SourceVaultIdInput { get; }
```

- *Type:* string

---

##### `SecretUrl`<sup>Required</sup> <a name="SecretUrl" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl"></a>

```csharp
public string SecretUrl { get; }
```

- *Type:* string

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId"></a>

```csharp
public string SourceVaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---


### WindowsVirtualMachineScaleSetGalleryApplicationList <a name="WindowsVirtualMachineScaleSetGalleryApplicationList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetGalleryApplicationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.get"></a>

```csharp
private WindowsVirtualMachineScaleSetGalleryApplicationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetGalleryApplicationOutputReference <a name="WindowsVirtualMachineScaleSetGalleryApplicationOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetGalleryApplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.resetConfigurationBlobUri">ResetConfigurationBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigurationBlobUri` <a name="ResetConfigurationBlobUri" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.resetConfigurationBlobUri"></a>

```csharp
private void ResetConfigurationBlobUri()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.configurationBlobUriInput">ConfigurationBlobUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.configurationBlobUri">ConfigurationBlobUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigurationBlobUriInput`<sup>Optional</sup> <a name="ConfigurationBlobUriInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.configurationBlobUriInput"></a>

```csharp
public string ConfigurationBlobUriInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationBlobUri`<sup>Required</sup> <a name="ConfigurationBlobUri" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.configurationBlobUri"></a>

```csharp
public string ConfigurationBlobUri { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetGalleryApplicationsList <a name="WindowsVirtualMachineScaleSetGalleryApplicationsList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetGalleryApplicationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.get"></a>

```csharp
private WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference <a name="WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.resetConfigurationReferenceBlobUri">ResetConfigurationReferenceBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigurationReferenceBlobUri` <a name="ResetConfigurationReferenceBlobUri" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.resetConfigurationReferenceBlobUri"></a>

```csharp
private void ResetConfigurationReferenceBlobUri()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.configurationReferenceBlobUriInput">ConfigurationReferenceBlobUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.packageReferenceIdInput">PackageReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.configurationReferenceBlobUri">ConfigurationReferenceBlobUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.packageReferenceId">PackageReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigurationReferenceBlobUriInput`<sup>Optional</sup> <a name="ConfigurationReferenceBlobUriInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.configurationReferenceBlobUriInput"></a>

```csharp
public string ConfigurationReferenceBlobUriInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `PackageReferenceIdInput`<sup>Optional</sup> <a name="PackageReferenceIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.packageReferenceIdInput"></a>

```csharp
public string PackageReferenceIdInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `ConfigurationReferenceBlobUri`<sup>Required</sup> <a name="ConfigurationReferenceBlobUri" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.configurationReferenceBlobUri"></a>

```csharp
public string ConfigurationReferenceBlobUri { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `PackageReferenceId`<sup>Required</sup> <a name="PackageReferenceId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.packageReferenceId"></a>

```csharp
public string PackageReferenceId { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetGalleryApplicationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetIdentityOutputReference <a name="WindowsVirtualMachineScaleSetIdentityOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity">WindowsVirtualMachineScaleSetIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentityOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineScaleSetIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetIdentity">WindowsVirtualMachineScaleSetIdentity</a>

---


### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get"></a>

```csharp
private WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.putPublicIpAddress">PutPublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetApplicationGatewayBackendAddressPoolIds">ResetApplicationGatewayBackendAddressPoolIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetApplicationSecurityGroupIds">ResetApplicationSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerBackendAddressPoolIds">ResetLoadBalancerBackendAddressPoolIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerInboundNatRulesIds">ResetLoadBalancerInboundNatRulesIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPublicIpAddress">ResetPublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicIpAddress` <a name="PutPublicIpAddress" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.putPublicIpAddress"></a>

```csharp
private void PutPublicIpAddress(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.putPublicIpAddress.parameter.value"></a>

- *Type:* object

---

##### `ResetApplicationGatewayBackendAddressPoolIds` <a name="ResetApplicationGatewayBackendAddressPoolIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetApplicationGatewayBackendAddressPoolIds"></a>

```csharp
private void ResetApplicationGatewayBackendAddressPoolIds()
```

##### `ResetApplicationSecurityGroupIds` <a name="ResetApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetApplicationSecurityGroupIds"></a>

```csharp
private void ResetApplicationSecurityGroupIds()
```

##### `ResetLoadBalancerBackendAddressPoolIds` <a name="ResetLoadBalancerBackendAddressPoolIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerBackendAddressPoolIds"></a>

```csharp
private void ResetLoadBalancerBackendAddressPoolIds()
```

##### `ResetLoadBalancerInboundNatRulesIds` <a name="ResetLoadBalancerInboundNatRulesIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerInboundNatRulesIds"></a>

```csharp
private void ResetLoadBalancerInboundNatRulesIds()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```

##### `ResetPublicIpAddress` <a name="ResetPublicIpAddress" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPublicIpAddress"></a>

```csharp
private void ResetPublicIpAddress()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress">PublicIpAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIdsInput">ApplicationGatewayBackendAddressPoolIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIdsInput">ApplicationSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIdsInput">LoadBalancerBackendAddressPoolIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIdsInput">LoadBalancerInboundNatRulesIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressInput">PublicIpAddressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds">ApplicationGatewayBackendAddressPoolIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds">ApplicationSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds">LoadBalancerBackendAddressPoolIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds">LoadBalancerInboundNatRulesIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary">Primary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress"></a>

```csharp
public WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList PublicIpAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a>

---

##### `ApplicationGatewayBackendAddressPoolIdsInput`<sup>Optional</sup> <a name="ApplicationGatewayBackendAddressPoolIdsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIdsInput"></a>

```csharp
public string[] ApplicationGatewayBackendAddressPoolIdsInput { get; }
```

- *Type:* string[]

---

##### `ApplicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="ApplicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIdsInput"></a>

```csharp
public string[] ApplicationSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `LoadBalancerBackendAddressPoolIdsInput`<sup>Optional</sup> <a name="LoadBalancerBackendAddressPoolIdsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIdsInput"></a>

```csharp
public string[] LoadBalancerBackendAddressPoolIdsInput { get; }
```

- *Type:* string[]

---

##### `LoadBalancerInboundNatRulesIdsInput`<sup>Optional</sup> <a name="LoadBalancerInboundNatRulesIdsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIdsInput"></a>

```csharp
public string[] LoadBalancerInboundNatRulesIdsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primaryInput"></a>

```csharp
public object PrimaryInput { get; }
```

- *Type:* object

---

##### `PublicIpAddressInput`<sup>Optional</sup> <a name="PublicIpAddressInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressInput"></a>

```csharp
public object PublicIpAddressInput { get; }
```

- *Type:* object

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ApplicationGatewayBackendAddressPoolIds`<sup>Required</sup> <a name="ApplicationGatewayBackendAddressPoolIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds"></a>

```csharp
public string[] ApplicationGatewayBackendAddressPoolIds { get; }
```

- *Type:* string[]

---

##### `ApplicationSecurityGroupIds`<sup>Required</sup> <a name="ApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds"></a>

```csharp
public string[] ApplicationSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `LoadBalancerBackendAddressPoolIds`<sup>Required</sup> <a name="LoadBalancerBackendAddressPoolIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds"></a>

```csharp
public string[] LoadBalancerBackendAddressPoolIds { get; }
```

- *Type:* string[]

---

##### `LoadBalancerInboundNatRulesIds`<sup>Required</sup> <a name="LoadBalancerInboundNatRulesIds" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds"></a>

```csharp
public string[] LoadBalancerInboundNatRulesIds { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary"></a>

```csharp
public object Primary { get; }
```

- *Type:* object

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get"></a>

```csharp
private WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get"></a>

```csharp
private WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference <a name="WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.putIpTag">PutIpTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetDomainNameLabel">ResetDomainNameLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetIdleTimeoutInMinutes">ResetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetIpTag">ResetIpTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetPublicIpPrefixId">ResetPublicIpPrefixId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpTag` <a name="PutIpTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.putIpTag"></a>

```csharp
private void PutIpTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.putIpTag.parameter.value"></a>

- *Type:* object

---

##### `ResetDomainNameLabel` <a name="ResetDomainNameLabel" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetDomainNameLabel"></a>

```csharp
private void ResetDomainNameLabel()
```

##### `ResetIdleTimeoutInMinutes` <a name="ResetIdleTimeoutInMinutes" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetIdleTimeoutInMinutes"></a>

```csharp
private void ResetIdleTimeoutInMinutes()
```

##### `ResetIpTag` <a name="ResetIpTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetIpTag"></a>

```csharp
private void ResetIpTag()
```

##### `ResetPublicIpPrefixId` <a name="ResetPublicIpPrefixId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetPublicIpPrefixId"></a>

```csharp
private void ResetPublicIpPrefixId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag">IpTag</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabelInput">DomainNameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutesInput">IdleTimeoutInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTagInput">IpTagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixIdInput">PublicIpPrefixIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel">DomainNameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId">PublicIpPrefixId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpTag`<sup>Required</sup> <a name="IpTag" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag"></a>

```csharp
public WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList IpTag { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a>

---

##### `DomainNameLabelInput`<sup>Optional</sup> <a name="DomainNameLabelInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabelInput"></a>

```csharp
public string DomainNameLabelInput { get; }
```

- *Type:* string

---

##### `IdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="IdleTimeoutInMinutesInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutesInput"></a>

```csharp
public double IdleTimeoutInMinutesInput { get; }
```

- *Type:* double

---

##### `IpTagInput`<sup>Optional</sup> <a name="IpTagInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTagInput"></a>

```csharp
public object IpTagInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicIpPrefixIdInput`<sup>Optional</sup> <a name="PublicIpPrefixIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixIdInput"></a>

```csharp
public string PublicIpPrefixIdInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `DomainNameLabel`<sup>Required</sup> <a name="DomainNameLabel" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel"></a>

```csharp
public string DomainNameLabel { get; }
```

- *Type:* string

---

##### `IdleTimeoutInMinutes`<sup>Required</sup> <a name="IdleTimeoutInMinutes" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes"></a>

```csharp
public double IdleTimeoutInMinutes { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicIpPrefixId`<sup>Required</sup> <a name="PublicIpPrefixId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId"></a>

```csharp
public string PublicIpPrefixId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetNetworkInterfaceList <a name="WindowsVirtualMachineScaleSetNetworkInterfaceList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.get"></a>

```csharp
private WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference <a name="WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.putIpConfiguration">PutIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resetDnsServers">ResetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableAcceleratedNetworking">ResetEnableAcceleratedNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableIpForwarding">ResetEnableIpForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resetNetworkSecurityGroupId">ResetNetworkSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resetPrimary">ResetPrimary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpConfiguration` <a name="PutIpConfiguration" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.putIpConfiguration"></a>

```csharp
private void PutIpConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.putIpConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetDnsServers` <a name="ResetDnsServers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resetDnsServers"></a>

```csharp
private void ResetDnsServers()
```

##### `ResetEnableAcceleratedNetworking` <a name="ResetEnableAcceleratedNetworking" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableAcceleratedNetworking"></a>

```csharp
private void ResetEnableAcceleratedNetworking()
```

##### `ResetEnableIpForwarding` <a name="ResetEnableIpForwarding" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableIpForwarding"></a>

```csharp
private void ResetEnableIpForwarding()
```

##### `ResetNetworkSecurityGroupId` <a name="ResetNetworkSecurityGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resetNetworkSecurityGroupId"></a>

```csharp
private void ResetNetworkSecurityGroupId()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.resetPrimary"></a>

```csharp
private void ResetPrimary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServersInput">DnsServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworkingInput">EnableAcceleratedNetworkingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwardingInput">EnableIpForwardingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupIdInput">NetworkSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworking">EnableAcceleratedNetworking</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwarding">EnableIpForwarding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary">Primary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration"></a>

```csharp
public WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList IpConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a>

---

##### `DnsServersInput`<sup>Optional</sup> <a name="DnsServersInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServersInput"></a>

```csharp
public string[] DnsServersInput { get; }
```

- *Type:* string[]

---

##### `EnableAcceleratedNetworkingInput`<sup>Optional</sup> <a name="EnableAcceleratedNetworkingInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworkingInput"></a>

```csharp
public object EnableAcceleratedNetworkingInput { get; }
```

- *Type:* object

---

##### `EnableIpForwardingInput`<sup>Optional</sup> <a name="EnableIpForwardingInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwardingInput"></a>

```csharp
public object EnableIpForwardingInput { get; }
```

- *Type:* object

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfigurationInput"></a>

```csharp
public object IpConfigurationInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupIdInput`<sup>Optional</sup> <a name="NetworkSecurityGroupIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupIdInput"></a>

```csharp
public string NetworkSecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primaryInput"></a>

```csharp
public object PrimaryInput { get; }
```

- *Type:* object

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; }
```

- *Type:* string[]

---

##### `EnableAcceleratedNetworking`<sup>Required</sup> <a name="EnableAcceleratedNetworking" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworking"></a>

```csharp
public object EnableAcceleratedNetworking { get; }
```

- *Type:* object

---

##### `EnableIpForwarding`<sup>Required</sup> <a name="EnableIpForwarding" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwarding"></a>

```csharp
public object EnableIpForwarding { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupId`<sup>Required</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId"></a>

```csharp
public string NetworkSecurityGroupId { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary"></a>

```csharp
public object Primary { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference <a name="WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resetPlacement">ResetPlacement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resetPlacement"></a>

```csharp
private void ResetPlacement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.optionInput">OptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placementInput">PlacementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.option">Option</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placement">Placement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptionInput`<sup>Optional</sup> <a name="OptionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.optionInput"></a>

```csharp
public string OptionInput { get; }
```

- *Type:* string

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placementInput"></a>

```csharp
public string PlacementInput { get; }
```

- *Type:* string

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.option"></a>

```csharp
public string Option { get; }
```

- *Type:* string

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placement"></a>

```csharp
public string Placement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

---


### WindowsVirtualMachineScaleSetOsDiskOutputReference <a name="WindowsVirtualMachineScaleSetOsDiskOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetOsDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.putDiffDiskSettings">PutDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetDiffDiskSettings">ResetDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetDiskEncryptionSetId">ResetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetSecureVmDiskEncryptionSetId">ResetSecureVmDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetSecurityEncryptionType">ResetSecurityEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetWriteAcceleratorEnabled">ResetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiffDiskSettings` <a name="PutDiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.putDiffDiskSettings"></a>

```csharp
private void PutDiffDiskSettings(WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.putDiffDiskSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

---

##### `ResetDiffDiskSettings` <a name="ResetDiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetDiffDiskSettings"></a>

```csharp
private void ResetDiffDiskSettings()
```

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetDiskEncryptionSetId"></a>

```csharp
private void ResetDiskEncryptionSetId()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetSecureVmDiskEncryptionSetId` <a name="ResetSecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetSecureVmDiskEncryptionSetId"></a>

```csharp
private void ResetSecureVmDiskEncryptionSetId()
```

##### `ResetSecurityEncryptionType` <a name="ResetSecurityEncryptionType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetSecurityEncryptionType"></a>

```csharp
private void ResetSecurityEncryptionType()
```

##### `ResetWriteAcceleratorEnabled` <a name="ResetWriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```csharp
private void ResetWriteAcceleratorEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettings">DiffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.cachingInput">CachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettingsInput">DiffDiskSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput">SecureVmDiskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.securityEncryptionTypeInput">SecurityEncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabledInput">WriteAcceleratorEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.caching">Caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.secureVmDiskEncryptionSetId">SecureVmDiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.securityEncryptionType">SecurityEncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk">WindowsVirtualMachineScaleSetOsDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiffDiskSettings`<sup>Required</sup> <a name="DiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettings"></a>

```csharp
public WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference DiffDiskSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference</a>

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.cachingInput"></a>

```csharp
public string CachingInput { get; }
```

- *Type:* string

---

##### `DiffDiskSettingsInput`<sup>Optional</sup> <a name="DiffDiskSettingsInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettingsInput"></a>

```csharp
public WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings DiffDiskSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings">WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```csharp
public string DiskEncryptionSetIdInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `SecureVmDiskEncryptionSetIdInput`<sup>Optional</sup> <a name="SecureVmDiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput"></a>

```csharp
public string SecureVmDiskEncryptionSetIdInput { get; }
```

- *Type:* string

---

##### `SecurityEncryptionTypeInput`<sup>Optional</sup> <a name="SecurityEncryptionTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.securityEncryptionTypeInput"></a>

```csharp
public string SecurityEncryptionTypeInput { get; }
```

- *Type:* string

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountTypeInput"></a>

```csharp
public string StorageAccountTypeInput { get; }
```

- *Type:* string

---

##### `WriteAcceleratorEnabledInput`<sup>Optional</sup> <a name="WriteAcceleratorEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```csharp
public object WriteAcceleratorEnabledInput { get; }
```

- *Type:* object

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.caching"></a>

```csharp
public string Caching { get; }
```

- *Type:* string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `SecureVmDiskEncryptionSetId`<sup>Required</sup> <a name="SecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.secureVmDiskEncryptionSetId"></a>

```csharp
public string SecureVmDiskEncryptionSetId { get; }
```

- *Type:* string

---

##### `SecurityEncryptionType`<sup>Required</sup> <a name="SecurityEncryptionType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.securityEncryptionType"></a>

```csharp
public string SecurityEncryptionType { get; }
```

- *Type:* string

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; }
```

- *Type:* string

---

##### `WriteAcceleratorEnabled`<sup>Required</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDiskOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineScaleSetOsDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetOsDisk">WindowsVirtualMachineScaleSetOsDisk</a>

---


### WindowsVirtualMachineScaleSetPlanOutputReference <a name="WindowsVirtualMachineScaleSetPlanOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetPlanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.productInput">ProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan">WindowsVirtualMachineScaleSetPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.productInput"></a>

```csharp
public string ProductInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlanOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineScaleSetPlan InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetPlan">WindowsVirtualMachineScaleSetPlan</a>

---


### WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference <a name="WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetCrossZoneUpgradesEnabled">ResetCrossZoneUpgradesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetMaximumSurgeInstancesEnabled">ResetMaximumSurgeInstancesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetPrioritizeUnhealthyInstancesEnabled">ResetPrioritizeUnhealthyInstancesEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrossZoneUpgradesEnabled` <a name="ResetCrossZoneUpgradesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetCrossZoneUpgradesEnabled"></a>

```csharp
private void ResetCrossZoneUpgradesEnabled()
```

##### `ResetMaximumSurgeInstancesEnabled` <a name="ResetMaximumSurgeInstancesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetMaximumSurgeInstancesEnabled"></a>

```csharp
private void ResetMaximumSurgeInstancesEnabled()
```

##### `ResetPrioritizeUnhealthyInstancesEnabled` <a name="ResetPrioritizeUnhealthyInstancesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetPrioritizeUnhealthyInstancesEnabled"></a>

```csharp
private void ResetPrioritizeUnhealthyInstancesEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.crossZoneUpgradesEnabledInput">CrossZoneUpgradesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercentInput">MaxBatchInstancePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maximumSurgeInstancesEnabledInput">MaximumSurgeInstancesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercentInput">MaxUnhealthyInstancePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercentInput">MaxUnhealthyUpgradedInstancePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatchesInput">PauseTimeBetweenBatchesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.prioritizeUnhealthyInstancesEnabledInput">PrioritizeUnhealthyInstancesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.crossZoneUpgradesEnabled">CrossZoneUpgradesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercent">MaxBatchInstancePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maximumSurgeInstancesEnabled">MaximumSurgeInstancesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercent">MaxUnhealthyInstancePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercent">MaxUnhealthyUpgradedInstancePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatches">PauseTimeBetweenBatches</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.prioritizeUnhealthyInstancesEnabled">PrioritizeUnhealthyInstancesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy">WindowsVirtualMachineScaleSetRollingUpgradePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossZoneUpgradesEnabledInput`<sup>Optional</sup> <a name="CrossZoneUpgradesEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.crossZoneUpgradesEnabledInput"></a>

```csharp
public object CrossZoneUpgradesEnabledInput { get; }
```

- *Type:* object

---

##### `MaxBatchInstancePercentInput`<sup>Optional</sup> <a name="MaxBatchInstancePercentInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercentInput"></a>

```csharp
public double MaxBatchInstancePercentInput { get; }
```

- *Type:* double

---

##### `MaximumSurgeInstancesEnabledInput`<sup>Optional</sup> <a name="MaximumSurgeInstancesEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maximumSurgeInstancesEnabledInput"></a>

```csharp
public object MaximumSurgeInstancesEnabledInput { get; }
```

- *Type:* object

---

##### `MaxUnhealthyInstancePercentInput`<sup>Optional</sup> <a name="MaxUnhealthyInstancePercentInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercentInput"></a>

```csharp
public double MaxUnhealthyInstancePercentInput { get; }
```

- *Type:* double

---

##### `MaxUnhealthyUpgradedInstancePercentInput`<sup>Optional</sup> <a name="MaxUnhealthyUpgradedInstancePercentInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercentInput"></a>

```csharp
public double MaxUnhealthyUpgradedInstancePercentInput { get; }
```

- *Type:* double

---

##### `PauseTimeBetweenBatchesInput`<sup>Optional</sup> <a name="PauseTimeBetweenBatchesInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatchesInput"></a>

```csharp
public string PauseTimeBetweenBatchesInput { get; }
```

- *Type:* string

---

##### `PrioritizeUnhealthyInstancesEnabledInput`<sup>Optional</sup> <a name="PrioritizeUnhealthyInstancesEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.prioritizeUnhealthyInstancesEnabledInput"></a>

```csharp
public object PrioritizeUnhealthyInstancesEnabledInput { get; }
```

- *Type:* object

---

##### `CrossZoneUpgradesEnabled`<sup>Required</sup> <a name="CrossZoneUpgradesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.crossZoneUpgradesEnabled"></a>

```csharp
public object CrossZoneUpgradesEnabled { get; }
```

- *Type:* object

---

##### `MaxBatchInstancePercent`<sup>Required</sup> <a name="MaxBatchInstancePercent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercent"></a>

```csharp
public double MaxBatchInstancePercent { get; }
```

- *Type:* double

---

##### `MaximumSurgeInstancesEnabled`<sup>Required</sup> <a name="MaximumSurgeInstancesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maximumSurgeInstancesEnabled"></a>

```csharp
public object MaximumSurgeInstancesEnabled { get; }
```

- *Type:* object

---

##### `MaxUnhealthyInstancePercent`<sup>Required</sup> <a name="MaxUnhealthyInstancePercent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercent"></a>

```csharp
public double MaxUnhealthyInstancePercent { get; }
```

- *Type:* double

---

##### `MaxUnhealthyUpgradedInstancePercent`<sup>Required</sup> <a name="MaxUnhealthyUpgradedInstancePercent" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercent"></a>

```csharp
public double MaxUnhealthyUpgradedInstancePercent { get; }
```

- *Type:* double

---

##### `PauseTimeBetweenBatches`<sup>Required</sup> <a name="PauseTimeBetweenBatches" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatches"></a>

```csharp
public string PauseTimeBetweenBatches { get; }
```

- *Type:* string

---

##### `PrioritizeUnhealthyInstancesEnabled`<sup>Required</sup> <a name="PrioritizeUnhealthyInstancesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.prioritizeUnhealthyInstancesEnabled"></a>

```csharp
public object PrioritizeUnhealthyInstancesEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineScaleSetRollingUpgradePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetRollingUpgradePolicy">WindowsVirtualMachineScaleSetRollingUpgradePolicy</a>

---


### WindowsVirtualMachineScaleSetScaleInOutputReference <a name="WindowsVirtualMachineScaleSetScaleInOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetScaleInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.resetForceDeletionEnabled">ResetForceDeletionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForceDeletionEnabled` <a name="ResetForceDeletionEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.resetForceDeletionEnabled"></a>

```csharp
private void ResetForceDeletionEnabled()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.resetRule"></a>

```csharp
private void ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.forceDeletionEnabledInput">ForceDeletionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.ruleInput">RuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.forceDeletionEnabled">ForceDeletionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.rule">Rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn">WindowsVirtualMachineScaleSetScaleIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForceDeletionEnabledInput`<sup>Optional</sup> <a name="ForceDeletionEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.forceDeletionEnabledInput"></a>

```csharp
public object ForceDeletionEnabledInput { get; }
```

- *Type:* object

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.ruleInput"></a>

```csharp
public string RuleInput { get; }
```

- *Type:* string

---

##### `ForceDeletionEnabled`<sup>Required</sup> <a name="ForceDeletionEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.forceDeletionEnabled"></a>

```csharp
public object ForceDeletionEnabled { get; }
```

- *Type:* object

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.rule"></a>

```csharp
public string Rule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleInOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineScaleSetScaleIn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetScaleIn">WindowsVirtualMachineScaleSetScaleIn</a>

---


### WindowsVirtualMachineScaleSetSecretCertificateList <a name="WindowsVirtualMachineScaleSetSecretCertificateList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetSecretCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.get"></a>

```csharp
private WindowsVirtualMachineScaleSetSecretCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetSecretCertificateOutputReference <a name="WindowsVirtualMachineScaleSetSecretCertificateOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetSecretCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.storeInput">StoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.store">Store</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StoreInput`<sup>Optional</sup> <a name="StoreInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.storeInput"></a>

```csharp
public string StoreInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Store`<sup>Required</sup> <a name="Store" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.store"></a>

```csharp
public string Store { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetSecretList <a name="WindowsVirtualMachineScaleSetSecretList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.get"></a>

```csharp
private WindowsVirtualMachineScaleSetSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetSecretOutputReference <a name="WindowsVirtualMachineScaleSetSecretOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.putCertificate">PutCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.putCertificate"></a>

```csharp
private void PutCertificate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.putCertificate.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList">WindowsVirtualMachineScaleSetSecretCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.certificate"></a>

```csharp
public WindowsVirtualMachineScaleSetSecretCertificateList Certificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretCertificateList">WindowsVirtualMachineScaleSetSecretCertificateList</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSecretOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference <a name="WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offerInput">OfferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offer">Offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference">WindowsVirtualMachineScaleSetSourceImageReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offerInput"></a>

```csharp
public string OfferInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offer"></a>

```csharp
public string Offer { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineScaleSetSourceImageReference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSourceImageReference">WindowsVirtualMachineScaleSetSourceImageReference</a>

---


### WindowsVirtualMachineScaleSetSpotRestoreOutputReference <a name="WindowsVirtualMachineScaleSetSpotRestoreOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetSpotRestoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore">WindowsVirtualMachineScaleSetSpotRestore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestoreOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineScaleSetSpotRestore InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetSpotRestore">WindowsVirtualMachineScaleSetSpotRestore</a>

---


### WindowsVirtualMachineScaleSetTerminateNotificationOutputReference <a name="WindowsVirtualMachineScaleSetTerminateNotificationOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetTerminateNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotification">WindowsVirtualMachineScaleSetTerminateNotification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotificationOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineScaleSetTerminateNotification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminateNotification">WindowsVirtualMachineScaleSetTerminateNotification</a>

---


### WindowsVirtualMachineScaleSetTerminationNotificationOutputReference <a name="WindowsVirtualMachineScaleSetTerminationNotificationOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetTerminationNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification">WindowsVirtualMachineScaleSetTerminationNotification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotificationOutputReference.property.internalValue"></a>

```csharp
public WindowsVirtualMachineScaleSetTerminationNotification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTerminationNotification">WindowsVirtualMachineScaleSetTerminationNotification</a>

---


### WindowsVirtualMachineScaleSetTimeoutsOutputReference <a name="WindowsVirtualMachineScaleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetWinrmListenerList <a name="WindowsVirtualMachineScaleSetWinrmListenerList" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetWinrmListenerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.get"></a>

```csharp
private WindowsVirtualMachineScaleSetWinrmListenerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WindowsVirtualMachineScaleSetWinrmListenerOutputReference <a name="WindowsVirtualMachineScaleSetWinrmListenerOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WindowsVirtualMachineScaleSetWinrmListenerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.resetCertificateUrl">ResetCertificateUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateUrl` <a name="ResetCertificateUrl" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.resetCertificateUrl"></a>

```csharp
private void ResetCertificateUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.certificateUrlInput">CertificateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.certificateUrl">CertificateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateUrlInput`<sup>Optional</sup> <a name="CertificateUrlInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.certificateUrlInput"></a>

```csharp
public string CertificateUrlInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `CertificateUrl`<sup>Required</sup> <a name="CertificateUrl" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.certificateUrl"></a>

```csharp
public string CertificateUrl { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.windowsVirtualMachineScaleSet.WindowsVirtualMachineScaleSetWinrmListenerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



